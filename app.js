const bkashBtn = document.querySelector(".logo-bkash");
const rocketBtn = document.querySelector(".logo-rocket");
const nagadBtn = document.querySelector(".logo-nagad");
const pathaoBtn = document.querySelector(".logo-pathaopay");

const calculateBtn = document.querySelector(".calculate-button");

// color capture
const bodyColor = document.querySelector(".from-section");
const bodyColor2 = document.querySelector(".result-section");

// charge parcentage
const bkashAgent = 1.85;
const bkashPriyoAgent = 1.49;
const rocketAgent = 1.8;
const rocketAtm = 0.9;
const nagadAgent = 1.5;
const pathaopayWithdrowBank = 1.5;

// BUTTON EVENT CLICK CAPTURE SECTION
var activeWindow = "bkashAgent";
showParcentage(bkashAgent);

// if (activeWindow == "bkashAgent") {
//   dropDownEventBkash();
// }

bkashBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#FFCDD2";
  bodyColor2.style.background = "#FFCDD2";

  activeWindow = "bkashAgent";

  getInput();
});
nagadBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#FFF2CC";
  bodyColor2.style.background = "#FFF2CC";
  activeWindow = "nagadAgent";
  getInput();
});
rocketBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#DBBEDD";
  bodyColor2.style.background = "#DBBEDD";
  activeWindow = "rocketAgent";
  // dropDownEventRocket();
  getInput();
});

pathaoBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#DDDDEB";
  bodyColor2.style.background = "#DDDDEB";
  activeWindow = "pathaopayWithdrowBank";
  getInput();
});

// Calculation Section

function calculator(value, parcentage) {
  setTimeout(() => {
    let val = parseFloat(value);
    let parcent = parcentage;
    let charge = (val * parcent) / 100;
    let withCharge = val + charge;
    let withOutCharge = val - charge;

    // CALLING RESULT FUNCTIONS
    showParcentage(parcentage);
    displayResult(charge, withCharge, withOutCharge);
  }, 300);
}

// Drop Down Option Section

function dropDown(name) {
  let dropDownBkash = document.getElementById("dropdown-bkash");
  let dropDownRocket = document.getElementById("dropdown-rocket");

  if (name == "bkash") {
    dropDownBkash.style.display = "block";
    dropDownRocket.style.display = "none";
  } else if (name == "rocket") {
    dropDownRocket.style.display = "block";
    dropDownBkash.style.display = "none";
  } else if (name == "nagad") {
    dropDownBkash.style.display = "none";
    dropDownRocket.style.display = "none";
  } else if (name == "pathaopay") {
    dropDownBkash.style.display = "none";
    dropDownRocket.style.display = "none";
  } else {
    dropDownBkash.style.display = "block";
  }
}

function clickEventOptionBkash() {
  let dropDownBkash = document.getElementById("dropdown-bkash");

  if (dropDownBkash.value == "bkashPriyoAgent") {
    activeWindow = "bkashPriyoAgent";
    let parcent = bkashPriyoAgent;

    showParcentage(parcent);
    getInput();
  } else if (dropDownBkash.value == "bkashAgent") {
    activeWindow = "bkashAgent";
    let parcent = bkashAgent;

    showParcentage(parcent);
    getInput();
  }
}
function clickEventOptionRocket() {
  let dropDownRocket = document.getElementById("dropdown-rocket");

  if (dropDownRocket.value == "rocketAtm") {
    activeWindow = "rocketAtm";
    let parcent = rocketAtm;
    showParcentage(parcent);
    getInput();
  } else if (dropDownRocket.value == "rocketAgent") {
    activeWindow = "rocketAgent";
    let parcent = rocketAgent;
    showParcentage(parcent);
    getInput();
  }
}

// input function working
let flag = 0;
function getInput() {
  // console.log("run function.");

  var inputBox = document.getElementById("enter-amount");
  const inputValue = inputBox.value;

  if (inputValue) {
    flag = 1; 
  } else {
    flag = 0;
  }

  if (activeWindow == "bkashAgent") {
    calculator(inputValue, bkashAgent);
    dropDown("bkash");
  } else if (activeWindow == "bkashPriyoAgent") {
    calculator(inputValue, bkashPriyoAgent);
  } else if (activeWindow == "rocketAtm") {
    calculator(inputValue, rocketAtm);
  } else if (activeWindow == "rocketAgent") {
    calculator(inputValue, rocketAgent);
    dropDown("rocket");
  } else if (activeWindow == "nagadAgent") {
    calculator(inputValue, nagadAgent);
    dropDown("nagad");
  } else if (activeWindow == "pathaopayWithdrowBank") {
    calculator(inputValue, pathaopayWithdrowBank);
    dropDown("pathaopay");
  } else {
    calculator(inputValue, bkashAgent);
  }
}

// result showing section

function showParcentage(parcentage) {
  const displayParcentage = document.getElementById("parcentage");
  displayParcentage.innerText = `৳ ${parcentage}`;
}
function displayResult(charge, withCharge, withOutCharge) {
  const displayCharge = document.getElementById("charge");
  const displayWithCharge = document.getElementById("withCharge");
  const displayWithOutCharge = document.getElementById("withOutCharge");

  if (charge) {
    displayCharge.innerText = ` ৳ ${charge}`;
    displayWithCharge.innerText = ` ৳ ${withCharge}`;
    displayWithOutCharge.innerText = `৳ ${withOutCharge}`;
  }

  // cashClear();
}

// input box cash cleane

// function cashClear(){
//   var inputBox = document.getElementById("enter-amount");
//   inputBox.value = "";
// }

// auto input button

const calBtn1 = document.querySelector(".calculate-button1");
const calBtn2 = document.querySelector(".calculate-button2");
const calBtn3 = document.querySelector(".calculate-button3");
const calBtn4 = document.querySelector(".calculate-button4");
const calBtn5 = document.querySelector(".calculate-button5");

calBtn1.addEventListener("click", (e) => {
  var inputBox = document.getElementById("enter-amount");
  inputBox.value = 1000;
  getInput();
});
calBtn2.addEventListener("click", (e) => {
  var inputBox = document.getElementById("enter-amount");
  inputBox.value = 2000;
  getInput();
});
calBtn3.addEventListener("click", (e) => {
  var inputBox = document.getElementById("enter-amount");
  inputBox.value = 5000;
  getInput();
});
calBtn4.addEventListener("click", (e) => {
  var inputBox = document.getElementById("enter-amount");
  inputBox.value = 10000;
  getInput();
});
calBtn5.addEventListener("click", (e) => {
  var inputBox = document.getElementById("enter-amount");
  inputBox.value = 15000;
  getInput();
});
