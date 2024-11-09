function onlyYou(s) {
    return /y.*o.*u/i.test(s) && !/I|me|he|him|the|them|we/i.test(s);
}