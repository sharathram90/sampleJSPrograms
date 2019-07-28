function printNumbers() {
    var counter = 1;
    for(var i = counter; i <= 100; i++) {
        if(i % 2 != 0) {
            console.log(i + " is an odd number");
        }
        else if(i % 3 === 0 && i % 2 === 0) {
            console.log(i + " is divisible by 2 and 3");
        }
        else if(i % 2 === 0) {
            console.log(i + " is an even number");
        }
        else {
            console.log(i + " is divisible by 3");
        }
    }
}

printNumbers();