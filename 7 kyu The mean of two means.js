function getMean(arr, x, y) {
    let sum1 = 0;
    let sum2 = 0;

    if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) return -1;

    for (let i = 0; i<x; i++) {
        sum1 += arr[i];
    }

    for (let i = arr.length-1; arr.length-i-1<y; i--) {
        sum2 += arr[i];
    }

    return (1.0*sum1/x+1.0*sum2/y)/2;
}