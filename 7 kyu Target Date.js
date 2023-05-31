const dateNbDays = (a0, a, p) =>
    new Date(2016, 0, 1 + Math.ceil(Math.log(a / a0) / Math.log(p / 36000 + 1))).toISOString().slice(0, 10);