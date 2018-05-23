chickenMonkey = () => {
  for(let i = 1; i <= 100; i++) {
    let message = "";
    if(i % 5 === 0 || i % 7 === 0) {
      if(i % 5 === 0) {
        message += "Chicken";
      }
      if(i % 7 === 0) {
        message += "Monkey";
      }
    } else if(i % 5 !== 0 && i % 7 !== 0) {
      message += i;
    }
    console.log(message);
  }
}

chickenMonkey();