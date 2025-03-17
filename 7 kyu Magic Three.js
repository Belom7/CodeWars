function isMagicThree(arr) {
    for(x of arr)
        for(y of arr)
            for(z of arr)
                if(x + y + z === 0) return true;
    return false;
}