var sing = () => Array(195).fill(0).map( (el, i) => i % 2 ?
    `Take one down and pass it around, ${(197 - i) / 2} bottles of beer on the wall.` :
    `${(198 - i) / 2} bottles of beer on the wall, ${(198 - i) / 2} bottles of beer.`)
    .concat(
        [`Take one down and pass it around, 1 bottle of beer on the wall.`,
            `1 bottle of beer on the wall, 1 bottle of beer.`,
            `Take one down and pass it around, no more bottles of beer on the wall.`,
            `No more bottles of beer on the wall, no more bottles of beer.`,
            `Go to the store and buy some more, 99 bottles of beer on the wall.`]
    );