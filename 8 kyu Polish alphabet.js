function correctPolishLetters(string) {
    const polishCharacters = /[ąćęłńóśźż]/g;
    const replacements = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    };

    return string.replace(polishCharacters, (match) => replacements[match]);
}