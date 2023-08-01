function convert(degrees) {
    let hour = Math.floor(degrees);
    let minutes = Math.floor((degrees - hour)*60);
    let seconds = Math.round(degrees*3600 - hour*3600 - minutes*60);
    if(seconds > 0) return [hour, minutes, seconds]
    if(minutes > 0) return [hour, minutes]
    if(hour >= 0) return [hour]
}