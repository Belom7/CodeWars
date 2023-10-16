function padIt(str,n){
    let arr = [...str], num = 1;
    while (num <= n){
        if(num % 2 !== 0){
            arr.unshift('*')
        }else{
            arr.push('*')
        }
        num = num + 1;
    }
    return arr.join('');
}