function ticTacToe () {
  var grid = document.querySelectorAll('.container > div')
  var para = document.querySelector('p')
  var reset = document.querySelector('button')
  var player = 'X'

  reset.addEventListener('click', function () {
    grid.forEach(function (box) {
      box.innerHTML = ''
    })
    para.textContent = 'Game has been reset. Player X, begin!'
    player = 'X'
  })

  grid.forEach(function (box) {
    box.addEventListener('click', function () {
      playTurn(box)
    })
  })

  function playTurn (index) {
    console.log("playing Turn")
    if (index.innerHTML.indexOf('X') !== -1 || index.innerHTML.indexOf('O') !== -1) {
      para.textContent = 'Position is already taken!'
      return false
    } else {
      index.textContent = player
      // check at this stage if anybody has won
      if (player === 'X') {
        player = 'O'
        para.textContent = 'Player O, it is your turn!'
      } else {
        player = 'X'
        para.textContent = 'Player X, it is your turn!'
      }
      whoWon()
    }
    return true
  }

  function whoWon () {
    var zero = grid[0].innerHTML
    var one = grid[1].innerHTML
    var two = grid[2].innerHTML
    var three = grid[3].innerHTML
    var four = grid[4].innerHTML
    var five = grid[5].innerHTML
    var six = grid[6].innerHTML
    var seven = grid[7].innerHTML
    var eight = grid[8].innerHTML

    console.log('checking whoWon')

    // check for winning rows
    if (zero && zero === one && zero === two) declareWinner(zero)
    if (three && three === four && three === five) declareWinner(three)
    if (six && six === seven && six === eight) declareWinner(six)
    // check for winning columns
    if (zero && zero === three && zero === six) declareWinner(zero)
    if (one && one === four && one === seven) declareWinner(one)
    if (two && two === five && two === eight) declareWinner(two)
    // check for winning diagonals
    if (zero && zero === four && zero === eight) declareWinner(zero)
    if (two && two === four && two === six) declareWinner(two)
    // check for draw
    if (zero && one && two && three && four && five && six && seven && eight) para.textContent = 'DRAW'
  }

  function declareWinner (player) {
    console.log('running declareWinner')
    if (player === 'X') {
      para.textContent = 'Player X wins! Hit Reset to play again!'
      return false
    } else {
      para.textContent = 'Player O wins! Hit Reset to play again!'
      return false
    }
  }

  return {
    whoWon: whoWon,
    playTurn: playTurn,
    declareWinner: declareWinner
  }
}

window.addEventListener('DOMContentLoaded', function () {
  ticTacToe()
})
