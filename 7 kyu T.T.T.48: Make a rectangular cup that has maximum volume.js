function maximumVolume(n){
    let s = Math.round(n * 1/6), num = n - 2 * s;
    return s * num * num;
}