function compute(n){
    return n <= 0 || n % 2 == 0 ? 0 : n == 1 ? 1 : 1/n/n + compute(n - 2)

}