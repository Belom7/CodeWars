const minimumPerimeter = (area) => {
    for (let x = Math.floor(Math.sqrt(area)); x > 0; x--) {
        if (area % x === 0) {
            return (x + area / x) * 2;
        }
    }
}