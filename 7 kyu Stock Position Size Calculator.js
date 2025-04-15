function positionSize(type, price, stoploss, capital, risk) {
    let loss = capital * risk / 100
    if (type == 'LONG') return price > stoploss && Math.round(loss / (price - stoploss))
    if (type == 'SHORT') return price < stoploss && Math.round(loss / (stoploss - price))
}