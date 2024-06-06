function move_zeros(a, r=true){
    return a.filter(e=>!!e === r).concat(a.filter(e =>!e===r))
}