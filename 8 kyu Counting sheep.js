function countSheeps(arrayOfSheep) {
    let numberOfSheep = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            numberOfSheep += 1
        } else {
            numberOfSheep += 0
        }
    }
    return numberOfSheep
}