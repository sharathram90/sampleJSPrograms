var testArray = [1,4,2,7,9,5];

function closeTwoNumbers() {
    var temp = 0;

    for(var i = 0; i < testArray.length; i++) {
        var difference = Math.abs(testArray[i+1] - testArray[i]);
        if(difference > temp)
    }
}