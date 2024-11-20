function pattern(n) {
    let i, line = '', lines = [];
    for (i=1;i<=n;i++) line += i%10;
    for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
    return lines.join("\n");
}