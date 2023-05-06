function backspace(theString) {
  return theString.substring(0, theString.length - 1);
}

var numbers = document.querySelectorAll(".number");
var historyValue = document.querySelector("#historyValue");
var result = document.querySelector("#outputValue");
var dot = document.querySelector(".dot");
var equalTo = document.querySelector(".equalTo");
var backSpace = document.querySelector("#spacing");
numbers.forEach((number) => {
  number.addEventListener('click', (p) => {
    var theString = result.textContent;
    var shouldHistory = false;
    if (result.textContent.includes('+') || result.textContent.includes('-') || result.textContent.includes('*')) {
      var countPlus = result.textContent.split("+").length - 1;
      var countMinus = result.textContent.split("-").length - 1;
      var countMultiply = result.textContent.split("*").length - 1;
      var countDivide = result.textContent.split("/").length - 1;
      countPlus++;
      countMinus++;
      countMultiply++;
      countDivide++;
      if (countPlus > 1 && number.id == '+'
        || countMinus > 1 && number.id == '-'
        || countMultiply > 1 && number.id == '*'
        || countDivide > 1 && number.id == '/') {
        console.log(1);
        historyValue.textContent += result.textContent + ' ';
        console.log(2);
        result.textContent = eval(result.textContent);
        result.textContent += number.id;
        console.log(3);
        shouldHistory = true;
        console.log(4);
        console.log('win ' + countPlus);
        console.log(7);
        // move to history
      } else if (countPlus == 1) {
        // 
        console.log('Garri ' + countPlus);
        result.textContent += number.id;
      } else {
        // 
        console.log('Loose ' + countPlus);
        result.textContent += number.id;
      }
    } else {
      console.log('Tiger');
      result.textContent += number.id;
    }
    // var initialHistory = '';
    // result.textContent += number.id;

    if (result.textContent.includes('+') || result.textContent.includes('-') || result.textContent.includes('*')) {
      if (number.id != "+" && number.id != "-" && number.id != "*" && number.id != "/" && shouldHistory) {
        historyValue.textContent += result.textContent;
        // result.textContent = eval(result.textContent);  
      }
    }

  });
});

equalTo.addEventListener('click', (p) => {
  // alert(result.textContent);
  historyValue.textContent = result.textContent;
  result.textContent = eval(result.textContent);
});

backSpace.addEventListener('click', (p) => {
  result.textContent = backspace(result.textContent);
});
dot.addEventListener('click', (p) => {
  var theString = result.textContent;
  count = theString.split(".").length - 1;
  if (count < 1) {
    result.textContent += dot.id;
  }
});

const calculator = document.querySelector("#calculator");
const support = document.querySelector("#support")
support.addEventListener('click', (p) => {
  calculator.classList.toggle("active");
  calculator.textContent =
  " <h1> Calculator Support </h1> <p> If you are seeing this, you are seeing Calculator support. </p>";
});