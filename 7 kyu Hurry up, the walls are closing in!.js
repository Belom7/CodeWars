function canEscape(walls) {
    return walls.every(([a,b],i)=>a>++i&&b>i);
}