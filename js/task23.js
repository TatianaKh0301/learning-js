const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        // console.log("pizzaName", pizzaName);
        // console.log("onSuccess", onSuccess);
        // console.log("onError", onError);
        // console.log("error", error)
        // console.log("pizzaPalace.pizzas", pizzaPalace.pizzas);
        // for (const pizza of this.pizzas) {
        //     console.log("pizzaName", pizzaName);
        //     console.log("pizza", pizza);
            if(!this.pizzas.includes(pizzaName)) {
              onError(pizzaName);
            } else {
              onSuccess(pizzaName);              
            }
            
        },        
    
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
  }
  
  // Callback for onError
  function onOrderError(error) {
    console.log(`Error! There is no pizza with a name ${error} in the assortment.`);
  }

  // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
