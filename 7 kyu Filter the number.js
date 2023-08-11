const FilterString = (value) => {
    return +value.split('').filter(n => !isNaN(n)).join('');
}