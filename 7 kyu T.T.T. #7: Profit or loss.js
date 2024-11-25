function profitLoss(records){
    return +records.reduce((prev,cur) => cur[0] - cur[0] / (1 + cur[1] / 100) + prev, 0).toFixed(2);
}