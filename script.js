const answer = document.getElementById("input");

// Special buttons
const buttonC = document.getElementById("buttonC");
buttonC.addEventListener("click", () => {
  answer.value = "";
  answer.ariaPlaceholder = 0;
  console.log("button C clicked");
});
const buttonPlus = document.getElementById("buttonPlus");
buttonPlus.addEventListener("click", () => {
  answer.value += "+";
  console.log("button + clicked", answer.value);
});
const buttonMin = document.getElementById("buttonMin");
buttonMin.addEventListener("click", () => {
  answer.value += "-";
  console.log("button - clicked", answer.value);
});
const buttonMult = document.getElementById("buttonMult");
buttonMult.addEventListener("click", () => {
  answer.value += "*";
  console.log("button * clicked", answer.value);
});
const buttonDivide = document.getElementById("buttonDivide");
buttonDivide.addEventListener("click", () => {
  answer.value += "/";
  console.log("button / clicked", answer.value);
});
const buttonPercent = document.getElementById("buttonPercent");
buttonPercent.addEventListener("click", () => {
  answer.value = `${answer.value / 100}`;
  console.log("button % clicked", answer.value);
});
const buttonPlusMinus = document.getElementById("buttonPlusMinus");
buttonPlusMinus.addEventListener("click", () => {
  answer.value = -answer.value;
  console.log("button +/- clicked", answer.value);
});

const buttonEquals = document.getElementById("buttonEquals");
buttonEquals.addEventListener("click", () => {
  answer.value = eval(answer.value);
});
answer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    answer.value = eval(answer.value);
  }
});

// Number buttons
const button7 = document.getElementById("button7");
button7.addEventListener("click", () => {
  answer.value += 7;
  console.log("button 7 clicked");
});
const button8 = document.getElementById("button8");
button8.addEventListener("click", () => {
  answer.value += 8;
  console.log("button 8 clicked");
});
const button9 = document.getElementById("button9");
button9.addEventListener("click", () => {
  answer.value += 9;
  console.log("button 9 clicked");
});
const button4 = document.getElementById("button4");
button4.addEventListener("click", () => {
  answer.value += 4;
  console.log("button 4 clicked");
});
const button5 = document.getElementById("button5");
button5.addEventListener("click", () => {
  answer.value += 5;
  console.log("button 5 clicked");
});
const button6 = document.getElementById("button6");
button6.addEventListener("click", () => {
  answer.value += 6;
  console.log("button 6 clicked");
});
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
  answer.value += 1;
  console.log("button 1 clicked");
});
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
  answer.value += 2;
  console.log("button 2 clicked");
});
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  answer.value += 3;
  console.log("button 3 clicked");
});
