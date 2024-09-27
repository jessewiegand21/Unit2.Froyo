const userInputString = prompt("Please enter your flavors seperated by commas");

const flavorsList = userInputString.split(",");

function countFlavors(flavors) {
  let flavorCount = new Map();
  for (let i = 0; i < flavors.length; i++) {
    let count = flavorCount.get(flavors[i]);
    if (count) {
      flavorCount.set(flavors[i], count + 1);
    } else {
      flavorCount.set(flavors[i], 1);
    }
  }
  return flavorCount;
}
let flavorCount = countFlavors(flavorsList);

console.log(flavorCount);
