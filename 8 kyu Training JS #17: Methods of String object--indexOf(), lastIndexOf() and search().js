function firstToLast(str, c) {
    return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
}