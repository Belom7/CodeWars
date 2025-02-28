function golfScore(code) {
    return (code.match(/\w+|\S/g) || []).length;
}