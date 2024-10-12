function findSimilarity(str,word){
    let reg=new RegExp("^"+word.replace(/\B.\B/g,".")+"$");  // \B match non character boundary
    return str.split(/ /).filter(x=>reg.test(x)).join(" ");
}