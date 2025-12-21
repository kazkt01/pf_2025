'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Sparkles } from '@react-three/drei'
import { Suspense } from 'react'
import { Grass } from './Grass'
import { CameraController } from './CameraController'

export function Scene() {
  const fogColor = '#d6dbe0'
  const fogColorDarker = '#d6dbe0' // 背景色と同じにしてシルエットを消す

  return (
    <div className="fixed inset-0 -z-10" style={{ backgroundColor: fogColor }}>
      <Canvas camera={{ position: [0, 1, 8], fov: 45 }} dpr={[1, 1.5]}>
        <CameraController />
        {/* 
           fogExp2: 指数関数的な霧の効果
           args: [色, 初期濃度] 
           右側の数値(0.025)を変更すると初期の霧の濃さが変わります
        */}
        <fogExp2 attach="fog" args={[fogColorDarker, 0.002]} />
        
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <Grass />
          </group>


          <Environment preset="city" />
          <Sparkles 
            size={4}
            scale={[30, 20, 30]}
            position={[0, 4, 0]}
            speed={0.4}
            opacity={0.6}
            count={200}
            color="#ffffff"
          />
        </Suspense>
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 2]} intensity={0.8} />
      </Canvas>
    </div>
  )
}
