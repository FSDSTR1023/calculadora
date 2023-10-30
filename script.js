// retrieve input
const answer = document.getElementById("input");

// to help with function so that the equals button resets after you get an answer
let isEqualsButtonPressed = false;

// Special buttons - creating event listeners for each
const buttonC = document.getElementById("buttonC");
buttonC.addEventListener("click", () => {
  answer.value = "";
  answer.ariaPlaceholder = 0;
  console.log("button C clicked");
});

const buttonPlus = document.getElementById("buttonPlus");
buttonPlus.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value += "+";
  console.log("button + clicked", answer.value);
});
const buttonMin = document.getElementById("buttonMin");
buttonMin.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value += "-";
  console.log("button - clicked", answer.value);
});
const buttonMult = document.getElementById("buttonMult");
buttonMult.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value += "*";
  console.log("button * clicked", answer.value);
});
const buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value += "/";
  console.log("button / clicked", answer.value);
});
const buttonPercent = document.getElementById("buttonPercent");
buttonPercent.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value = `${answer.value / 100}`;
  console.log("button % clicked", answer.value);
});
const buttonPlusMinus = document.getElementById("buttonPlusMinus");
buttonPlusMinus.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value = -answer.value;
  console.log("button +/- clicked", answer.value);
});
const buttonDot = document.getElementById("buttonDot");
buttonDot.addEventListener("click", () => {
  isEqualsButtonPressed = false;
  answer.value += ".";
  console.log("button . clicked", answer.value);
});

const buttonEquals = document.getElementById("buttonEquals");
buttonEquals.addEventListener("click", () => {
  isEqualsButtonPressed = true;
  console.log("button = clicked", answer.value);
  let result = eval(answer.value);
  if (Number.isInteger(result)) {
    answer.value = result;
  } else {
    result.toFixed(2);
    answer.value = result;
  }
  ansLength = answer.value.length;
});
answer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    isEqualsButtonPressed = true;
    console.log("button = clicked", answer.value);
    if (Number.isInteger(answer.value)) {
      answer.value = eval(answer.value);
    } else {
      let result = eval(answer.value).toFixed(2);
      answer.value = result;
    }
  }
});

// Number buttons // done
const button7 = document.getElementById("button7");
button7.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "7";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 7;
    console.log("button 7 clicked");
  }
});
const button8 = document.getElementById("button8");
button8.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "8";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 8;
    console.log("button 8 clicked");
  }
});
const button9 = document.getElementById("button9");
button9.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "9";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 9;
    console.log("button 9 clicked");
  }
});
const button4 = document.getElementById("button4");
button4.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "4";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 4;
    console.log("button 4 clicked");
  }
});
const button5 = document.getElementById("button5");
button5.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "5";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 5;
    console.log("button 5 clicked");
  }
});
const button6 = document.getElementById("button6");
button6.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "6";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 6;
    console.log("button 6 clicked");
  }
});
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "1";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 1;
    console.log("button 1 clicked");
  }
});
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "2";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 2;
    console.log("button 2 clicked");
  }
});
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "3";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 3;
    console.log("button 3 clicked");
  }
});
const button0 = document.getElementById("button0");
button0.addEventListener("click", () => {
  if (isEqualsButtonPressed == true) {
    answer.value = "0";
    isEqualsButtonPressed = false;
  } else {
    answer.value += 0;
    console.log("button 0 clicked");
  }
});

if (ansLength < 7) {
  answer.style;
}
