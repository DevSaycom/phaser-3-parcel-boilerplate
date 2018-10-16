import Logo from '/src/sprites/logo.png'

class GameScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'GameScene'
    })
  }
  preload () {
    this.load.image('logo', Logo)
  }
  create () {
    console.log('GameScene')
    let logo = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo')
    logo.setScale(.5)
  }
  update () {

  }
}

export default GameScene