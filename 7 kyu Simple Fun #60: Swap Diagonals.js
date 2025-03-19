const swapDiagonals = matrix =>
    matrix.map((val, idx) => ([val[idx], val[matrix.length - 1 - idx]] = [val[matrix.length - 1 - idx], val[idx]], val));