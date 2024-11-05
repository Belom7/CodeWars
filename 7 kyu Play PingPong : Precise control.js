function playPingPong(position,direction){
    if (direction == "DL"){
        return Math.abs(200 - position)
    } else
        return 300 - Math.abs(100 - position)
}