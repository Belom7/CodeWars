function valAndUnits(s) {
    return {val:+s.replace(/[^0-9.-]/g,''), units:s.replace(/[0-9. -]/g,'')}
}