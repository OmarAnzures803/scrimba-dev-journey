let cont = 0;
let contG = 0;

function checkWin() {
  if (cont > contG) {
    document.getElementById("W-home").textContent = "👑";
    document.getElementById("W-guest").textContent = " ";
  }
}
function checkWin2() {
  if (cont < contG) {
    document.getElementById("W-home").textContent = " ";
    document.getElementById("W-guest").textContent = "👑";
  }
}

function contPro1() {
  cont += 1;
  document.getElementById("home").textContent = cont;
  checkWin();
  checkWin2();
}
function contPro2() {
  cont += 2;
  document.getElementById("home").textContent = cont;
  checkWin();
  checkWin2();
}
function contPro3() {
  cont += 3;
  document.getElementById("home").textContent = cont;
  checkWin();
  checkWin2();
}

function contProG1() {
  contG += 1;
  document.getElementById("guest").textContent = contG;
  checkWin();
  checkWin2();
}
function contProG2() {
  contG += 2;
  document.getElementById("guest").textContent = contG;
  checkWin();
  checkWin2();
}
function contProG3() {
  contG += 3;
  document.getElementById("guest").textContent = contG;
  checkWin();
  checkWin2();
}

function setZero() {
  cont = 0;
  document.getElementById("home").textContent = cont;
  contG = 0;
  document.getElementById("guest").textContent = contG;
  document.getElementById("W-guest").textContent = " ";
  document.getElementById("W-home").textContent = " ";
  seg = 0;
  document.getElementById("tm").textContent = seg;
}

let seg = 0;
function timP() {
  seg += 1;
  document.getElementById("tm").textContent = seg;
}

setInterval(() => {
  timP();
}, 1000);
