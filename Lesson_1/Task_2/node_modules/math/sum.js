module.exports.sumNumbers = (numbers) => {
  if (Array.isArray(numbers)) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  console.log(`Argument ${numbers} is not array!`);
};
