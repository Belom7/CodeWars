function dayAndTime(n) {
    let date = new Date(new Date(2023,0).setMinutes(n));
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][date.getDay()]+' '+date.toTimeString().slice(0,5);
}