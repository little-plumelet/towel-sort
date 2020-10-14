
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let i = 0; 
  if (matrix === undefined || matrix.length === 0) return arr;
  else {
    while (i < matrix.length) {
      let j = 0;
      let y = matrix[i];
      if (i % 2 === 0) {
        while (j < y.length) {
        arr.push(matrix[i][j]);
        j++;
        }
      }
      else {
        j = y.length - 1;
        while (j >= 0) {
          arr.push(matrix[i][j]);
          j--;
        }
      }
      i++;
    }
  }
  return arr;
}
