function indexOf(node, value) {
    var i = 0;
    while (node !== null) {
        if (node.data === value) return i;
        node = node.next;
        ++i;
    }
    return -1;
}