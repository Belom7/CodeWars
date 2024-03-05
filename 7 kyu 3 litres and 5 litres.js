function canIMeasure(a,b,c) {
    if (c>a && c>b)
        return false;
    for (let i=1; i<1000;++i)
        for (let j=0; j<1000;++j)
            if ((a*i-b*j)==c)
                return true
    return false
}