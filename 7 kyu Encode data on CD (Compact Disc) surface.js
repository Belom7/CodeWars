function encodeCD(n) {
    let options = ['P','L'],ind = 0, str = "P";
    while (n>=1) {
        if (n%2===1) ind = (ind+1)%2;
        str += options[ind];
        n = (n - (n%2))/2;
    }

    return str.padEnd(9,options[ind]);
}