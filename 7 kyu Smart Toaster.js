function toaster(bt){
    let b = {"white bread":"1 min","frozen white bread":"1.5 mins","brown bread":"2 mins","frozen brown bread":"3 mins"};
    return b[bt.toLowerCase()]||"Please do not put that in the toaster!";
}