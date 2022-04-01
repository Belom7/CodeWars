function stickyCalc (operation, val1, val2){
    val1 = Number(String(Math.round(val1)) + String(val2));

    switch(operation){
        case '+':
            return Math.round(val1 + val2);
        case '-':
            return Math.round(val1 - val2);
        case '*':
            return Math.round(val1 * val2);
        case '/':
            return Math.round(val1 / val2);
    }

}