function hammingDistance(a,b){
    return a.split('').filter((n, i) => n !== b[i]).length;
}