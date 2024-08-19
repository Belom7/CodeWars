Array.prototype.sort = function () {
    for (let i = 0; i < this.length - 1; i++)
        for (let j = i + 1; j < this.length; j++)
            this[i] > this[j] && ([this[i], this[j]] = [this[j], this[i]]);

    return this;
}