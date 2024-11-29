const sumAll = function(start, end) {
    // Error Checking
    const negativeNums = start < 0 || end < 0;
    const nonInteger = !Number.isInteger(start) || !Number.isInteger(end);
    if (negativeNums || nonInteger) return "ERROR";

    // Check to see if we need to swap the start and end
    if (start > end) [start, end] = [end, start]

    let sum = 0;

    // Adding the sum
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
