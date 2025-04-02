function checkExpiryValid(date) {
    return new Date() < new Date("20" + date.slice(-2), date.slice(0, 2), 1);
}