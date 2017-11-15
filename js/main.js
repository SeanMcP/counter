let output = document.getElementById("screen");
let initial = document.getElementById("startVal");

let screenValue = 0;
output.textContent = screenValue;

increment = action => {
  if (action === '+') {
    screenValue += 2;
  }
  screenValue--;
  output.textContent = screenValue;
}

reset = () => {
  screenValue = 0;
  output.textContent = screenValue;
  initial.value = "";
}

startValButton.addEventListener('click', () => {
  let newStartVal = initial.value;
  if (newStartVal) {
    screenValue = newStartVal;
    output.textContent = screenValue;
    initial.value = "";
  }
});
