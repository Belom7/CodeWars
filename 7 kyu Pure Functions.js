const state = {
    modifier: 2,
};

function solution(arr, options) {
    return arr.map(m=> m+2*options.modifier)
}