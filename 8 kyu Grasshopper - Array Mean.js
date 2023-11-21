var findAverage = function (nums) {
    return nums.reduce((acc, number) => acc + number, 0) / nums.length
}