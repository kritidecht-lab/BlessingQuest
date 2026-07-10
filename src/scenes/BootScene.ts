import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
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

        this.time.delayedCall(1500, () => {
            this.scene.start("OpeningScene");
        });
    }
}