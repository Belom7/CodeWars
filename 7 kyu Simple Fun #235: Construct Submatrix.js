function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    return matrix
        .map(row => row.filter((_, i) => !columnsToDelete.includes(i)))
        .filter((_, i) => !rowsToDelete.includes(i))
}