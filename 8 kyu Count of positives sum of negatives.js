function countPositivesSumNegatives(input) {

    if(input === [] || input === null){
        return []
    }
    else{
        let pol = 0
        let otr = 0

        input.filter(f=>f>0? pol += 1: pol+=0)
        input.filter(f=>f<0? otr += f: otr+=0)

        return pol===0 && otr ===0? [] : [pol,otr]
    }
}