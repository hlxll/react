function sort(result) {
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j + 1].money < result[j].money) {
        let center = result[j];
        result[j] = result[j + 1];
        result[j + 1] = center;
      }
    }
  }
  return result;
}
function outSort(result) {
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j + 1].money > result[j].money) {
        let center = result[j];
        result[j] = result[j + 1];
        result[j + 1] = center;
      }
    }
  }
  return result;
}
module.exports = {
  sort: sort,
  outSort: outSort,
};
