function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Function Scope
    let fruit2 = "Kiwi"; //Block Scope
    const fruit3 = "banana"; //Block Scope
    console.log(fruit2); // si esta linea se ejecutA FUERA DEL IF no se ejecutara let fruit2 ya que esta dentro del bloque y esta inicializada con let.
    console.log(fruit3); // si esta linea se ejecutA FUERA DEL IF no se ejecutara const fruit3 ya que esta dentro del bloque y esta inicializada con const.
  }
  console.log(fruit1);
}

fruits();
