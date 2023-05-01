function quadrant_segment(x, y) {
    if ((x.x > 0 && x.y > 0) && (y.x > 0 && y.y > 0)) {
        return false;
    } else if ((x.x < 0 && x.y > 0) && (y.x < 0 && y.y > 0)) {
        return false;
    } else if ((x.x > 0 && x.y < 0) && (y.x > 0 && y.y < 0)) {
        return false;
    } else if ((x.x < 0 && x.y < 0) && (y.x < 0 && y.y < 0)) {
        return false;
    } else {
        return true
    }
}