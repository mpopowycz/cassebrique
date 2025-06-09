function message(scene) {
    // Configuration des messages, du score, du timer, etc.
    // Message de fin de partie
    let stateText = scene.add.text(scene.cameras.main.centerX, scene.cameras.main.centerY, ' ', { font: '65px Fipps', fill: '#fff' });
    stateText.setOrigin(0.5, 0.5); // Pour centrer le texte
    stateText.visible = false;

    // Message pour Winner
    let winText = scene.add.text(scene.cameras.main.centerX, scene.cameras.main.centerY, ' ', { font: '65px Fipps', fill: '#fff' });
    winText.setOrigin(0.5, 0.5);
    winText.visible = false;

    // Timer
    scene.timeText = scene.add.text(10, 50, 'Time: ' + scene.tempsRestant, { font: '22px Fipps', fill: '#000' });

    // Ajouter un événement qui se répète chaque seconde pour mettre à jour le timer
    scene.time.addEvent({
        delay: 1000, // 1000 millisecondes correspondent à 1 seconde
        callback: () => {
            if (!scene.gameOver) { // Vérifiez si le jeu est terminé
                scene.tempsRestant -= 1; // Décrémenter le temps restant
                scene.timeText.setText('Time: ' + scene.tempsRestant); // Mettre à jour le texte affiché

                // Condition pour arrêter le timer si le temps est écoulé
                if (scene.tempsRestant <= 0) {
                    scene.timeText.setText('Temps écoulé!');
                    scene.cameras.main.setBackgroundColor('#992d2d');

                    scene.physics.pause();

                    stateText.text = "LOSER, \n TOUCH SCREEN";
                    stateText.visible = true;
                    scene.gameOver = true; // Indiquer que le jeu est terminé

                    scene.input.once('pointerdown', () => {
                        scene.scene.start('IntroScene'); // Rediriger vers la scène d'introduction
                    });
                }
            }
        },
        callbackScope: scene,
        loop: true
    });
}