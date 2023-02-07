function f(x,y,z){
    const s      = Math.min(x++, y++, z++)
    const sumS   = s*(s+1)/2
    const sumSq  = sumS*(2*s+1)/3
    const sumCub = sumS*sumS
    return x*y*z*s - (x*y+x*z+y*z)*sumS + (x+y+z)*sumSq - sumCub
}