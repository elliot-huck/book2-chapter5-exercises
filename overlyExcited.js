// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["The", "quick", "fox", "jumped", "over", "the", "lazy","brown", "dogs"];

/*
    The addPunctuation function should be an impure function, and accept
    the array and the punctuation as arguments. It should iterate over the array and output the words to the browser console.
*/
addPunctuation = (theWordArray, puncType) => {

    // Initialize buildMeUp
    let buildMeUp = ``;
    
    for (let i = 0; i < theWordArray.length; i++) {
      //Reset punc
      let punc = ``;
      //Check if it's a 3rd word and iterate the punctuation if so
      if ((i + 1) % 3 === 0) {
        for (let j = 0; j < ((i + 1) / 3); j++)
        punc += `${puncType}`;
      }
      // Concatenate the new word onto buildMeUp
      buildMeUp += `${theWordArray[i]}${punc} `;

      // Print buildMeUp to the console
      console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addPunctuation(sentence, "?");
addPunctuation(nextSentence, ".");