function add(){
    var sum = 0;
    for (var i in arguments) sum += (arguments[i] / (+i + 1));
    return Math.round(sum);
}