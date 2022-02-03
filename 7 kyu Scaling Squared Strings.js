const scale = (strng, k, n) =>
    strng.split('\n').map( el => Array(n)
        .fill( [...el].map(e => e.repeat(k)).join('') )
        .join('\n') )
        .join('\n')
        .trim()