class BootScene extends Phaser.Scene {
  constructor (test) {
    super({
      key: 'BootScene'
    })
  }
  preload () {
    console.log('BootScene')
    this.scene.start('TitleScene')
  }
  create () {

  }
  update () {

  }
}

export default BootScene