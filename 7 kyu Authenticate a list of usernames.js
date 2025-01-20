function authList(arr) {
    return arr.every(x => /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(x));
}