Car.prototype.getNumberOfGears = function getNumberOfGears(car) {
    // code me
    return this ?. engine ?. gearBox ?. numberOfGears ?? null;
}