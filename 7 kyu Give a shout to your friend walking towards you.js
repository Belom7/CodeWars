function madShout(sidewalk) {
    let i = Math.floor(sidewalk.match(/Y-*F/)[0].length / 2);
    return 'O' + 'i'.repeat(i) + ' F!';
}