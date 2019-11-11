const game = new Phaser.Game(600,450, Phaser.AUTO,'body');
console.log(game);
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);
game.state.start('Menu');
