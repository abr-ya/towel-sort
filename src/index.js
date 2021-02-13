
// You should implement your task here.
module.exports = function towelSort (matrix) { // закомментить для проверки через npm start
// const towelSort = (matrix) => { // для проверки через npm start
  if (matrix === undefined) return []; 
  // console.log(matrix);
  // console.log(matrix.length);

  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const forward = i % 2 === 0;
    // console.log(row, forward);
    while (row.length > 0) {
      result.push(forward ? row.shift() : row.pop());
    }
  }

  return result;
}

// для проверки через npm start
// const matrix1 = [
//   [1, 2, 4],
//   [5, 6, 7, 8],
//   [9, 12],
// ];

// console.log(towelSort(matrix1));