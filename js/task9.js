const string = "The quick brown fox jumped over the lazy dog";


function findLongestWord(string) {
    
    const words = string.split(" ");
    // console.log("words=", words);
    let longestWord = words[0];
        
    for (const word of words) {
        // console.log("word=", word);
        if (word.length > longestWord.length) {
            longestWord = word;
            // console.log("????", longestWord);
        }
    }
    console.log("The longest word = ", longestWord);
    return longestWord; 
  }
  

findLongestWord(string);
