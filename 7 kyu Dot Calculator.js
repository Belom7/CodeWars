function dotCalculator (equation) {
    const arr = equation.split(' ');
    switch ( arr[1] ){
        case '+':
            return '.'.repeat( arr[0].length + arr[2].length )
        case '-':
            return '.'.repeat( arr[0].length - arr[2].length )
        case '*':
            return '.'.repeat( arr[0].length * arr[2].length )
        default:
            return '.'.repeat( arr[0].length / arr[2].length )
    }
}