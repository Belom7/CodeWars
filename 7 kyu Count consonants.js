function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}