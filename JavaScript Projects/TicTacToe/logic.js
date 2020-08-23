/* logic.js */

let human = "X";
let ai = "O";


function checkIfAIWin(){
  // winning moves: 012,345,678,136,147,258,148,246
  var won = false;
  if(board[0][0] == "O" && board[0][1] == "O" && board[0][2]) won = true;
  if(board[1][0] == "O" && board[1][1] == "O" && board[1][2]) won = true;
  if(board[2][0] == "O" && board[2][1] == "O" && board[2][2]) won = true;
  if(board[0][0] == "O" && board[1][0] == "O" && board[2][0]) won = true;
  if(board[0][1] == "O" && board[1][1] == "O" && board[2][1]) won = true;
  if(board[0][2] == "O" && board[1][2] == "O" && board[2][2]) won = true;
  if(board[0][0] == "O" && board[1][1] == "O" && board[2][2]) won = true;
  if(board[0][2] == "O" && board[1][1] == "O" && board[2][0]) won = true;
  return won;
}


function minimax(board, depth, isMaximizing){
  var result = checkIfAIWin();

  if(isMaximizing){
    let bestScore = -Infinity;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        // check if available
        if(board[i][j] == ''){
          board[i][j] = ai;
          let score = minimax(board, depth - 1, false)
        }
      }
    }
  } else {
    let bestScore = Infinity;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        // check if available
        if(board[i][j] == ''){
          board[i][j] = human;
          let score = minimax(board, depth - 1, true)
        }
      }
    }
  }
}
