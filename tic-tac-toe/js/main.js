const View = require('./ttt-view.js');// require appropriate file
const Game = require('./tic-tac-toe-solution/game.js');// require appropriate file

$( () => {
  let game = new Game();
  const $container = $('.ttt');
  let view = new View(game, $container);
  const squares = $('ul li');
  squares.on('click', e => {
    const currentTarget = e.currentTarget;
    const $currentTarget = $(currentTarget);
    view.bindEvents($currentTarget);
    view.makeMove($currentTarget);
  });
});
