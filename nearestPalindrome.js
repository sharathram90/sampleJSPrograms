var number = 997;
function palindrome(palNumber) {
    var reverseArray = [];
    var reverseStr;
    var strNum = palNumber.toString();
    for(var i = strNum.length - 1; i >= 0; i--) {
        reverseArray.push(strNum.charAt(i));
    }
    reverseStr = reverseArray.join("");

    return strNum === reverseStr;
}

function lowerPalindrome(num) {
    var lowPalindrome = 0;
    for(var i = num; i > 0; i--) {
        if(palindrome(i)) {
            lowPalindrome = i;
            break;
        }
    }
    return lowPalindrome;
}

function higherPalindrome(num) {
    var highPalindrome = 0;

    for(var i = num; i <= Number.MAX_SAFE_INTEGER; i++) {
        if(palindrome(i)) {
            highPalindrome = i;
            break;
        }
    }
    return highPalindrome;
}

function nearPalindrome() {
    var lowPalindrome = lowerPalindrome(number);
    var highPalindrome = higherPalindrome(number);

    Math.abs(number - lowPalindrome) > Math.abs(highPalindrome - number) ? console.log(highPalindrome) : console.log(lowPalindrome);
}

nearPalindrome();
