//@ts-check
/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve1(board) {
  let m = board.length;
  let n = board[0].length;
  let queue = [];
  let visited = Array(m)
    .fill(undefined)
    .map(() => Array(n).fill(false));
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  for (let i = 0; i < m; i++) {
    if (!visited[i][0] && board[i][0] === "O") {
      visited[i][0] = true;
      queue.push([i, 0]);
    }
    if (!visited[i][n - 1] && board[i][n - 1] === "O") {
      visited[i][n - 1] = true;
      queue.push([i, n - 1]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[0][i] && board[0][i] === "O") {
      visited[0][i] = true;
      queue.push([0, i]);
    }
    if (!visited[m - 1][i] && board[m - 1][i] === "O") {
      visited[m - 1][i] = true;
      queue.push([m - 1, i]);
    }
  }

  while (queue.length) {
    let [iN, jN] = queue.shift() ?? [];
    for (let i = 0; i < direction.length; i++) {
      let childIN = iN + direction[i].dx;
      let childJN = jN + direction[i].dy;

      if (
        childIN >= 0 &&
        childIN < m &&
        childJN >= 0 &&
        childJN < n &&
        board[childIN][childJN] === "O" &&
        !visited[childIN][childJN]
      ) {
        visited[childIN][childJN] = true;
        queue.push([childIN, childJN]);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O" && visited[i][j] === false) {
        board[i][j] = "X";
      }
    }
  }
}
function dfs(iN, jN, board, visited) {
  let m = board.length;
  let n = board[0].length;
  visited[iN][jN] = true;
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];

  for (let i = 0; i < direction.length; i++) {
    let childIN = iN + direction[i].dx;
    let childJN = jN + direction[i].dy;

    if (
      childIN >= 0 &&
      childIN < m &&
      childJN >= 0 &&
      childJN < n &&
      board[childIN][childJN] === "O" &&
      !visited[childIN][childJN]
    ) {
      dfs(childIN, childJN, board, visited);
    }
  }
}
/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  let m = board.length;
  let n = board[0].length;
  let visited = Array(m)
    .fill(undefined)
    .map(() => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    if (!visited[i][0] && board[i][0] === "O") {
      dfs(i, 0, board, visited);
    }
    if (!visited[i][n - 1] && board[i][n - 1] === "O") {
      dfs(i, n - 1, board, visited);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[0][i] && board[0][i] === "O") {
      dfs(0, i, board, visited);
    }
    if (!visited[m - 1][i] && board[m - 1][i] === "O") {
      dfs(m - 1, i, board, visited);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O" && visited[i][j] === false) {
        board[i][j] = "X";
      }
    }
  }
}
function surroundedRegion() {}
surroundedRegion.run = () => {
  solve([
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ]);
};
module.exports = surroundedRegion;
