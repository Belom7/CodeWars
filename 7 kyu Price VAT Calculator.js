const Calculator = (r) => {
    const rate = (r / 100 + 1)
    return {
        getNet: (p) => +(p / rate).toFixed(2),
        getVat: (p) => +(p - (p / rate)).toFixed(2)
    };
}