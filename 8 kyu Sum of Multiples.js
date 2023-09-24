function sumMul(n,m){
    if(m < n || m < 0 || n === m){
        return "INVALID"
    } else {
        let sum = 0
        for(let i = n; i < m; i+=n){
            sum += i
        }
        return sum
    }
}