// Calculator

const button = document.getElementById("button");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTerm = document.getElementById("loanTerm");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const amount = loanAmount.value;
  const rate = interestRate.value / 100 / 12;
  const term = loanTerm.value * 12;
  const monthlyPayment = (amount * rate) / (1 - Math.pow(1 / (1 + rate), term));
  result.innerHTML = monthlyPayment.toFixed(2) + "$";
});
