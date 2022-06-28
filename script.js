// login page event handler

const enterBtn = document.getElementById("enter");
enterBtn.addEventListener("click", function () {
  const loginPage = document.getElementById('login-page');
  loginPage.style.display = 'none';

  const transactionArea = document.getElementById('transaction');
  transactionArea.style.display = 'block';
})

// transaction page event handler

// function কিভাবে হইছে সেটা বুঝতে problem হইলে (junior-script.js) file দেখলেই হবে


function updateSpanText(id, addNum, outNum) {
  let current = document.getElementById(id).innerText;
  current = parseFloat(current);
  const total = current + addNum - outNum;
  document.getElementById(id).innerText = total;
}


function getInputAmount(id) {
  let amount = document.getElementById(id).value;
  amount = parseFloat(amount);
  return amount;
}


// deposit button event handler

const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function () {

  const depositAmount = getInputAmount('deposit-amount');

  updateSpanText('current-deposit', depositAmount, 0);
  updateSpanText('current-balance', depositAmount, 0);

  document.getElementById('deposit-amount').value = "";

})

// withdraw button event handler

const withdrawBtn = document.getElementById('out-money');
withdrawBtn.addEventListener('click', function () {

  const withdrawAmount = getInputAmount('withdraw-amount');

  updateSpanText('current-withdraw', withdrawAmount, 0);
  updateSpanText('current-balance', 0, withdrawAmount);

  document.getElementById('withdraw-amount').value = "";

})