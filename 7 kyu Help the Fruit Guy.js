function removeRotten(bagOfFruits){
    return bagOfFruits? bagOfFruits.map(m => m.toLowerCase().replace('rotten', '')) : []
}