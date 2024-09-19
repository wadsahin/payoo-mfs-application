document.getElementById('login-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const inputNumber = document.getElementById('user-number').value;
  const inputPin = document.getElementById('user-pin').value;
  
  if(inputNumber === '01701481767' && inputPin === '4321'){
    document.location.href = "/dashboard.html";
  }
  else{
    alert('Number or PIN is Wrong!')
  }


});