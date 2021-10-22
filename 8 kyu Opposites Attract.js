function lovefunc(flower1, flower2) {

    let result

    if (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0) {
        result = true;
    } else {
        result = false;
    }
    return result
}