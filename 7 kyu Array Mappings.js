Array.prototype.map = function(func){
    var res = [];
    for(var i=0;i<this.length;i++){
        res.push(func(this[i]));
    }
    return res;
}