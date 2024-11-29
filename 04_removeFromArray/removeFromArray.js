const removeFromArray = function(arr, ...items) {
    return arr.filter(e => !items.includes(e))
   
};

// Do not edit below this line
module.exports = removeFromArray;
