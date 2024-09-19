/*** For Add money  ****/
document.getElementById('add-money-btn').addEventListener('click', function (event) {
  event.preventDefault();
  // Elements selected
  const addInputAmount = document.getElementById('add-money-amount').value;
  const addInputPin = document.getElementById('add-money-pin').value;
  const mainBalance = document.getElementById('main-balance').innerText;
  const addMoneyForm = document.getElementById('add-money-form');

  // Condition
  if (addInputPin === '4321') {
    const newAmount = parseFloat(addInputAmount);
    const availableAmount = parseFloat(mainBalance);
    const totalAvailableAmount = newAmount + availableAmount;
    document.getElementById('main-balance').innerText = totalAvailableAmount;
    addMoneyForm.reset();
    
  }
  else{
    alert("Failed to Add Money! Please try again.");
  }

});