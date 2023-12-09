function sc(floor){
    return (!floor || floor <= 1) ? "" : ("Aa~ ").repeat(floor - 1) + (floor <= 6 ? "Pa! Aa!" : "Pa!");
}