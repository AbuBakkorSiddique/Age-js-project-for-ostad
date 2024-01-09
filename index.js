function checkAge() {
    var age = document.getElementById('age').value;
  
    // Get the output elements
    var childOutput = document.querySelector('.output .child');
    var youngOutput = document.querySelector('.output .young');
    var oldOutput = document.querySelector('.output .old');
  
    // Hide all outputs initially
    childOutput.style.display = 'none';
    youngOutput.style.display = 'none';
    oldOutput.style.display = 'none';
  
    if (age >= 0 && age <= 17) {
      // Show child output
      childOutput.style.display = 'block';
    } else if (age >= 18 && age <= 35) {
      // Show young output
      youngOutput.style.display = 'block';
    } else if (age >= 36) {
      // Show old output
      oldOutput.style.display = 'block';
    } else  {
      // Handle invalid age
      alert("Please enter a valid age.");
    }
  }
  