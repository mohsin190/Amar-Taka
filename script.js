// login button event handler

const enterBtn = document.getElementById("enter");
enterBtn.addEventListener("click", function () {
    const loginPage = document.getElementById('login-page');
    loginPage.style.display = 'none';

    const transactionArea = document.getElementById('transaction');
    transactionArea.style.display ='block';
})


// way 2 এর জন্য calculation

function updateSpanText(id, addNum, outNum){
  let current = document.getElementById(id).innerText;
  current = parseFloat(current);
  const total = current + addNum - outNum;
  document.getElementById(id).innerText = total;
}


// deposit button event handler

const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function () {
  
  let depositAmount = document.getElementById('deposit-amount').value;
  depositAmount = parseFloat(depositAmount);

  //way 1

  /* let currentDeposit = document.getElementById('current-deposit').innerText;
  currentDeposit = parseFloat(currentDeposit);
  const totalDeposit = currentDeposit + depositAmount;
  document.getElementById('current-deposit').innerText = totalDeposit;

  let currentBalance = document.getElementById('current-balance').innerText;
  currentBalance = parseFloat(currentBalance);
  const totalBalance = currentBalance + depositAmount;
  document.getElementById('current-balance').innerText = totalBalance; */

  //way 2

  updateSpanText('current-deposit', depositAmount, 0);
  updateSpanText('current-balance', depositAmount, 0);

  document.getElementById('deposit-amount').value = "";

})

// withdraw button event handler

const withdrawBtn = document.getElementById('out-money');
withdrawBtn.addEventListener('click', function () {
  
  let withdrawAmount = document.getElementById('withdraw-amount').value;
  withdrawAmount = parseFloat(withdrawAmount);

  /* let currentwithdraw = document.getElementById('current-withdraw').innerText;
  currentwithdraw = parseFloat(currentwithdraw);
  const totalwithdraw = currentwithdraw + withdrawAmount;
  document.getElementById('current-withdraw').innerText = totalwithdraw; */

  /* let currentBalance = document.getElementById('current-balance').innerText;
  currentBalance = parseFloat(currentBalance);
  const totalBalance = currentBalance - withdrawAmount;
  document.getElementById('current-balance').innerText = totalBalance; */

   //way 2 

   updateSpanText('current-withdraw', withdrawAmount, 0);
   updateSpanText('current-balance', 0 , withdrawAmount)

  document.getElementById('withdraw-amount').value = "";

})