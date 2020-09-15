import "./styles.css";
var $ = function (id) {
  return document.getElementById(id);
};
var board = $("board");
var table = document.createElement("table");
var size = 5; // How large is our board (X*X)
var activePlayer = "X";

table.id = "ristinolla";
board.appendChild(table);

// After making the game board, we make 5x5 board
for (let i = 0; i < size; i++) {
  var tr = document.createElement("tr");
  tr.id = i;
  table.appendChild(tr);
  // One row should have 5 data cells in it
  for (let j = 0; j < size; j++) {
    var td = document.createElement("td");
    var cellID = tr.id + String(j);
    td.id = cellID;
    // We add onClick Listener to every cell
    td.addEventListener("click", function () {
      move(this);
    });
    tr.appendChild(td);
  }
}

function move(cell) {
  cell.innerHTML = activePlayer;
  if (activePlayer === "X") {
    activePlayer = "O";
  } else {
    activePlayer = "X";
  }
  doWeHaveWinner();
}

function doWeHaveWinner() {
  // Horizontal wincheck
  for (let i = 0; i < size; i++) {
    let checker = 0;
    for (let j = 0; j < size; j++) {
      let cell = $(String(i) + String(j));

      if (checker === 0) {
        if (cell.innerHTML === "") {
          break;
        } else if (cell.innerHTML === "X") {
          checker = 1;
          continue;
        } else {
          checker = 2;
          continue;
        }
      } else if (checker === 1) {
        if (cell.innerHTML === "O" || cell.innerHTML === "") {
          break;
        }
      } else {
        if (cell.innerHTML === "X" || cell.innerHTML === "") {
          break;
        }
      }
      if (j === 4) {
        alert("Player " + String(checker) + " won!");
        break;
      }
    }
  }
  // Vertical check, only cell indcies are changed
  for (let i = 0; i < size; i++) {
    let checker = 0;
    for (let j = 0; j < size; j++) {
      let cell = $(String(j) + String(i));

      if (checker === 0) {
        if (cell.innerHTML === "") {
          break;
        } else if (cell.innerHTML === "X") {
          checker = 1;
          continue;
        } else {
          checker = 2;
          continue;
        }
      } else if (checker === 1) {
        if (cell.innerHTML === "O" || cell.innerHTML === "") {
          break;
        }
      } else {
        if (cell.innerHTML === "X" || cell.innerHTML === "") {
          break;
        }
      }
      if (j === 4) {
        alert("Player " + String(checker) + " won!");
        break;
      }
    }
  }
  // UpLeft to DownRight Diagonial check
  let checker = 0;
  for (let i = 0; i < size; i++) {
    let cell = $(String(i) + String(i));
    if (checker === 0) {
      if (cell.innerHTML === "") {
        break;
      } else if (cell.innerHTML === "X") {
        checker = 1;
        continue;
      } else {
        checker = 2;
        continue;
      }
    } else if (checker === 1) {
      if (cell.innerHTML === "O" || cell.innerHTML === "") {
        break;
      }
    } else {
      if (cell.innerHTML === "X" || cell.innerHTML === "") {
        break;
      }
    }
    if (i === 4) {
      alert("Player " + String(checker) + " won!");
      break;
    }
  }
  // DownLeft to UpRight Diagonial check
  checker = 0;
  for (let i = 0; i < size; i++) {
    let cell = $(String(i) + String(4 - i));
    if (checker === 0) {
      if (cell.innerHTML === "") {
        break;
      } else if (cell.innerHTML === "X") {
        checker = 1;
        continue;
      } else {
        checker = 2;
        continue;
      }
    } else if (checker === 1) {
      if (cell.innerHTML === "O" || cell.innerHTML === "") {
        break;
      }
    } else {
      if (cell.innerHTML === "X" || cell.innerHTML === "") {
        break;
      }
    }
    if (i === 4) {
      alert("Player " + String(checker) + " won!");
      break;
    }
  }
}
