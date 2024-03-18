function select(arrSearch, arrTake) {
    let char = arrSearch.slice().sort().reverse()[2][2];
    return arrTake.find(x => x[0] == char) || 'Nothing here';
}