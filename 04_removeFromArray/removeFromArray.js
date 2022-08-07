let array = [];

const removeFromArray = function (array, poppedNum) {
  let index = array.indexOf(poppedNum);
  if (index >= 0) {
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
