function holidayCount (a1, a2){
    a1=a1.filter(x=>typeof x=="number");
    a2=a2.filter(x=>typeof x=="number");
    return !a1.length||!a2.length ? 'Not possible' : a1[0]===a2[0] ? 'Same' : a1[0]>a2[0] ? 'Right' : 'Wrong';
}