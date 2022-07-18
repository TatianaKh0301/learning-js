// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Change code below this line
    const array = [];
    console.log("propName", propName);
    
        for (const product of products) {
                prodAr = (product[propName]);
                console.log(prodAr);
                array.push(prodAr);
            }            
    
    console.log('array', array);
    return array;
     
    // Change code above this line
  }


  getAllPropValues("name");
//   getAllPropValues("quantity");
//   getAllPropValues("price");
//   getAllPropValues("category");