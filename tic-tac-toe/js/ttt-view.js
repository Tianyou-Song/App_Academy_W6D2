class View {
  constructor(game, $el) {
    this.setupBoard();
    this.game = game;
    this.container = $el;
  }

  bindEvents($target) {
    $target.toggleClass('green');
  }

  makeMove($square) {
    let pos = $square.data('pos');
    if (!this.game.isOver()) {
      if (this.game.board.isEmptyPos(pos)) {
        this.game.playMove(pos);
        $square.text(this.game.currentPlayer);
      } else {
        alert("Invalid move");
      }
      if (this.game.winner()) {
        alert(`${this.game.currentPlayer} wins!`);
      }
    }
    if(this.game.isOver() && !this.game.winner()) {
      alert(`No one wins!... So you both LOSE. I'm taking your grandfather's soul`);
    }
  }

  setupBoard() {
    $('.ttt').append('<ul>');
    for (var i = 0; i < 9; i++) {
      let row = Math.floor(i / 3);
      let col = i % 3;
      let $li = $('<li>');
      $li.data('pos', [row, col]);
      $('.ttt ul').append($li);
    }
  }
}

module.exports = View;
