import Phaser from "phaser";

export default class OpeningScene extends Phaser.Scene {

    constructor() {
        super("OpeningScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#1E1E2E");

        this.add
            .text(
                this.scale.width / 2,
                250,
                "🌸",
                {
                    fontSize: "64px"
                }
            )
            .setOrigin(0.5);

        this.add
            .text(
                this.scale.width / 2,
                380,
                "A little adventure\nhas been prepared\njust for you.",
                {
                    align: "center",
                    color: "#ffffff",
                    fontSize: "28px"
                }
            )
            .setOrigin(0.5);

        this.add
            .text(
                this.scale.width / 2,
                950,
                "Tap to Start",
                {
                    color: "#FFD966",
                    fontSize: "32px"
                }
            )
            .setOrigin(0.5);

        this.input.once("pointerdown", () => {

            this.scene.start("GameScene");

        });

    }

}