var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
        return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
};