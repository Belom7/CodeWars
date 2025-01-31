function leastMove(side){
    let n = Math.floor(--side / 3);
    return (n * 3 / 2 + side % 3) * ++n;
}