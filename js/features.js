// Show cash-out form & hide add-money form
document.getElementById('btn-cash-out').addEventListener('click', function(){
  const addMoneyForm = document.getElementById('form-add-money');
  const cashOutForm = document.getElementById('form-cash-out');
  // show cash-out form
  cashOutForm.classList.remove('hidden');
  // hide add-money form
  addMoneyForm.classList.add('hidden');
});

// Show add-money form & hide cash-out form
document.getElementById('btn-add-money').addEventListener('click', function(){
  const addMoneyForm = document.getElementById('form-add-money');
  const cashOutForm = document.getElementById('form-cash-out');
  // show add-money form
  addMoneyForm.classList.remove('hidden');
  // hide cash-out form
  cashOutForm.classList.add('hidden');
});


