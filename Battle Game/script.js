let randomDamage = () => {
  return Math.floor(Math.random() * 10);
};

console.log(randomDamage(11));

let chooseOption = (opt1, opt2) => {
  let randNum = 0 || 1;
  return opt2 < 1 ? opt1 : opt2;
};

console.log(chooseOption);
