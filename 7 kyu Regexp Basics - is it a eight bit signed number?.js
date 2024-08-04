String.prototype.signedEightBitNumber = function() {
    return /^(-?([1-9]\d?|1[01]\d|12[0-7])|-128|0)$/.test(this)
}