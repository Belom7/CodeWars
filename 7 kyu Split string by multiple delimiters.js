function multipleSplit(string, delimiters=[]){
    let arr = [string];
    for (let d of delimiters) {
        arr = arr.reduce((r, s) => r.concat(s.split(d)), []);
    }
    return arr.filter(Boolean);
}