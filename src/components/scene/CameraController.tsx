import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export function CameraController() {
  const { camera, scene } = useThree()
  const pathname = usePathname()

  useEffect(() => {
    let targetZ = 8
    let targetDensity = 0.005

    // ページごとの設定値
    // targetDensity: 霧の濃さ（値が大きいほど濃くなります）
    switch (pathname) {
      case '/about':
        targetZ = 0
        targetDensity = 0.04 // Aboutページの霧の濃さ
        break
      case '/works':
        targetZ = -8
        targetDensity = 0.05 // Worksページの霧の濃さ
        break
      case '/gallery':
        targetZ = -12
        targetDensity = 0.06 // Galleryページの霧の濃さ
        break
      case '/contact':
        targetZ = -16
        targetDensity = 0.075 // Contactページの霧の濃さ
        break
      default:
        targetZ = 8
        targetDensity = 0.025 // TOPページの霧の濃さ
    }

    gsap.to(camera.position, {
      z: targetZ,
      duration: 2.5,
      ease: 'power3.inOut'
    })

    if (scene.fog && 'density' in scene.fog) {
        gsap.to(scene.fog, {
            density: targetDensity,
            duration: 2.5,
            ease: 'power3.inOut'
        })
    }
  }, [pathname, camera, scene])

  return null
}
