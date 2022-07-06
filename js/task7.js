function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let arrayNew = firstArray.concat(secondArray);
    console.log("firstArray=", firstArray);
    console.log("secondArray=", secondArray);
    console.log("arrayNew=", arrayNew);
    const allAmount = arrayNew.length;
    console.log("allAmount=", allAmount);
    if (allAmount > maxLength) {
        arrayNew = arrayNew.slice(0, maxLength);
        console.log(arrayNew);
    }
    return arrayNew;
    // Change code above this line
}
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// console.log("arrayNew-finish", arrayNew);