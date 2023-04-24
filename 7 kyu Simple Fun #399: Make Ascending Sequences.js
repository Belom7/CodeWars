function makeSequences(n){
    const result = [1];

    for (let i=1; i <= n; i++) {
        result.push(i % 2 ? result[i - 1] : result[i / 2] + result[i - 1]);
    }

    return result.pop();
}