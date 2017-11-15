let output = document.getElementById('screen');
let initial = document.getElementById('startVal');

// Use Number() to convert numbered strings to numbers

let screenValue = Number(output.value);

increment = action => {
  screenValue = Number(output.value);
  if (action === '+') {
    screenValue += 2;
  }
  screenValue--;
  output.value = screenValue;
}

reset = () => {
  screenValue = 0;
  output.value = screenValue;
  initial.value = null;
}

startAt = () => {
  let newStartVal = Number(initial.value);
  if (newStartVal) {
    screenValue = newStartVal;
    output.value = screenValue;
    initial.value = null;
  }
};
