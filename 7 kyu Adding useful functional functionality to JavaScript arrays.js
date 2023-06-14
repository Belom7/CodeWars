Array.range = function(start, count) {
    return Array.apply(null, Array(count)).map(function(e, i) {
        return start + i;
    });
}

Array.prototype.sum = function() {
    return this.reduce(function(prev, next) {
        return prev + next;
    }, 0);
}