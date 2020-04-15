function leadingZeros() {
    var temp = 0;
    var arr = [1,0,0,0];
    for(var i = 0; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(var k = 0; k < arr.length; k++) {
        console.log(arr[k]);
    }
}

leadingZeros();