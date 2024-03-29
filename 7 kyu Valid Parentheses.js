function validParentheses(parenStr) {
    let curr = 0;
    for(let i = 0; i < parenStr.length; i++) {
        if (parenStr[i] === '(') {
            curr++;
        } else {
            curr--;
        }
        if (curr < 0) {
            return false;
        }
    }
    return curr === 0;
}