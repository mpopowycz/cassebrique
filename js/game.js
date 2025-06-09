window.onload = function() {
        config = {
            type: Phaser.AUTO,
            width: 600,
            height: 950,
            parent: 'game-container',
            transparent: true,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 750 },
                    debug: false
                }
            },
            scale: {
                mode: Phaser.Scale.FIT, // ou RESIZE selon ton besoin
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            audio: {
                disableWebAudio: false // ou true si tu veux forcer l'utilisation de HTML5 Audio
            },
            scene: [PreloadScene, IntroScene, Level1]
        };

        var game = new Phaser.Game(config);
    };