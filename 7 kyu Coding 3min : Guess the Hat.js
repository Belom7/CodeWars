function sc(exchange){
    return exchange.reduce((s, v) => v[0] === s ? v[2] : v[2] === s ? v[0] : s, '2');
}