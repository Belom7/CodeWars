function transposeTwoStrings(arr){
    let max = Math.max(arr[0].length, arr[1].length);
    let newArr = [];
    for (var i = 0; i < max; i++) {
        newArr.push(`${arr[0][i] || ' '} ${arr[1][i] || ' '}`);
    }
    return newArr.join('\n');

}