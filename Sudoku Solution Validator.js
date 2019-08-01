Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)
Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

//mine
function validSolution(board){
  let arrayCheck = board;
  for (let i = 0; i < 9; i++)
  {
    let verticalArray = [];
    for (let j = 0; j < 9; j++)
    {
      verticalArray.push(board[j][i]);
    }
    arrayCheck.push(verticalArray);
  }
  
  for (let i = 0; i < 9; i++)
  {
    let array_3_3 = [];
    let startColumn = (i * 3) % 9;
    let startRow = Math.floor((i * 3) / 9) * 3;
    for (let j = 0; j < 9; j++)
    {
      let col3 = j % 3;
      let row3 = Math.floor(j / 3);
      array_3_3.push(board[startRow + row3][startColumn + col3]);
    }
    arrayCheck.push(array_3_3);
  }
  
  
  for (let i = 0; i < arrayCheck.length; i++)
  {
    if (!isValidRow(arrayCheck[i]))
    {
      return false;
    }
  }
  return true;
}

function isValidRow(row)
{
  let validRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < row.length; i++)
  {
    if (validRow.indexOf(row[i]) == -1)
    {
      return false;
    }
    else
    {
      validRow.splice(validRow.indexOf(row[i]), 1);
    }
  }
  return true;
}
//end mine

//on codewars
function equals45(n){
  return n == 45;
}

function validSolution(board){
  var sumh = [0,0,0,0,0,0,0,0,0];
  var sumv = [0,0,0,0,0,0,0,0,0];
  osums = [[0,0,0],[0,0,0],[0,0,0]];
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
    }
  }
  for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
  return (sumh.every(equals45) && sumv.every(equals45));
}
//end on codewars