function fakeBin(x){
    return x.split('').map(m=>m<5? 0 : 1).join('')
}