/*
let username;
username = window.prompt("insert username");
window.alert("username saved");
console.log(`username, ${username}`);

let username;
document.getElementById("subm1").onclick = function () {
  username = document.getElementById("inp1").value;
  document.getElementById("myh1").textContent = `welcome ${username} !`;
   console.log(`the username is ${username}`);
};


const randomnum = Math.floor(Math.random() * 100);

const kurang = document.getElementById("kurang");

const ulang = document.getElementById("ulang");

const myincrease = document.getElementById("tambah");

const countlabel = document.getElementById("countlabel");

let count = 0;

tambah.onclick = function () {
  count++;
  countlabel.textContent = count;
};

ulang.onclick = function () {
  count = 0;
  countlabel.textContent =0;
};
kurang.onclick = function () {
  count--;
  countlabel.textContent = count;
};



const buton = document.getElementById("mybuttons");
const input = document.getElementById("mytext");
const resultelement = document.getElementById("resultelement");
let age;
mybuttons.onclick = function () {
  age = mytext.value;
  age = Number(mytext.value);

  if (age <= 17) {
    resultelement.textContent = "minor";
  } else if (age > 17 && age <= 50) {
    resultelement.textContent = "pass";
  } else {
    resultelement.textContent = "too old";
  }
};

const mycheckbox = document.getElementById("mycheckbox");
const myvisaBtn = document.getElementById("myvisaBtn");
const mywalletBtn = document.getElementById("mywalletBtn");
const mypasportBtn = document.getElementById("mypasportBtn");
const submitBtn = document.getElementById("submitBtn");
const subresult = document.getElementById("subresult");
const checkresult = document.getElementById("checkresult");

submitBtn.onclick = function () {
  if (mycheckbox.checked) {
    subresult.textContent = "you subs";
  } else {
    subresult.textContent = "ur not subscribe";
  }
  if (myvisaBtn.checked) {
    checkresult.textContent = "u using visa";
  } else if (mywalletBtn.checked) {
    checkresult.textContent = "using eWallet";
  } else if (mypasportBtn.checked) {
    checkresult.textContent = "using pasport";
  } else {
    checkresult.textContent = "select payment method";
  }
};

*/
