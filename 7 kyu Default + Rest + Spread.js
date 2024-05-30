const Default  = (x, y = 7) => x + y,
    Rest     = (x, ...y) => x * y.length,
    Spread   = (...nums) => nums.reduce((s, x) => s + x, 0);