// const removeFromArray = function(arr, ...toRemove) {
//     let returnArr = [];
//     for (let i = 0; i < toRemove.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === toRemove[i]) {
//                 delete arr[j];
//             }
//         }  
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== undefined) {
//             returnArr.push(arr[i]);
//         }
//     }
//     return returnArr;
// };

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
