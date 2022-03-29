function doubleOrNothing(cash, wager, losses){
    for(let i = 1; i < losses; i++){
        wager*=2
    }
    return cash-wager<0? "I'll pay you back later" : cash-wager
}