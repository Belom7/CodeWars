let counter = {
    [Symbol.iterator]() {
        var i = 1
        return {
            next() {
                return { done: false, value: i++ }
            }
        }
    }
}