function covfefe(str) {
    const res = str.replace(/coverage/g, "covfefe")
    return res === str ? str + " covfefe" : res
}