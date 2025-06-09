class IntroScene extends Phaser.Scene {
    constructor() {
        super('IntroScene');
    }

    preload() {
        // Charger les ressources pour l'introduction
    }

    create() {
        const { width, height } = this.cameras.main;

        // Crée le titre
        const titre = this.add.text(width / 2, height / 2 - 30, 'Bienvenue !', {
            font: '32px Fipps',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Crée le sous-texte
        const sousTexte = this.add.text(width / 2, height / 2 + 20, 'Cliquez pour commencer', {
            font: '22px Fipps',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Attendre un clic pour commencer le jeu
        this.input.once('pointerdown', () => {
            this.scene.start('Level1'); // Démarrer le jeu (Level1)
        });
    }
}