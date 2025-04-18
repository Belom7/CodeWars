function isSubsetOf(s1, s2){
    return [...s1].every( e => s2.has(e) )
}

function isSupersetOf(s1, s2){
    return isSubsetOf(s2, s1)
}