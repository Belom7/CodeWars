function stringsConstruction(str, target) {
    for(let i = 0;; i++) {
        for (let c of str) {
            if (target.includes(c)) target = target.replace(c, '-')
            else return i;
        }
    }
}