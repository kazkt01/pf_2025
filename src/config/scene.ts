export const SCENE_CONFIG = {
  fog: {
    color: '#d6dbe0', // 背景色と一致させシルエットを消す
    density: {
      '/': 0.005,
      '/about': 0.006,
      '/works': 0.007,
      '/gallery': 0.013,
      '/contact': 0.600,
    },
  },
  camera: {
    zPositions: {
      '/': 8,
      '/about': -4,
      '/works': -16,
      '/gallery': -28,
      '/contact': -40,
    },
    duration: 2.5,
    ease: 'power3.inOut',
  },
  grass: {
    // 完全に除外するゴミメッシュのキーワードリスト
    debrisBlacklist: [
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
    ],
    // 遠くにあるゴミを除外するためのZ座標の閾値
    zCutoff: 20,
    // クローンの配置設定
    instances: [
      { r: [0, 0, 0], p: [0, 0, 0] },          // オリジナル（中心）
      // { r: [0, 1.2, 0], p: [0.3, 0, 0.2] },     // 1
      { r: [0, 2.4, 0], p: [-0.2, 0, -0.1] },   // 2
      { r: [0, 3.6, 0], p: [0.2, 0, -0.2] },    // 3
      { r: [0, 4.8, 0], p: [-0.3, 0, 0.2] },    // 4
      { r: [0, 0.6, 0], p: [0.15, 0, 0.3] },     // 5
      { r: [0, 5.4, 0], p: [-0.15, 0, -0.3] },   // 6
    ]
  }
} as const
