function billboard(name, price = 30){
    return name.split('').map(m=>m=price).reduce((a,b)=>a+b)
}