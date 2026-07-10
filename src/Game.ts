import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#79C267");

    this.add
      .text(
        this.scale.width / 2,
        this.scale.height / 2,
        "🌸 Blessing Quest",
        {
          fontSize: "42px",
          color: "#ffffff",
          fontFamily: "Arial",
        }
      )
      .setOrigin(0.5);
  }
}

export const game = new Phaser.Game({
  type: Phaser.AUTO,

  width: 720,
  height: 1280,

  parent: "app",

  backgroundColor: "#79C267",

  scene: [BootScene],

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});