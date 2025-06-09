function collisions(scene) {
    
    // Configuration des collisions balle / joueur
    scene.physics.add.collider(scene.ball, scene.joueur, (_ball, _joueur) => {
        // Calculez la différence entre les positions x de la balle et du joueur
        let difference = _ball.x - _joueur.x;
        
        // Calculez un ratio de cette différence par rapport à la moitié de la largeur du joueur
        let ratio = difference / (_joueur.width / 2);
        
        // Calculez les composantes de la vitesse basées sur le ratio pour maintenir une vitesse constante
        let vitesseX = ratio * scene.vitesseBalleConstante;
        
        // Assurez-vous que la somme quadratique des vitesses X et Y est égale à vitesseBalleConstante
        let vitesseY = -Math.sqrt(scene.vitesseBalleConstante ** 2 - vitesseX ** 2);

        // Ajustez la vitesse de la balle
        _ball.setVelocityX(vitesseX);

        // Augmentez la vitesse verticale pour un rebond plus fort et rapide
        _ball.setVelocityY(vitesseY * 2); // Multipliez par un facteur pour augmenter le rebond

        // Ajustez l'animation basée sur la direction de la balle
        if (difference > 0) {
            _ball.play('horizon_droite', true);
        } else if (difference < 0) {
            _ball.play('horizon_gauche', true);
        } else {
            _ball.play('vertical', true);
        }
    });
}