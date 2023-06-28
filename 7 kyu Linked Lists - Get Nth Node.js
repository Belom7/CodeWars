function Node(data) {
    [ this.data, this.next ] = [ data, null ];
}

function getNth(node, index = 0){
    if ( node && !index ) return node;
    return getNth(node.next, index - 1)
}