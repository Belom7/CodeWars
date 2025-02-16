Array.prototype.size = function() {
    return this.reduce(acc => acc + 1, 0);
};