function uniDecoder(...numbers){
    let filtered = numbers.filter(x => Number.isInteger(x));
    return filtered.length ? String.fromCharCode(...filtered) : "not a valid character code";
}