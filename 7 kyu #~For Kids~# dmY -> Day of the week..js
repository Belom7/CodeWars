function dayOfTheWeek(date){
    return new Date(date.split("/").reverse().join("-")).toLocaleString('en-us', {  weekday: 'long' });
}