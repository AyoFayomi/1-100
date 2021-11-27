const historyValue = document.querySelector(".history-value");
const outputValue = document.getElementById("output-value");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

function getHistory() {
  return historyValue.innerText;
}
printHistory = (num) => {
  historyValue.innerText = num;
};
getOutput = () => {
  return outputValue.innerText;
};
printOutput = (num) => {
  if (num === "") {
    outputValue.innerText = num;
  } else {
    outputValue.innerHTML = getFormattedNumber(num);
  }
};
getFormattedNumber = (num) => {
    if (num === "-"){
        return "";
    }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
};

reverseNumberFormat = (num) => {
  return Number(num.replace(/,/g, ""));
};

operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id === "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
       var output = getOutput();
       var history = getHistory();
       if (output == "" && history !== ''){
           if(isNaN(history[history.length - 1])){
               history = history.substr(0, history.length-1);
           }
       }
       if(output!="" || history!=""){
        output= output==""?output:reverseNumberFormat(output);
        history=history+output;
        if(this.id=="="){
            var result=eval(history);
            printOutput(result);
            printHistory("");
        }
          else{
              history = history+this.id;
              printHistory(history);
              printOutput("");
          }
      }
    }
  });
});
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output !== NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
});
