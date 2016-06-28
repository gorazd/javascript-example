// Store objects in variables
var sideBar = document.getElementById("sideBar");
var openBtn = document.getElementById("openBtn");

var header = document.getElementById("header");

// Add the event listener
openBtn.addEventListener("click", openSidebar);

// Function to react to the event listener
function openSidebar() {
  // Toggle the class name on the element
  sideBar.classList.toggle("open");
  openBtn.classList.toggle("open");
}

// Attach a listener to the window
window.onscroll = function(e) {
  
  // Get the pageYOffset
  var pageOffset = window.pageYOffset;

  // If the offset is more than 200
  if ( pageOffset > 200 ) {
    // Add the class name
    header.classList.add("collapsed");
  // If the offset is less than 200 
  } else {
    // Remove the class name
    header.classList.remove("collapsed");   
  };
  
};