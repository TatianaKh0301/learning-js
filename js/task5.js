let message = '';
let pricePerWord = 0;
let priceMeddage = 0;
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
   console.log(message);
   console.log(pricePerWord);
   const words = message.split(" ");
   console.log(words);
   const wordsAmount = words.length;
   console.log(wordsAmount);
   priceMessage = wordsAmount * pricePerWord;
   console.log(priceMessage);
   return priceMessage;
   // Change code above this line
  
}

calculateEngravingPrice("JavaScript is in my blood", 10);

console.log('priceMeddage=', priceMessage);