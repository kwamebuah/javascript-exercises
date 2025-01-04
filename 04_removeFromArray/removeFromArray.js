const removeFromArray = function(arr, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[j] === toRemove[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
