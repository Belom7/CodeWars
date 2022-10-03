const bitMarch = n => Array(9 - n).fill(0).map((_, i) =>
    Array(8).fill(0).map((_, j) => +(i + j >= 8 - n && i + j < 8)));