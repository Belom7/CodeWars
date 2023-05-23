function validateHello(greetings) {
    const newStr = greetings.toLowerCase();

    return newStr.includes('hello') ||
        newStr.includes('ciao') ||
        newStr.includes('salut') ||
        newStr.includes('hallo') ||
        newStr.includes('hola') ||
        newStr.includes('ahoj') ||
        newStr.includes('czesc');
}