function fib(num, current = 0, next = 1) {
    if (num === 0)
        return current;

    return fib(--num, next, current + next);
}