function stairsIn20(s){

    const sunday = s[0].reduce((acc, number) => acc + number, 0)
    const monday = s[1].reduce((acc, number) => acc + number, 0)
    const tuesday = s[2].reduce((acc, number) => acc + number, 0)
    const wednesday = s[3].reduce((acc, number) => acc + number, 0)
    const thursday = s[4].reduce((acc, number) => acc + number, 0)
    const friday = s[5].reduce((acc, number) => acc + number, 0)
    const saturday = s[6].reduce((acc, number) => acc + number, 0)
    const one_year = sunday + monday + tuesday + wednesday + thursday + friday + saturday

    return one_year * 20
}