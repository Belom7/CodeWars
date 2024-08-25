Array.prototype.toDictionary = function (keyFn, valueFn) {
    return this.reduce((dict, v) => (dict[keyFn(v)] = valueFn ? valueFn(v) : v, dict), {})
}