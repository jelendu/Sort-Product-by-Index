// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.



// function calibrate(inputArray) {
//     var sortedArray = inputArray.sort((a, b) => a - b);
//     var calibrationSequence = sortedArray.map(x => x ** 2);
//     return calibrationSequence;
// }

// console.log(calibrate([23, 2, 3, 4, 5]));    



function sortProductIndex(inputArray) {
  // Create an array of objects with value and product
  const productArray = inputArray.map((value, index) => {
    return { value: value, product: value * (index + 1) };
  });

  // Sort the array of objects by product
  productArray.sort((a, b) => a.product - b.product);

  // Return the sorted array of values
  return productArray.map((element) => element.value);
}

console.log(sortProductIndex([23, 2, 3, 4, 5]));    

