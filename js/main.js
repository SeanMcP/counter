let screen = document.getElementById("screen");
let startVal = document.getElementById("startVal");

console.log(startVal.value);

let screenValue = 0;
screen.innerHTML = screenValue;

plusOne.addEventListener('click', function(){
  screenValue++;
  screen.innerHTML = screenValue;
});

minusOne.addEventListener('click', function(){
  screenValue--;
  screen.innerHTML = screenValue;
})

resetVal.addEventListener('click', function(){
  screenValue = 0;
  screen.innerHTML = screenValue;
  startVal.value = "";
})

startValButton.addEventListener('click', function(){
  let newStartVal = startVal.value;
  if (newStartVal) {
    screenValue = newStartVal;
    startVal.value = "";
    screen.innerHTML = screenValue;
  }
});
