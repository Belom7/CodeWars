function Node(data, nxt = null) {
    this.data = data, this.next = nxt;
}
function Context(source, dest) {
    this.source = source, this.dest = dest;
}
function moveNode(source, dest) {
    if(!source) throw "Error"
    return new Context(source.next, new Node(source.data, dest));
}