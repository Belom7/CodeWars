function sc(r) {
    if (!Array.isArray(r)){
        r = (r + "").split("");
    }
    return r + "" == r.reverse() + "";
}