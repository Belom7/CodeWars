const howManyGifts = (maxBudget, gifts) =>
    gifts.sort((a, b) => a - b).filter(val => (maxBudget -= val) >= 0).length;