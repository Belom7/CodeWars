String.prototype.hexNumber = function () {
    return /^(0x)?[a-f\d]+$/i.test(this)
}