
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (matrix) {
    return matrix.reduce((acc, cur, i) => {
      return acc.concat(((i % 2 == 0) ? cur : cur.reverse()));
    }, []);
  } else {
    return [];
  }


};

