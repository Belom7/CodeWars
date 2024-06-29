Array.prototype.sortReloaded = function(dir='asc') {
    const functions = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a,
    };
    const sortFunction = functions[dir];
    return !sortFunction ? false : this.slice().sort(sortFunction);
}