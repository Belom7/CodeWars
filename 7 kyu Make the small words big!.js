function smallWordHelper(s){
    return s.replace(/[^\s]+/gi,x => x.length>3?x.replace(/[aeiou]/gi,''):x.toUpperCase());
}