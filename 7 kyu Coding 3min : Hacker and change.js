function change(name, items, payment){
    const res = items.reduce((x, y) => x - y, payment)
    return +(name == 'John' ? res < 0 ? 0 : res * 2 - ~~(res) : res).toFixed(2)
}