function hasOneChar(s) {
    return /^(.)\1*$/.test(s);
}