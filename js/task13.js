const order = [12, 85, 37, 4];
function calculateTotalPrice(order) {
    let total = 0;
      
    for (const ord of order) {
      total += ord;
      
    }
    console.log("total=", total);
  
    return total;
  }

calculateTotalPrice(order);