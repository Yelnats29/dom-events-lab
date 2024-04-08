// The way this excerise is set up confuses me. I chose to take another route and use more funtions to make things easier. ChatGPT and YouTube helped with how to apply the functions.

document.addEventListener("DOMContentLoaded", function() {
    // Define the function to append to display
    function appendToDisplay() {
      // Get the value of the button that was clicked
      let buttonValue = this.textContent;
      // Append the button value to the display
      let display = document.querySelector('.display');
      display.textContent += buttonValue;
    }
  
    // Define the function to calculate
    function calculate() {
      // Get the content of the display
      let display = document.querySelector('.display');
      // Evaluate the expression and update the display
      display.textContent = eval(display.textContent); //using eval has solved my problem with the '=' button
    }
  
    // Define the function to clear display
    function clearDisplay() {
      // Clear the display
      let display = document.querySelector('.display');
      display.textContent = '';
    }
  
    // Select all elements with the class name "button"
    let buttons = document.querySelectorAll(".button");
  
    // Here is where the functions are put into use and the math works!
    buttons.forEach(function(button) {
      let buttonValue = button.textContent;
      if (!isNaN(parseInt(buttonValue)) || ['+', '-', '*', '/'].includes(buttonValue)) {
        button.addEventListener("click", appendToDisplay);
      } else if (buttonValue === '=') {
        button.addEventListener("click", calculate);
      } else if (buttonValue === 'C') {
        button.addEventListener("click", clearDisplay);
      }
    });
  });
  
