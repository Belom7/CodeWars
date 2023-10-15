function warnTheSheep(queue) {
    const index = queue.length - queue.findIndex(el=> el === 'wolf') - 1

    if(index === 0){
        return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
    }
}