import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { SCENE_CONFIG } from '@/config/scene'

export function CameraController() {
  const { camera, scene, size } = useThree()
  const pathname = usePathname()

  useEffect(() => {
    // パスに基づいて設定値を取得（見つからない場合はトップページの値を使用）
    const pathKey = pathname as keyof typeof SCENE_CONFIG.fog.density
    let targetZ = SCENE_CONFIG.camera.zPositions[pathKey] ?? SCENE_CONFIG.camera.zPositions['/']
    const targetDensity = SCENE_CONFIG.fog.density[pathKey] ?? SCENE_CONFIG.fog.density['/']

    // モバイル調整: 画面幅が小さい場合、カメラを少し引く（Z値を増やす）
    if (size.width < 768) {
        targetZ += 3 // 3ユニット後ろに下がる
    }

    gsap.to(camera.position, {
      z: targetZ,
      duration: SCENE_CONFIG.camera.duration,
      ease: SCENE_CONFIG.camera.ease
    })
    
    // カメラの回転をリセット（まっすぐ前を見る）
    camera.rotation.set(0, 0, 0)

    if (scene.fog && 'density' in scene.fog) {
        gsap.to(scene.fog, {
            density: targetDensity,
            duration: SCENE_CONFIG.camera.duration,
            ease: SCENE_CONFIG.camera.ease
        })
    }
  }, [pathname, camera, scene, size.width])

  return null
}
