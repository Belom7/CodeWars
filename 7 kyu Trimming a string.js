function trim(arr, size) {
    return arr.length <= size ? arr : arr.slice(0, arr.length > 3 ? size - 3 : size) + '...'
}