function findCaterer(budget, people){
    if (people <= 0) return -1;
    if (people * 30 * (people > 60 ? .8 : 1) <= budget) return 3;
    if (people * 20 <= budget) return 2;
    if (people * 15 <= budget) return 1;
    return -1;
}