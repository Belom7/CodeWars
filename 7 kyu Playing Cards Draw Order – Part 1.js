const draw = (deck) => {
    let res = []

    while(deck.length>1){
        res.push(deck.shift())
        deck.push(deck.shift())
    }

    return res.concat(deck)
};