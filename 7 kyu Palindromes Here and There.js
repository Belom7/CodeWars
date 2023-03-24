function convertPalindromes(numbers) {
    return numbers.map(str => Number(str.toString() === str.toString().split('').reverse().join('')))
}