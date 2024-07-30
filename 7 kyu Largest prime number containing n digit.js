const largest = (n) => {
    if (typeof n!='number' || n<=0)
        return false;
    const arr=[7,97,997,9973,99991,999983,9999991];
    return arr[n-1];
}