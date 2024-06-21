function addProperty(obj, prop, value) {
    if (prop in obj) throw new Error()
    obj[prop] = value
}