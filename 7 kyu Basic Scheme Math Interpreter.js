const SHEMES = {
    "+": [(a, b) => a + b, 0],
    "-": [(a, b) => a - b, 0],
    "*": [(a, b) => a * b, 1],
    "/": [(a, b) => a / b, 0]
}

function scheme(cmd) {
    const [operator, ...operands] = cmd.match(/-?\d+|[+*/-]/g),
        [operation, initValue] = SHEMES[operator];
    return operands.length ? operands.map(Number).reduce(operation) : initValue;
}