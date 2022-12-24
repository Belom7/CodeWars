var comparator = function(a,b) {
    const pos = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
    return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
}