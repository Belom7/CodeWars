function arrayInfo(arr){
    if (arr.length === 0) return 'Nothing in the array!';
    return [[arr.length],
        [arr.filter(x => x === parseInt(x)).length || null],
        [arr.filter(x => typeof x === 'number' && (/\./).test(x)).length || null],
        [arr.filter(x => typeof x === 'string' && x !== ' ').length || null],
        [arr.filter(x => x === ' ').length || null]];
}