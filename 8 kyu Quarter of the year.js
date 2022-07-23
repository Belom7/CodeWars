const quarterOf = (month) => {
    return month < 4 ? 1
        : month > 3 && month < 7 ? 2
            : month > 6 && month < 10 ? 3
                : 4
}