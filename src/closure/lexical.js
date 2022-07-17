const myGlobal = 0;

const myFunction = () => {
  const number = 1;
  console.log(myGlobal);

  const parent = () => {
    //function interna
    const inner = 2;
    console.log(number, myGlobal);

    const child = () => {
      console.log(inner, number, myGlobal);
    };

    return child();
  };
  return parent();
};

myFunction();
