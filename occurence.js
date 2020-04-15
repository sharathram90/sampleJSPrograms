function occurence() {
var numArray = [1,5,2,4,3,1,5,2,4,3];

var occurenceObj = {};

var count = 0;
for (var k = 0; k < numArray.length; k++) {
    occurenceObj[numArray[k]] = 1;
}
for(var i = 0; i < numArray.length; i++) {
    for(var j = i + 1; j < numArray.length; j++) {
        if(numArray[i] == numArray[j]) {
            count = occurenceObj[numArray[i]] + 1;
            console.log(count);
            occurenceObj[numArray[i]] = count;
            console.log(occurenceObj[numArray[i]]);
        }
    }
};
console.log(occurenceObj);

}

occurence();