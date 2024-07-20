function prediction(angle, n){
    let obj = {};

    for (let i = 0; i < n; ++i) {
        obj[`leaf ${i+1}`] = (i * angle % 360).toFixed(1) +  " degrees";
    }

    return obj;
}