const secondLargest = array =>
    Array.isArray(array) ? [...new Set(array.filter(val => !isNaN(parseInt(val))).map(Number))].sort((a, b) => b - a)[1] : undefined;