const combineFriends = ( array ) => {
    const out = {}
    array.map( el => { out[el.id] = el, delete el.id } )
    return out
}
