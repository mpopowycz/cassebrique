//  je place une brique au hasard dans la map
function nombreHasard(max) {
  
    return Math.floor(Math.random() * Math.floor(max));

};

function initCollectionBriqueBonus() {

    for (nbreBriqueBonus = 0; nbreBriqueBonus < nbreDiamantBonus; nbreBriqueBonus++) {

        var contactBallBriqueBonus = game.physics.arcade.collide(ball, collectionBriqueBonus[nbreBriqueBonus]);

        if (contactBallBriqueBonus) {

            //  créer le choc brique bonus / ball
            animContactBriqueBallBonus();

        }

    };

};

function animContactBriqueBall() {

    if (collectionBrique[nbreBrique]) {

        collectionBrique[nbreBrique].destroy();
        collectionBoom[nbreBrique].visible = true;
        collectionExplosion[nbreBrique].visible = true;
        collectionBoom[nbreBrique].play('explosion');

        totalNbreDelete++;

    };

    var nbreDelete = collectionBrique.indexOf(collectionBrique[nbreBrique]);

    delete collectionBrique[nbreDelete];

    if (totalNbreDelete == nbreDiamant) {

        collectionBrique.length = 0;
    }

    return false;

};

function animContactBriqueBallBonus() {

    if (collectionBriqueBonus[nbreBriqueBonus]) {

        collectionBriqueBonus[nbreBriqueBonus].destroy();
        collectionBoomBonus[nbreBriqueBonus].visible = true;
        collectionExplosionBonus[nbreBriqueBonus].visible = true;
        collectionBoomBonus[nbreBriqueBonus].play('explosion');

        //  déclanche le bonus
        bonusRapidite.visible = true;

    };

    return false;

};