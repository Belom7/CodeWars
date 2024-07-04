const convertBase20ToDecimal = (num) => {
    const val = parseInt(num, 20)
    return isNaN(val) ? -1 : val
}