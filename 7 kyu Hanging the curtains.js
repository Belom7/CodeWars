const numberOfHooks = function(length, maxHookDist) {
    let hooks = 1;
    for (let i = length; i > maxHookDist; i /=2){
        hooks *= 2
    }
    return hooks + 1
}