// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value; // Append the value (number/operator) to the display
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById("display").value = ""; // Reset the display to an empty string
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value); // Use eval to evaluate the expression entered
    } catch (error) {
      display.value = "Error"; // In case of invalid expression, show error
    }
  }