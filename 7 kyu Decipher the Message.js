function decipher(codedMessage){
    const shift = (x, y = x >= 97 ? 97 : 65) => y + (x - y + 7) % 26
    return codedMessage.replace(/[a-z]/ig, chr => String.fromCharCode(shift(chr.charCodeAt(0))))
}