function sortLetters(arr) {
    const ar1 = arr.flat().filter(e => /[aeiou]/i.test(e)).map(e => e.toUpperCase());
    const ar2 = arr.flat().filter(e => /[^aeiou0-9]/i.test(e)).map(e => e.toUpperCase());
    return [ar1,ar2];
}