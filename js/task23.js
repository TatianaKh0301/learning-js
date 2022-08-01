const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        // console.log("pizzaName", pizzaName);
        // console.log("pizzaPalace.pizzas", pizzaPalace.pizzas);
        for (const pizza of this.pizzas) {
            console.log("pizzaName", pizzaName);
            console.log("pizza", pizza);
            if(pizzaName !== pizza) {
                onError(pizzaName);
                continue;
            }
            onSuccess(pizzaName);
        }        
    },
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }

  // Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
