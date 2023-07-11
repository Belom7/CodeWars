function evilCodeMedal(userTime, gold, silver, bronze) {
    if(userTime < gold) return "Gold";
    if(userTime < silver) return "Silver";
    if(userTime < bronze) return "Bronze";
    return "None";
}