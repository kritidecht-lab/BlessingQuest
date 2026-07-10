import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import OpeningScene from "./scenes/OpeningScene";
import GameScene from "./scenes/GameScene";

new Phaser.Game({

    type: Phaser.AUTO,

    width: 720,
    height: 1280,

    parent: "app",

    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    },

    scene: [

        BootScene,

        OpeningScene,

        GameScene

    ]

});