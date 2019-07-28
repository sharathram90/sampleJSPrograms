var inputArray = [1,4,2,9,5];

var sa = require("./sortArray");

function findLargestProduct() {
    inputArray = sa.sortArray(inputArray);

    var largestProduct = inputArray[inputArray.length - 1] * inputArray[inputArray.length -2];

    console.log(largestProduct);
}

findLargestProduct();