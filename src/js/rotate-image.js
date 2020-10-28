var rotate = function (matrix) {
  const n = matrix.length - 1;
  let nm = matrix;

  // let temp = matrix[0][0];
  // matrix[0][0] = matrix[i][0];
  // matrix[i][0] = matrix[i][i];
  // matrix[i][i] = matrix[0][i];
  // matrix[0][i] = temp;

  for (let i = n; i > 0; i--) {
    for (x = i; x > 0; x--) {
      nm[x][i] = matrix[0][x];
      nm[n][i - x] = matrix[x][i];
      nm[x][0] = matrix[i][x];
      nm[0][i - x] = matrix[x][0];
    }
  }

  return nm;
};

// [[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
