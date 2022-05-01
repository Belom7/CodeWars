function direction(facing, turn){
    let data = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    return data[(data.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8]
}