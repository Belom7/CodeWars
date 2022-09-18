function distinct(a) {
    return a.filter((e, i)=> a.indexOf(e) === a.indexOf(e, i))
}