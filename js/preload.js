function chargement(scene) {
    // Charger des spritesheets
    scene.load.spritesheet('ball', './assets/sprites/ball_anim_rouge.png', { frameWidth: 64, frameHeight: 64 });
    scene.load.spritesheet('explosion', './assets/sprites/boom32wh12.png', { frameWidth: 32, frameHeight: 32 });
    scene.load.spritesheet('BG', './assets/sprites/BG1.png', {frameWidth:64, frameHeight: 512});

    // Charger des images
    scene.load.image('platform1', './assets/sprites/tete_incas_272_110.png');
    scene.load.image('diamant', './assets/sprites/diamond.png');
    scene.load.image('diamant_bonus', './assets/sprites/diamond_bonus.png');
    scene.load.image('rapidite', './assets/sprites/bonus_rapidite.png');

    // Charger un fichier audio
    scene.load.audio('musique', [
      './assets/audio/audio_1.mp3'
    ]);
}