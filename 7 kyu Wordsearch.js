function wordSearch(word, text){
    return new RegExp('\\b' + word + '\\b').test(text);
}