const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let b
    mpg * fuelLeft >= distanceToPump ? b = true : b = false
    return b
};