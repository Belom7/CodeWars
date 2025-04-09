function howManyIterationsNeeded(num, maxIter = Number.MAX_SAFE_INTEGER){
    function rev(num) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    let st = num;
    for (var i = 0; i < maxIter && num < Number.MAX_SAFE_INTEGER; i++) {
        num += rev(num);
        if (num == rev(num))
            return i+1;
    }
    return null;
}