Number.prototype.toBits = function(len = 8) {
    return this.toString`2`.padStart(len, '0')
}