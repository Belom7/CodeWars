function feast(beast, dish) {
    const theFirstLetterOfTheAnimal = beast.split('')[0]
    const theLastLetterOfTheAnimal = beast.split('')[beast.length - 1]
    const theFirstLetterOfTheDish = dish.split('')[0]
    const theLastLetterOfTheDish = dish.split('')[dish.length - 1]

    return theFirstLetterOfTheAnimal === theFirstLetterOfTheDish &&
        theLastLetterOfTheAnimal === theLastLetterOfTheDish
}