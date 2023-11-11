function arrayMadness(a, b) {
    const arr1 = a.reduce((acc, number) => acc + number ** 2, 0)
    const arr2 = b.reduce((acc, number) => acc + number ** 3, 0)

    return arr1 > arr2
}