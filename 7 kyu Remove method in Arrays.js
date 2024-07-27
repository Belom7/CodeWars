Array.prototype.remove = function (index) {
    if (Number.isInteger(index) && index >= 0) this.splice(index, 1);
    return this;
};