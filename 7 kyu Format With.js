String.prototype.formatWith = function (...args) {
    return this.replace(/\{(\d+)\}/g, (s, n) => n < args.length ? args[n] : s)
}
