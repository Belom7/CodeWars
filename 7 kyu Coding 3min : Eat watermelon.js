const sc = watermelon =>
    watermelon.reduce((pre, val, idx) => (val.forEach((v, i) => pre[(i > 3) + (idx > 3) * 2] += v), pre), [0, 0, 0, 0])
        .reduce((pre, val) => pre + val * (val > 5), 0);