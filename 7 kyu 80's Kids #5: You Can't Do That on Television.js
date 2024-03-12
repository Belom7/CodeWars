const bucketOf = (str) => {
    const water = /(water|wet|wash)/i.test(str)
    const slime = /(slime|i don't know)/i.test(str)

    return water && slime ? "sludge" : water ? "water" : slime ? "slime" : "air"
}