const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');



buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate
function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
     // check if something is filled out
    if (display.value !== '') {
      // calculate + show result
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear
    display.value = '';
  } else {
    // display
    display.value += clickedButtonValue;
  }
}
