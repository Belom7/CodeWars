String.prototype.contains = function (sub, sens) {
    return sens ? this.includes(sub) : this.toLowerCase().includes(sub.toLowerCase());
}