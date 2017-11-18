let output = document.getElementById('screen');
let initial = document.getElementById('startVal');
let countBy = document.getElementById('countByField');

// Checks for for localStorage before initializing output screen value
if (typeof(Storage) !== 'undefined') {
  if (!localStorage.count) {
    // If there is no count in storage, initialize to zero
    localStorage.count = 0;
  }
  output.value = localStorage.count;
  if (!localStorage.increment) {
    localStorage.increment = 1;
  }
  countBy.value = localStorage.increment;
} else {
  // If storage is not available, initialize output to zero on load
  output.value = 0;
  countBy.vaule = 1;
}

// Checks for storage before implementing action
storageCheck = action => {
  if (typeof(Storage) !== 'undefined') {
    action;
  }
}

// Number() required to convert string to number
let screenValue = Number(output.value);

updateStorage = () => {
  storageCheck(
    localStorage.count = Number(screenValue)
  );
}
printOutput = () => {
  output.value = screenValue;
  storageCheck(
    output.value = localStorage.count
  );
}
screenChange = () => {
  screenValue = Number(output.value);
  updateStorage();
}

increment = action => {
  screenValue = Number(output.value);
  if (action === '+') {
    screenValue += 2;
    updateStorage();
  }
  screenValue--;
  updateStorage();
  printOutput();
};

reset = () => {
  screenValue = 0;
  updateStorage();
  printOutput();
  initial.value = null;
}

startAt = () => {
  let newStartVal = Number(initial.value);
  if (newStartVal) {
    screenValue = newStartVal;
    updateStorage();
    printOutput();
    initial.value = null;
  }
};
