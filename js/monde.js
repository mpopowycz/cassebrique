function monde(scene, colorMonde) {
    scene.cameras.main.setBackgroundColor(colorMonde);
    let bg = scene.add.sprite(0, 0, 'BG').setOrigin(0, 0);
    scene.anims.create({
        key: 'BGanim',
        frames: scene.anims.generateFrameNumbers('BG', { start: 0, end: 31 }),
        frameRate: 15,
        repeat: -1 // Répéter indéfiniment
    });
    bg.anims.play('BGanim');
}