const createSequence = (regex) => {
    return Array
        .from({length: 256}, (_, i) => String.fromCharCode(i))
        .filter(x => regex.test(x)).join('');
}