class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1');
        this.gameOver = false;
        this.stateText = null;
        // SCORE
        this.score = 0;
        this.scoreText = null;
        this.ball = null;
        this.joueur = null;
        this.vitesseBalleConstante = 700; // Définir une vitesse constante élevée pour un rebond plus énergique
        this.vitesseChuteBall = 1100; // Définir la vitesse de chute de la balle
        this.tempsRestant = 60; // Définir le temps restant initial
    }

    preload() {
        chargement(this); // appel de ta fonction preload.js
    }

    incrementScore(amount) {
            this.score += amount; // Incrémente le score
            this.scoreText.setText('Score: ' + this.score); // Met à jour le texte du score
        }

    create() {
        this.gameOver = false; // Réinitialiser l'indicateur de fin de jeu 
        this.tempsRestant = 60; // Réinitialiser le temps restant
        this.zoneFin = false;

        // Calcul du ratio d’adaptation à l’écran
        const baseWidth = 600;
        const scaleRatio = this.scale.width / baseWidth;

        // Plateforme adaptée à l'écran
        const platform = this.physics.add.sprite(300 * scaleRatio, 200 * scaleRatio, 'platform1');
        platform.setScale(scaleRatio);

        // joue la musique du monde 1
        this.music = this.sound.add('musique', {
            loop: true,
            volume: 0.5
        });

        // Lance la musique
        this.music.play();
        
        monde(this, "#0072bc");
        message(this);
        playeur(this);
        setupBall(this);
        collisions(this);
        deadZone(this);

        // Créer la ligne des bricks
        this.creaLignes();

        // Initialiser le texte du score une seule fois
        this.scoreText = this.add.text(10, 10, 'Score: ' + this.score, { font: '22px Fipps', fill: '#000' });

        // Créer l'animation pour l'explosion de la brique
        this.anims.create({
            key: 'brickExplode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 5 }),
            frameRate: 18,
            hideOnComplete: true
        });

        // Ajouter la collision entre la balle et les briques
        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);

        this.stateText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, '', { font: '65px Fipps', fill: '#fff' });
        this.stateText.setOrigin(0.5, 0.5);
        this.stateText.setVisible(false);
    }

    update() {

        // Logique de déplacement du joueur et de la balle
        let largeurJoueur = 272; // La largeur du joueur
        const vitesseHorizontaleMax = 200; // Définir la vitesse maximale horizontale

        if (this.ball?.body?.touching?.down && this.joueur?.body?.touching?.up) {
            const diff = this.ball.x - this.joueur.x;
            const pourcentage = diff / (largeurJoueur / 2);
            const vx = pourcentage * vitesseHorizontaleMax;

            this.ball.body.setVelocityX(vx);
            this.ball.body.setVelocityY(-this.vitesseChuteBall);
        }
    }

    creaLignes() {
        const startX = 100; // Position de départ en X
        const startY = 100; // Position de départ en Y
        const spacing = 50; // Espace entre les sprites
        const numberOfSprites = 10; // Nombre de sprites à créer

        this.bricks = this.physics.add.staticGroup();

        for (let i = 0; i < numberOfSprites; i++) {
            this.bricks.create(startX + i * spacing, startY, 'diamant'); // Ajouter au groupe statique
        }
    }

    hitBrick(ball, brick) {
        // Jouer l'animation d'explosion sur la brique
        let explosion = this.add.sprite(brick.x, brick.y, 'explosion');
        explosion.play('brickExplode');

        // Détruire la brique
        brick.destroy();

        this.incrementScore(10); // Incrémenter le score quand une brique est détruite

        // Vérifier si toutes les briques sont détruites
        if (this.bricks.countActive(true) === 0) {
            this.winGame();
        }
    }

    winGame() {
        this.gameOver = true;
        this.physics.pause();
        this.stateText.setText("YOU WIN, \n TOUCH SCREEN");
        this.stateText.setVisible(true);
        this.cameras.main.setBackgroundColor('#00FF00'); // Changer la couleur de fond pour la victoire

        this.input.once('pointerdown', () => {
            this.scene.start('IntroScene'); // Rediriger vers la scène d'introduction
        });
    }
}
