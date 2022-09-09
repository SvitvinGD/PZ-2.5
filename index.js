const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus"); // +
const hey = document.querySelector("#hey");
const zero = document.querySelector("#zero");
const comma = document.querySelector("#comma");
const equals = document.querySelector("#equals"); // =
const resultInput = document.querySelector("#result-input");

let calcArray = {
  formula: "",
  operation: false,
  result: "",
};

function link() {
  if (calcArray.result != "") {
    resultInput.value = calcArray.result;
  } else {
    resultInput.value = calcArray.formula;
  }
  console.log(calcArray);
}

// del and clear event

ac.addEventListener("click", () => {
  calcArray = {
    formula: "",
    operation: false,
    result: "",
  };
  link();
});

del.addEventListener("click", () => {
  calcArray.formula = calcArray.formula.slice(0, -1);
  link();
});

// number event


one.addEventListener("click", () => {
  calcArray.formula += 1;
  link();
});

two.addEventListener("click", () => {
  calcArray.formula += 2;
  link();
});

three.addEventListener("click", () => {
  calcArray.formula += 3;
  link();
});

four.addEventListener("click", () => {
  calcArray.formula += 4;
  link();
});

five.addEventListener("click", () => {
  calcArray.formula += 5;
  link();
});

six.addEventListener("click", () => {
  calcArray.formula += 6;
  link();
});

seven.addEventListener("click", () => {
  calcArray.formula += 7;
  link();
});

eight.addEventListener("click", () => {
  calcArray.formula += 8;
  link();
});

nine.addEventListener("click", () => {
  calcArray.formula += 9;
  link();
});

zero.addEventListener("click", () => {
  calcArray.formula += 0;
  link();
});

// operation event

plus.addEventListener("click", () => {
  if (calcArray.operation == true) {
    compute();
  } else {
	if (resultInput.value != "") {
      calcArray.formula += " + ";
      calcArray.operation = true;
    }
  }
  link();
});

minus.addEventListener("click", () => {
  if (calcArray.operation == true) {
    compute();
  } else {
    if (resultInput.value != "") {
      calcArray.formula += " - ";
      calcArray.operation = true;
    }
  }
  link();
});

multiply.addEventListener("click", () => {
  if (calcArray.operation == true) {
    compute();
  } else {
	if (resultInput.value != "") {
      calcArray.formula += " * ";
      calcArray.operation = true;
    }
  }
  link();
});

divide.addEventListener("click", () => {
  if (calcArray.operation == true) {
    compute();
  } else {
	if (resultInput.value != "") {
      calcArray.formula += " / ";
      calcArray.operation = true;
    }
  }
  link();
});

equals.addEventListener("click", () => {
  compute();
  link();
});

// percent and comma

percent.addEventListener("click", () => {
  calcArray.formula += "O";
  link();
});

comma.addEventListener("click", () => {
  calcArray.formula += ".";
  link();
});

function compute() {
  console.log("compute");
let computeArr = calcArray.formula.split(" ");

let result = 0;
let operation = computeArr[1];

let prev = Number.parseInt(computeArr[0]);
let next = Number.parseInt(computeArr[2]);

  switch (operation) {
    case "+":
      result = prev + next;
      break;
    case "-":
      result = prev - next;
      break;
    case "*":
      result = prev * next;
      break;
    case "/":
      if (next === 0) {
        result = "∞";
      } else {
        result = prev / next;
      }
      break;
  }

  calcArray.result = result;
}
