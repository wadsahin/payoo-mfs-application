/*** For Cash Out ****/
document.getElementById('cash-out-btn').addEventListener('click', function(event){
  event.preventDefault();
  // Elements selected
  const cashInputAmount = document.getElementById('cash-out-amount').value;
  const cashInputPin = document.getElementById('cash-out-pin').value;
  const mainBalance = document.getElementById('main-balance').innerText;
  const cashOutForm = document.getElementById('cash-out-form');

  if(cashInputPin === '4321'){
    const cashOutAmount = parseFloat(cashInputAmount);
    const mainAmount = parseFloat(mainBalance);
    const afterCashOutAmount = mainAmount - cashOutAmount;
    document.getElementById('main-balance').innerText = afterCashOutAmount;
    cashOutForm.reset();
  }
  else{
    alert('Failed to Cash Out! Please try again.')
  }

});
