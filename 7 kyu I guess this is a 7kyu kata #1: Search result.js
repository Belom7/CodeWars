function finalResult(keywords,searchResult){
    return searchResult.filter(e => keywords.split('').filter(x => e.indexOf(x) != -1).length == keywords.length);
}