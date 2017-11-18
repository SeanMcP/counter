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
let countByValue = Number(countBy.value);

updateStorage = () => {
  storageCheck(
    localStorage.count = Number(screenValue)
  );
  storageCheck(
    localStorage.increment = Number(countByValue)
  );
}
printOutput = () => {
  output.value = screenValue;
  storageCheck(
    output.value = localStorage.count
  );
  countBy.value = countByValue;
  storageCheck(
    countBy.value = localStorage.increment
  );
}
screenChange = () => {
  screenValue = Number(output.value);
  updateStorage();
}
countByChange = () => {
  countByValue = Number(countBy.value);
  updateStorage();
}

increment = action => {
  screenValue = Number(output.value);
  if (action === '+') {
    screenValue += 2 * countByValue;
    updateStorage();
  }
  screenValue -= countByValue;
  updateStorage();
  printOutput();
};

reset = () => {
  screenValue = 0;
  countByValue = 1;
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

// Quick count buttons
let countButtons = document.getElementsByClassName('countDefault');

for (let i = 0; i < countButtons.length; i++) {
  countButtons[i].addEventListener('click', () => {
    countByValue = Number(countButtons[i].innerHTML);
    countBy.value = countByValue;
    updateStorage();
  })
}
