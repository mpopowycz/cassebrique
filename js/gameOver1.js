function gameOver(scene, ball, zoneFin) {
        
    if (scene.music) scene.music.stop();

    // Pause et retour visuel
    scene.physics.pause();
    scene.cameras.main.setBackgroundColor('#992d2d');

    // Détruire objets
    if (scene.ball) {
        scene.ball.destroy();
    }

    if (scene.zoneFin) {
        scene.zoneFin.destroy();
    }

    const { width, height } = scene.cameras.main;

    scene.stateText = scene.add.text(width / 2, height / 2, 'LOSER\nTOUCH SCREEN', {
        font: '32px Fipps',
        fill: '#ffffff',
        align: 'center'
    }).setOrigin(0.5, 0.5); // Centrage horizontal et vertical
    scene.stateText.setVisible(true);

    scene.input.once('pointerdown', function () {
        scene.scene.start('IntroScene'); // Rediriger vers la scène d'introduction
    });

    scene.gameOver = true; // Indiquer que le jeu est terminé
}