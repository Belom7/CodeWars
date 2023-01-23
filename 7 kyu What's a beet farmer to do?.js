function maxBeets(beets, loss) {
    const n = (beets + loss) / loss / 2 | 0;
    return n * (beets - loss * (n-1));
}