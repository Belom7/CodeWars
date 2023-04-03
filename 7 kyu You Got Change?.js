function giveChange(amount) {
    const $ = [];
    const money = [100, 50, 20, 10, 5, 1]
    for (let i of money){
        $.unshift(amount / i | 0)
        amount = amount - i * $[0]
    }
    return $
}