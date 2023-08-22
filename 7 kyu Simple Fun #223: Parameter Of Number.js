function parameter(n) {
    x=[...n+""]
    y=eval(x.join`+`)
    z=eval(x.join`*`)
    g=(a,b)=>b?g(b,a%b):a
    return y*z/g(y,z)
}