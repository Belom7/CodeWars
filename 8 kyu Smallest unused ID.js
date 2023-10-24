function nextId(ids){
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
}