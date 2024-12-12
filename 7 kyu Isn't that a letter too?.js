String.prototype.isLetter = function() {
    return /^\p{L}$/u.test(this);
}