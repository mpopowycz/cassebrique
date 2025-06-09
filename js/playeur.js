function playeur(scene) {
    let milieu = scene.cameras.main.centerX;

    // Initialiser le joueur
    scene.joueur = scene.physics.add.sprite(milieu, 790, 'platform1');
    scene.joueur.body.setImmovable(true);
    scene.joueur.body.collideWorldBounds = true;
    scene.joueur.body.setAllowGravity(false);

    // Permettre de jouer la plateforme par le toucher sur écran
    scene.joueur.setInteractive();
    scene.input.setDraggable(scene.joueur);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        // Ce code est exécuté à chaque mouvement de glisser-déposer
        gameObject.x = dragX;
    });

    // scene.physics.add.existing(scene.joueur);
}