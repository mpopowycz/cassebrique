function incrementScore(amount) {
    this.score += amount; // Incrémente le score
    this.scoreText.setText('Score: ' + this.score);
}