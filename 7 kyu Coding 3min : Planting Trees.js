function sc (width, length, gap){
    //account for the corners - the length and width share a post, hence "- 4"
    var perimeter = (width * 2) + (length * 2) - 4;
    var treePlusGap = 1 + gap;

    //perimeter divided by gaps will give result
    var trees = perimeter / treePlusGap;

    //if it's a decimal it's not symmetrical
    return (trees % 1 !== 0) ? 0 : trees;
}