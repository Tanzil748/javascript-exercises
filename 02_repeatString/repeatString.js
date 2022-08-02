const repeatString = function (string, number) {
  let updatedString = "";
  if (number >= 0) {
    for (let i = 0; i < number; i++) {
      updatedString += string;
    }
  } else {
    updatedString = "ERROR";
  }
  return updatedString;
};

// Do not edit below this line
module.exports = repeatString;
