function array10(){
    let result = [];
    let letters = ["A","B","C","D"];
    for (let i = 0; i < 10; i++) {
        let x = [];
        for (let j = 0; j < 10; j++) {
            x.push(letters[ j < 4 ? j : Math.floor(Math.random() * letters.length)]);
        }
        result.push(x);
    }
    return result
}