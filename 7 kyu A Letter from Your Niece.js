function nonsense(str) {
    var suit = {0:'a', 1:'e', 2:'i', 3:'o', 4:'u', 'raptor':'', 'trex': '', '.': ''}
    str = str.toLowerCase().replace(/0|1|2|3|4|\.|raptor|trex/g, i=> suit[i]).replace(/^./, x=> x.toUpperCase()) + '.'
    return str.split(' ').map(e => e =='i' ? e.toUpperCase() : e).join(' ')
}