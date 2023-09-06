var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var display1 = document.getElementById("display1");
var operand1 = 0;
var operand2 = null;
var operator = null;
let sout;
let ans;
var signval = true;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value === "+") {
      operator = "+";
      operand1 = parseFloat(display.textContent);
      display1.innerHTML += operator;
      display.innerText = "";
    } else if (value === "-") {
      operator = "-";
      operand1 = parseFloat(display.textContent);
      display1.innerHTML += operator;
      display.innerText = "";
    } else if (value === "*") {
      operator = "*";
      operand1 = parseFloat(display.textContent);
      display1.innerHTML += operator;
      display.innerText = "";
    } else if (value === "/") {
      operator = "/";
      operand1 = parseFloat(display.textContent);
      display1.innerHTML += operator;
      display.innerText = "";
    } else if (value === "%") {
      operator = "%";
      operand1 = parseFloat(display.textContent);
      display1.innerHTML += operator;
      display.innerText = "";
    } else if (value === "+/-") {
      if (signval) {
        display.innerText = -1 * display.innerText;
      } else {
        display.innerText = "+" + -1 * display.innerText;
      }
      signval = !signval;
    } else if (value === "=") {
      display1.innerHTML = "";
      operand2 = parseFloat(display.textContent);
      sout = operand1 + operator + operand2;
      ans = eval(sout);
      if (ans === Infinity) {
        display.innerText = "Error";
      } else {
        display.innerText = ans;
        display1.innerHTML = ans;
      }
      operand1 = 0;
      operator = null;
      operand2 = null;
    } else if (value === "AC") {
      signval = true;
      display.innerText = "";
      display1.innerHTML = "";
    } else {
      signval = true;
      display.innerText += value;
      display1.innerHTML += value;
    }
  });
}
