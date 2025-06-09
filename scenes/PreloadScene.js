class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        // Charger des spritesheets
        this.load.spritesheet('ball', './assets/sprites/ball_anim_rouge.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('explosion', './assets/sprites/boom32wh12.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('BG', './assets/sprites/BG1.png', {frameWidth:800, frameHeight: 934});

        // Charger des images
        this.load.image('platform1', './assets/sprites/tete_incas_272_110.png');
        this.load.image('diamant', './assets/sprites/diamond.png');
        this.load.image('diamant_bonus', './assets/sprites/diamond_bonus.png');
        this.load.image('rapidite', './assets/sprites/bonus_rapidite.png');

        // si preload.js exporte une fonction chargement
        chargement(this);
    }

    create() {
        // Passer à la scène principale ou suivante
        this.scene.start('IntroScene');
    }
}