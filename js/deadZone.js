function deadZone(scene) {
    // 1) Créer et stocker la zone
    scene.zoneFin = scene.add.zone(0, 800).setSize(1000, 10);
    scene.physics.world.enable(scene.zoneFin, Phaser.Physics.Arcade.STATIC_BODY);
    scene.zoneFin.setOrigin(0, 0);

    scene.ballZoneCollider = scene.physics.add.overlap(
        scene.ball,         // objet mobile : ta balle
        scene.zoneFin,      // objet statique : ta zone invisible
        () => 
            gameOver(scene),
        null,               // pas de fonction de filtrage
        scene              // contexte (this)
    );

}