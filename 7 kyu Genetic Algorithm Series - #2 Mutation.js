let mutate = (c, p) => c.replace(/./g, m => m^(Math.random() < p))