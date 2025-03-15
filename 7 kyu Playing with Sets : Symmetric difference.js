function symDiff(s1, s2){
    return	new Set([...s1,...s2].filter(e=>s1.has(e)^s2.has(e)))
}