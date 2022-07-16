const isOpposite = (s1, s2) => !!(s1) && [...s1]
    .map(c => c[`to${c <= 'Z' ? 'Low' : 'Upp'}erCase`]())
    .join`` === s2;