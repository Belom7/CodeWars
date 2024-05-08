function reverseFibo(n){
    var arr = [0,1]
    for(let i=2; i<n; i++) arr.push(arr[arr.length-2]+arr[arr.length-1]);
    return arr.slice(0,n).reverse().join('')
}