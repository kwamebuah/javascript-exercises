const removeFromArray = function(arr, ...toRemove) {
    let returnArr = [];
    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === toRemove[i]) {
                delete arr[j];
            }
        }  
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
