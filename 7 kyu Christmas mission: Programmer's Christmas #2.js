function merryChristmas(s1,s2) {
    for (const c of s2.split(''))
        s1 = s1.indexOf(c) < 0 ? s1 + c : s1.replace(c, '');
    return s1.split('').sort().join('') == ' !CMaehimrrrssty';
}