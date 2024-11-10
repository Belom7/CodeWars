function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseSubstrings(str) {
    return str.match(/\d+|[a-z]+|[^\da-z]+/gi).map(reverseString).join('');
}

function reverseLines(str) {
    return str.split("\n").reverse().map(reverseSubstrings).join("\n");
}

function reverseAll(arr){
    return arr.reverse().map(reverseLines);
}