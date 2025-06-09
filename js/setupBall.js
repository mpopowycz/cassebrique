function setupBall(scene) {
    // BALL ANIMATION
    scene.ball = scene.physics.add.sprite(400, 250, 'ball');

    // Création des animations
    scene.anims.create({
        key: 'horizon_droite',
        frames: scene.anims.generateFrameNumbers('ball', { start: 1, end: 18 }),
        frameRate: 75,
        repeat: -1 // Répéter indéfiniment
    });

    scene.anims.create({
        key: 'horizon_gauche',
        frames: scene.anims.generateFrameNumbers('ball', { start: 18, end: 1 }),
        frameRate: 75,
        repeat: -1
    });

    scene.anims.create({
        key: 'vertical',
        frames: scene.anims.generateFrameNumbers('ball', { start: 19, end: 35 }),
        frameRate: 75,
        repeat: -1
    });

    // Jouer une animation
    scene.ball.play('vertical');

    // Configuration des propriétés physiques de la balle
    scene.ball.body.setBounce(1);
    scene.ball.body.collideWorldBounds = true;
}