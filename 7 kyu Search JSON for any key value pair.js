const getCharacters = (obj, key, val) => {
    val = val.toLowerCase();
    return obj.characters.filter(v => (v[key] || '').toLowerCase() === val);
}