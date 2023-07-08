const isSatorSquare = tab => [...arr = tab.join('')].reverse().join('') +
    tab.map((a, i)=>a.map((_, j) => tab[j][i])).join('') === arr + arr