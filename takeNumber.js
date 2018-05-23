let bandNumber = 0;

const takeNumber = (bandName) => {
  bandNumber += 1;
  return `${bandNumber}. ${bandName}`;

}

const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console

const vash = takeNumber("Vash's Stampede");
console.log(vash);