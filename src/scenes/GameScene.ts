import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#6BBF59");

        this.add.text(
            30,
            30,
            "Game Scene",
            {
                fontSize: "28px",
                color: "#ffffff"
            }
        );

    }

}