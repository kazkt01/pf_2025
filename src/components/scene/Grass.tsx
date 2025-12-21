import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial } from 'three'
import { useGLTF, Clone } from '@react-three/drei'

/**
 * 草原の3Dモデルを表示するコンポーネント
 */
export function Grass() {
  // 3Dモデル（glbファイル）をロードします
  const { scene } = useGLTF('/grass2_opt.glb')
  
  // シェーダーのuniformsを管理するためのRef
  const uniformsRef = useRef<{ uTime: { value: number } }>({ uTime: { value: 0 } })

  useMemo(() => {
    // モデル内の全てのマテリアルに風のアニメーションを注入
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        if (mesh.material instanceof MeshStandardMaterial) {
          // 可視性をリセット
          mesh.visible = true

          const name = (mesh.name || '').toLowerCase()
          
          // 1. ブラックリストによる除外（大文字小文字無視）
          // 注意: "grass" や "clump" (単体) はメインの草に含まれるため除外しない
          const ignoreNames = [
            // 'wasteland', 'winter', 'weed', 'clover', 'flower', 
            // 'medium', 'small', 'big', 'tiny', 'branches', 'leaves', 'leave',
            // 'nettle', 'wild', 'gravel', 'clump.', // clump.001などを除外
            // 'dandelion', 'daisies', 'dirt', 'plane', 'stem', 
            'dry', 
            'type', 
            'snow', 
            'dead', 
            // 'duo',
            // 'an', 
            'b01'
          ]
          const isBlacklisted = ignoreNames.some(n => name.includes(n))

          // 2. 座標による除外 (ゴミパーツは Z=39 付近にある)
          const isDistantZ = Math.abs(mesh.position.z) > 20

          // いずれかに該当すれば非表示
          if (isBlacklisted || isDistantZ) {
            mesh.visible = false
            return
          }

          // マテリアルのコンパイル前にシェーダーを書き換え
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          mesh.material.onBeforeCompile = (shader: any) => {
            // uniformを追加
            shader.uniforms.uTime = uniformsRef.current.uTime

            // 頂点シェーダーの共通部分に追加
            shader.vertexShader = `
              uniform float uTime;
            ` + shader.vertexShader

            // 頂点位置の計算部分を書き換え
            // position.y（高さ）に応じで揺れ幅を大きくする
            shader.vertexShader = shader.vertexShader.replace(
              '#include <begin_vertex>',
              `
                #include <begin_vertex>
                
                // 風のパラメータ
                float frequency = 0.8;
                float amplitude = 0.1;
                float speed = 1.0;
                
                // シンプルなサイン波で揺れを作成
                // x座標とz座標を時間経過とともにずらす
                // transformed.y (高さ) を係数にして、地面に近い部分は揺れないようにする
                
                float windX = sin(uTime * speed + position.x * frequency) * amplitude * transformed.y;
                float windZ = cos(uTime * speed * 0.8 + position.z * frequency) * amplitude * transformed.y * 0.5;
                
                transformed.x += windX;
                transformed.z += windZ;
              `
            )
          }
          // これを設定しないとシェーダーの再コンパイルが走らない場合がある
          mesh.material.needsUpdate = true
        }
      }
    })
  }, [scene])

  // 毎フレーム時間を更新してアニメーションさせる
  useFrame((state, delta) => {
    uniformsRef.current.uTime.value += delta
  })
  
  return (
    // ユーザー様が調整された現在の位置とスケール
    <group position={[7, -40,-50]} scale={20} rotation={[0, 0, 0]}>
      {/* 
        メインの草原モデルを配置 
        ハゲている部分を完全に埋めるため、合計7つのモデルを重ねて配置します
      */}
      {[
        { r: [0, 0, 0], p: [0, 0, 0] },          // オリジナル（中心）
        // { r: [0, 1.2, 0], p: [0.3, 0, 0.2] },     // 1
        { r: [0, 2.4, 0], p: [-0.2, 0, -0.1] },   // 2
        { r: [0, 3.6, 0], p: [0.2, 0, -0.2] },    // 3
        { r: [0, 4.8, 0], p: [-0.3, 0, 0.2] },    // 4
        { r: [0, 0.6, 0], p: [0.1, 0, 0.3] },     // 5
        { r: [0, 5.4, 0], p: [-0.1, 0, -0.3] },   // 6
      ].map((props, i) => (
        <Clone
          key={i}
          object={scene}
          rotation={props.r as [number, number, number]}
          position={props.p as [number, number, number]}
        />
      ))}
    </group>
  )
}

// パフォーマンス向上のため、あらかじめモデルをプリロードしておきます
useGLTF.preload('/grass2_opt.glb')
