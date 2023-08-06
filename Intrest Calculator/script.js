
function compute() {
    // Taking input values from the user.
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let years = parseInt(document.getElementById('years').value);
  
    // Calculating the  simple interest
    let interest = (principal * rate * years) / 100;
  
    // Displaying  the calculated interest as  per the inut value .
    document.getElementById('result').textContent = 'Interest: ' + interest.toFixed(2);
  }
  
  // Updating  the displayed rate value when the range input is changed
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rate').addEventListener('input', function() {
      document.getElementById('rate_val').textContent = this.value;
    });
  });
  