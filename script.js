//your JS code here. If required.
// Set the initial rotation angle
let angle = 0;

// Get the line element
const line = document.getElementById("line");

// Function to update the rotation
function rotateLine() {
  angle += 2; // Increase the angle by 2 degrees
  line.style.transform = `rotate(${angle}deg)`; // Apply the rotation

  // Continue to call this function every 20 milliseconds to create a smooth continuous rotation
  setTimeout(rotateLine, 20);
}

// Start the rotation when the page is loaded
rotateLine();
