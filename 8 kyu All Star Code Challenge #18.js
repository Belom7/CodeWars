function strCount(str, letter){
    let a = 0
    str.split('').map(m=> m === letter? a+=1 : a+=0)
    return a
}