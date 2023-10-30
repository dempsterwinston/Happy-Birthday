// Get references to the button and the element to toggle
const toggleButton = document.getElementById("toggleButton");
const elementToToggle = document.getElementById("elementToToggle");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
  // Toggle the "hidden" class to show/hide the element
  elementToToggle.classList.toggle("hidden");
});
