Array.prototype.filter = function (fn) {
    return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, [])
}