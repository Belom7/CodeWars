function toIndustrial(n){
    return +((+n===n?n:+n.split`:`[1]+n.split`:`[0]*60)/60).toFixed(2)
}

function toNormal(n){
    return (n-n%1)+":"+(""+Math.round(n%1*60)).padStart(2,0)
}