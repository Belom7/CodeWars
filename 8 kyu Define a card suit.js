function defineSuit(card) {
    return card.split('').map(m =>
        m === '♣' ? 'clubs'
            : m === '♦' ? 'diamonds'
                : m === '♥' ? 'hearts'
                    : m === '♠' ? 'spades'
                        : undefined).join('')
}