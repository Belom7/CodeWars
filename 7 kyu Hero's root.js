const intRac = (n, guess, count=1) => {
    let temp = Math.floor((guess + n / guess) /2)
    return Math.abs(guess-temp)<1?count:intRac(n,temp,++count)
}