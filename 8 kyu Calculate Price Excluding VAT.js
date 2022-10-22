//return price without vat
function excludingVatPrice(price){
    if(price === null){
        return -1
    } else {
        let a = price / 115 * 15
        let b = price - a
        return b.toFixed(2)/1
    }
}