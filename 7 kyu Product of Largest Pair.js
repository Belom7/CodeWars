function maxProduct(a) {
    var biggest = Math.max.apply(Math, a);
    a.splice(a.indexOf(biggest), 1);
    return biggest * Math.max.apply(Math, a);
}