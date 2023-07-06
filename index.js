//მესამე დავალება
function kamateli() {
  const butto = document.getElementsByClassName("ghilaki2");
  let shemtxveviti = Math.floor(Math.random() * 3 + 1);
  console.log(shemtxveviti);
  if (shemtxveviti === 3) {
    alert("User1 has won");
  }
}

kamateli();
//პირველი დავალება

const user = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
console.log(user.length);
