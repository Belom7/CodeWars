function currencyBRL(number=0) {
    return 'R$ ' + number.toFixed(2).replace('.',',');
}