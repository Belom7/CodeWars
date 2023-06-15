function findArray(arr1, arr2){
    return arr1.length ? arr2.map(e => arr1[e]) : []
}