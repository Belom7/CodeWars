function sign(number){
    const num = Number(number);
    if (num > 0) return 1;
    if (num < 0) return -1;
    if (num == 0) return 0;
    return NaN;
}