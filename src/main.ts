import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 720,
    height: 1280,

    backgroundColor: "#8fd3a7",

    parent: "app",

    scene: {
        create
    }
};

function create(this: Phaser.Scene) {

    this.add.text(
        360,
        250,
        "🌸 Blessing Quest",
        {
            fontSize: "42px",
            color: "#ffffff",
            fontFamily: "Arial"
        }
    ).setOrigin(0.5);

    this.add.text(
        360,
        350,
        "Sprint 2 Started",
        {
            fontSize: "24px",
            color: "#ffffff"
        }
    ).setOrigin(0.5);
}

new Phaser.Game(config);