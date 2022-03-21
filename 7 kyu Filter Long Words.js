function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(f=>f.length>n)
}