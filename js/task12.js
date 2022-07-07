// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
//  и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
const array1 = [1, 2, 3];
const array2 = [2, 1, 17, 19];

// function getCommonElements(array1, array2) {
//     let newArray = [];
    
//     for (let numArray1 of array1) {
//         for(let numArray2 of array2) {
//             if (numArray1 === numArray2) {
//                 newArray.push(numArray1);
//             }
//         }
//     }
//     console.log("newArray", newArray);
//     return newArray;
    
// }

function getCommonElements(array1, array2) {
    let newArray = [];
    
    for (let numArray1 of array1) {
            console.log(numArray1);
            if (array2.includes(numArray1)) {
                newArray.push(numArray1);
            }
        }
    
    console.log("newArray", newArray);
    return newArray;
    
}

getCommonElements(array1, array2)