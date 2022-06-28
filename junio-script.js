                                   // login page event handler

const enterBtn = document.getElementById("enter");
enterBtn.addEventListener("click", function () {
    const loginPage = document.getElementById('login-page');
    loginPage.style.display = 'none';

    const transactionArea = document.getElementById('transaction');
    transactionArea.style.display ='block';
})

                                 // transaction page event handler
                               
// way 2 এর জন্য calculation

function updateSpanText(id, addNum, outNum){
  let current = document.getElementById(id).innerText;
  current = parseFloat(current);
  const total = current + addNum - outNum;
  document.getElementById(id).innerText = total;
}

// option 2 এর জন্য 

function getInputAmount(id) {
  let amount = document.getElementById(id).value;
  amount = parseFloat(amount);
  return amount;
}


// deposit button event handler

const depositBtn = document.getElementById('add-deposit');
depositBtn.addEventListener('click', function () {

  // option 1

  /* let depositAmount = document.getElementById('deposit-amount').value;
  depositAmount = parseFloat(depositAmount); */

  //option 2

  const depositAmount = getInputAmount('deposit-amount')

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
  
  // option 1
  
  /* let withdrawAmount = document.getElementById('withdraw-amount').value;
  withdrawAmount = parseFloat(withdrawAmount);  */

  //option 2

  const withdrawAmount = getInputAmount('withdraw-amount');
  
  // way 1

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