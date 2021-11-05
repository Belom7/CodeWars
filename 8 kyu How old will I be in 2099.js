function calculateAge(a, b) {
    if (a == b) {
        return "You were born this very year!"
    } else if ((a < b) && (b - a >= 2)) {
        return `You are ${b - a} years old.`
    } else if ((a < b) && (b - a < 2)) {
        return `You are ${b - a} year old.`
    } else if ((a > b) && (a - b >= 2)) {
        return `You will be born in ${a - b} years.`
    } else if ((a > b) && (a - b < 2)) {
        return `You will be born in ${a - b} year.`
    }
}