//Prints out numbers 1-100
//For multiples of 5, it prints "Chicken" instead
//For multiples of 7, it prints "Monkey" instead
chickenMonkey = () => {
  for(let i = 1; i <= 100; i++) {
    let message = "";
    //checks if i is a multiple of 5 or 7
    if(i % 5 === 0 || i % 7 === 0) {
      if(i % 5 === 0) {
        message += "Chicken";
      }
      if(i % 7 === 0) {
        message += "Monkey";
      }
      //executes if i isn't divisible by 5 or 7
    } else if(i % 5 !== 0 && i % 7 !== 0) {
      message += i;
    }
    console.log(message);
  }
}

chickenMonkey();