function find01(arr) {
    let result = 0;
    for (i = 1; i < arr.length-1; i++)
        for (j = 1; j < arr[i].length-1; j++) {
            const x = arr[i][j];
            if (x != arr[i-1][j] && x != arr[i+1][j] && x != arr[i][j-1] && x != arr[i][j+1])
                result++;
        }
    return result;
}