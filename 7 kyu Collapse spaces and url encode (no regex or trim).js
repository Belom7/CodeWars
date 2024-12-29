function urlify(str) {
    return str.split(' ').filter(el => el !== '').join('%20')
}