Array.prototype.ofType = function (type) {
    return this.filter(i=>i instanceof type || (i != null && i.constructor === type));
}