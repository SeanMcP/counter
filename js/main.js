let output = document.getElementById("screen");
let initial = document.getElementById("startVal");

let screenValue = 0;
output.innerHTML = screenValue;

increment = action => {
  if (action === 'plus') {
    screenValue += 2;
  }
  screenValue--;
  output.textContent = screenValue;
}

plusOne.addEventListener('click', function(){
  screenValue++;
  output.innerHTML = screenValue;
});

minusOne.addEventListener('click', function(){
  screenValue--;
  output.innerHTML = screenValue;
})

resetVal.addEventListener('click', function(){
  screenValue = 0;
  output.innerHTML = screenValue;
  initial.value = "";
})

startValButton.addEventListener('click', function(){
  let newStartVal = initial.value;
  if (newStartVal) {
    screenValue = newStartVal;
    initial.value = "";
    output.innerHTML = screenValue;
  }
});
