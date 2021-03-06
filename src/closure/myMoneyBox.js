/* const moneyBox = (coins) => {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`moneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(1); */

const moneyBox = () => {
  let saveCoins = 0;

  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`);
  };
  return countCoins;
};

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
