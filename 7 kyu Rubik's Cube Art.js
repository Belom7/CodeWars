function cube(n) {
    let rubik = [];
    for (let i = 1; i <= n; i++) rubik.push(' '.repeat(n-i) + '/\\'.repeat(i) + '_\\'.repeat(n));
    for (let i = n; i >= 1; i--) rubik.push(' '.repeat(n-i) + '\\/'.repeat(i) + '_/'.repeat(n));
    return rubik.join('\n');
}