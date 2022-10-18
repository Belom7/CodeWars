function shadesOfGrey(n){
    const arr = [];
    let app = ''
    for (let i=1; i <= (n < 254 ? n : 254); i++){
        if ( i < 16 ){
            app = '#'+ ('0' + i.toString(16)).repeat(3);
        }else{
            app = '#'+ (i.toString(16)).repeat(3);
        }
        arr.push(app);
        app = '';
    }
    return arr;
}