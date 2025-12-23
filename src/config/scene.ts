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
      'flower',
      'weed',
      'clover',
      'dead',
      'dry', 
      'type', 
      'snow', 
      'b01',
      // 'clump',
      // 'ground'
    ],
    // 遠くにあるゴミを除外するためのZ座標の閾値
    zCutoff: 20,
    // クローンの配置設定
    // r: Rotation (回転) [x, y, z] - 単位はラジアン。Y軸を中心に回転させて向きを調整します
    // p: Position (位置) [x, y, z] - x: 左右 (正が右), y: 上下, z: 前後 (負が手前)
    instances: [
      { r: [0, 0, 0], p: [-4, -1, -4] },          // オリジナル（中心）
      { r: [0, 0, 0], p: [7, -1, -3] },     // 左サイド: 水平に並べる (Z=0)
      { r: [0, -0, 0], p: [15, 0-1,-2] },     // 右サイド: 水平に並べる (Z=0)
      // { r: [0, 4.8, 0], p: [-0.3, 0, 0.2] },    // 4
      // { r: [0, 0.6, 0], p: [0.15, 0, 0.3] },     // 5
      // { r: [0, 5.4, 0], p: [-0.15, 0, -0.3] },   // 6
    ]
  }
} as const
