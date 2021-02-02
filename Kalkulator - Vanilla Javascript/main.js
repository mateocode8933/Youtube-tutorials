// pobieram elementy

// liczba ktora wpisujemy
const currentNumbers = document.querySelector(".currentNumber");
// liczba na ktorej wykonujemy dzialanie
const previousNumbers = document.querySelector(".previousNumber p");
// znak matematyczny
const signSpan = document.querySelector(".previousNumber span");
// wynik dzialania
const resultNumber = document.querySelector(".result");
// przyciski kalkulatora
const calculatorButtons = document.querySelectorAll("button");

let total = "";
let lastOperation;
let lastNumber;
//

function calculate(e) {
  let panelButton = e.target.dataset.option;

  if (panelButton === "." && currentNumbers.innerHTML === "") {
    currentNumbers.innerHTML = `0${currentNumbers.innerHTML}`;
  }

  if (currentNumbers.innerHTML.includes(".") && panelButton === ".") return;
  if (!e.target.classList.contains("operation")) {
    resultNumber.innerHTML = "";
    currentNumbers.innerHTML += panelButton;
  } else if (panelButton === "c") {
    clear();
  } else if (panelButton === "=") {
    result(
      currentNumbers.innerHTML,
      signSpan.innerHTML,
      previousNumbers.innerHTML
    );
  } else if (
    e.target.classList.contains("operation") &&
    currentNumbers.innerHTML !== ""
  ) {
    previousNumbers.innerHTML = currentNumbers.innerHTML;
    signSpan.innerHTML = "";
    signSpan.innerHTML = panelButton;

    currentNumbers.innerHTML = "";
  }
}

//  result function;

function result(firstNumber, operation, secondNumber) {
  if (firstNumber !== "" && secondNumber === "") return;
  if (firstNumber === "") {
    resultNumber.innerHTML = "";
  }

  if (total !== "" && lastOperation === "+") {
    total = total + lastNumber;
  } else if (total !== "" && lastOperation === "-") {
    total = total - lastNumber;
  } else if (total !== "" && lastOperation === "x") {
    total = total * lastNumber;
  } else if (total !== "" && lastOperation === ":") {
    total = total / lastNumber;
  } else if (total !== "" && lastOperation === "do potęgi") {
    total = total ** lastNumber;
  }

  let a = Number(firstNumber);
  let b = Number(secondNumber);

  switch (operation) {
    case "+":
      total = a + b;
      lastOperation = "+";
      lastNumber = a;
      break;
    case "-":
      total = a - b;
      lastOperation = "-";
      lastNumber = a;
      break;
    case "x":
      total = a * b;
      lastOperation = "x";
      lastNumber = a;
      break;
    case ":":
      total = a / b;
      lastOperation = ":";
      lastNumber = a;
      break;
    case "do potęgi":
      total = a ** b;
  }
  resultNumber.innerHTML = ` ${total}`;
  previousNumbers.innerHTML = "";
  currentNumbers.innerHTML = "";
  signSpan.innerHTML = "";
}

// Clearing eveerything function;

function clear() {
  currentNumbers.innerHTML = "";
  previousNumbers.innerHTML = "";
  signSpan.innerHTML = "";
  resultNumber.innerHTML = "";
  lastOperation = "";
  lastNumber = "";
}

// Nasluchiwanie na klikniecie przyciskow kalkulatora

calculatorButtons.forEach((button) =>
  button.addEventListener("click", calculate)
);
