import { useEffect } from 'react'
import { Color, Mesh, MeshStandardMaterial, DoubleSide } from 'three'
import { useGLTF, Clone } from '@react-three/drei'

/**
 * 草原の3Dモデルを表示するコンポーネント
 */
export function Grass() {
  // 3Dモデル（glbファイル）をロードします
  const { scene } = useGLTF('/grassfield_opt.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        // マテリアルがMeshStandardMaterialの場合のみ色を変更
        if (mesh.material instanceof MeshStandardMaterial) {
          // マテリアルの設定を直接変更
          mesh.material.transparent = true
          mesh.material.alphaTest = 0.5
          mesh.material.side = DoubleSide
          
          // 白い部分を緑色に染める
          // 元のテクスチャの色と乗算されるため、少し明るめの緑を使用
          mesh.material.color = new Color('#2d4c1e')
          
          // 更新を通知
          mesh.material.needsUpdate = true
        }
      }
    })
  }, [scene])
  
  return (
    // ユーザー様が調整された現在の位置とスケール
    <group position={[4, -10, -8]} scale={30} rotation={[0, 0, 0]}>
      {/* 
        メインの草原モデルを配置 
        Blender等の座標系に合わせるため、X軸を中心に-90度回転させています
      */}
      <Clone 
        object={scene} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
    </group>
  )
}

// パフォーマンス向上のため、あらかじめモデルをプリロードしておきます
useGLTF.preload('/grassfield_opt.glb')
