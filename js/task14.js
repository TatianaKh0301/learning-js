const array = [1, 2, 3, 4, 5];
const value = 3; 

function includes(array, value) {
    // console.log("array=", array);
    // console.log("value=", value);
    // Change code below this line
    for (const partArray of array) {
    //   console.log("partArray=", partArray);
      if (partArray === value) {
        return true;
      } 
    }
    return false;
    // Change code above this line
}

includes(array, value);