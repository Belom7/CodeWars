const solution = (n, b) =>
    Array.from({length: 2**n},(_,index) => index).filter(element => element & b)