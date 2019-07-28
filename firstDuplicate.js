var inputArray = [1,5,3,7,3,4];

function firstDuplicate() {
    var duplicate = 0;

    for(var i = 0; i < inputArray.length; i++) {
        for(var j = i + 1; j < inputArray.length; j++) {
            if(inputArray[i] === inputArray[j]) {
                duplicate = inputArray[i];
                break;
            }
        }
    }
    console.log(duplicate);
}

firstDuplicate();