module.exports.minNumber = (numbers) => {
  if (Array.isArray(numbers)) {
    return Math.min.apply(null, numbers);
  }

  console.log(`Argument ${numbers} is not array!`);
};
