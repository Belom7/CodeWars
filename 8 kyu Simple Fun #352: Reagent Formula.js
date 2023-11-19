function isValid(formula){
    let m1 = false
    let m2 = false
    let m3 = false
    let m4 = false
    let m5 = false
    let m6 = false
    let m7 = false
    let m8 = false

    for(let i = 0; i <= formula.length ; i++){
        const index = formula[i]

        if(index === 1){
            m1 = true
        } else if (index === 2){
            m2 = true
        } else if (index === 3){
            m3 = true
        } else if (index === 4){
            m4 = true
        } else if (index === 5){
            m5 = true
        } else if (index === 6){
            m6 = true
        } else if (index === 7){
            m7 = true
        } else if (index === 8){
            m8 = true
        }
    }

    return !((m1 && m2) ||
        (m3 && m4) ||
        (m5 && !m6) ||
        (!m5 && m6) ||
        (!m7 && !m8));
}