function barista(coffees){
    coffees.sort((a,b)=> a-b)
    return coffees.reduce((acc, cookTime, i) => acc + cookTime * (coffees.length-i) + 2*i, 0)
}