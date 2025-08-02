const bkashBtn = document.querySelector(".logo-bkash");
const rocketBtn = document.querySelector(".logo-rocket");
const nagadBtn = document.querySelector(".logo-nagad");
const pathaoBtn = document.querySelector(".logo-pathaopay");

const calculateBtn = document.querySelector(".calculate-button");

// color capture
const bodyColor = document.querySelector(".from-result-section");

var activeWindow = "bkashAgent";
bkashBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#FFCDD2";
  activeWindow = "bkashAgent";
  getInput();
});
nagadBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#FFF2CC";
  activeWindow = "nagadAgent";
  getInput();
});
rocketBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#DBBEDD";
  activeWindow = "rocketAgent";
  getInput();
});

pathaoBtn.addEventListener("click", (event) => {
  bodyColor.style.background = "#0062";
  activeWindow = "pathaopayWithdrowBank";
  getInput();
});

// charge parcentage
const bkashAgent = 1.85;
const bkashPriyoAgent = 1.85;
const rocketAgent = 1.8;
const rocketAtm = 0.9;
const nagadAgent = 1.5;
const pathaopayWithdrowBank = 1.5;

// Calculation Section

function calculator(value, parcentage) {
  setTimeout(() => {
 
      var charge = (value * parcentage) / 100;
      var withCharge = value + charge;
      var withOutCharge = value - charge;

      displayResult(charge, withCharge, withOutCharge,parcentage);
    
  }, 400);
}

function getInput() {
  // console.log("run function.");

  var inputBox = document.getElementById("enter-amount");
  const inputValue = inputBox.value;

  if (activeWindow == "bkashAgent") {
    calculator(inputValue, bkashAgent);
  } else if (activeWindow == "bkashPriyoAgent") {
    calculator(inputValue, bkashPriyoAgent);
  } else if (activeWindow == "rocketAtm") {
    calculator(inputValue, rocketAtm);
  } else if (activeWindow == "rocketAgent") {
    calculator(inputValue, rocketAgent);
  } else if (activeWindow == "nagatAgent") {
    calculator(inputValue, nagadAgent);
  } else if (activeWindow == "pathaopayWithdrowBank") {
    calculator(inputValue, pathaopayWithdrowBank);
  } else {
    calculator(inputValue, bkashAgent);
  }

  //   console.log(activeWindow);
}

// result showing section

function displayResult(charge, withCharge, withOutCharge,parcentage) {
  const displayCharge = document.getElementById("charge");
  const displayWithCharge = document.getElementById("withCharge");
  const displayWithOutCharge = document.getElementById("withOutCharge");
  const displayParcentage = document.getElementById("parcentage");

  displayCharge.innerText = ` ৳ ${charge}`;
  displayWithCharge.innerText = ` ৳ ${withCharge}`;
  displayWithOutCharge.innerText = `৳ ${withOutCharge}`;
  displayParcentage.innerText = `৳ ${parcentage}`;
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

calBtn1.addEventListener("click",(e)=> {
var inputBox = document.getElementById("enter-amount");
   inputBox.value = 1000;
   getInput();
   
});
calBtn2.addEventListener("click",(e)=> {
var inputBox = document.getElementById("enter-amount");
   inputBox.value = 2000;
   getInput();
   
});
calBtn3.addEventListener("click",(e)=> {
var inputBox = document.getElementById("enter-amount");
   inputBox.value = 5000;
   getInput();
   
});
calBtn4.addEventListener("click",(e)=> {
var inputBox = document.getElementById("enter-amount");
   inputBox.value = 10000;
   getInput();
   
});
calBtn5.addEventListener("click",(e)=> {
var inputBox = document.getElementById("enter-amount");
   inputBox.value = 15000;
   getInput();
   
});
