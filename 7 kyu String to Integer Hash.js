const hashCode = str =>
    [...str].reduce((acc, ch) => acc * 31 + ch.charCodeAt() & 2 ** 32 - 1, 0);