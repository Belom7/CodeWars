function calculateRetirement(deposit, targetBalance) {
    let res = {};
    for (let i=0; i<7; i++){
        let amount=0, year=0;
        while (amount < targetBalance){
            amount = (amount + deposit) * (1+ 0.01*i);
            year += 1;
        }
        res[i] = year;
    }
    return res;
}