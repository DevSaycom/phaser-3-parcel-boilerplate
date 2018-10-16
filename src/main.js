import 'phaser'
import BootScene from './scenes/BootScene'
import TitleScene from './scenes/TitleScene'
import GameScene from './scenes/GameScene'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'container',
  backgroundColor: '#2d2d2d',
  scene: [
    BootScene,
    TitleScene,
    GameScene
  ]
}

const game = new Phaser.Game(config)

