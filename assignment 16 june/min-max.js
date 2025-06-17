function findMaxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}
console.log(findMaxMin([4, 1, 9, -2]));
