function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(char => !vowels.includes(char.toLowerCase()))
        .join('');
}