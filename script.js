<<<<<<< Updated upstream
// Store objects in variables
var sideBar = document.getElementById("sideBar");
=======
//Store objects in variables
var sidebar = document.getElementById("sideBar");
>>>>>>> Stashed changes
var openBtn = document.getElementById("openBtn");

var header = document.getElementById("header");

<<<<<<< Updated upstream
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

/*+++++++++++++++++++++++++*/
// Animate scrolling with jQuery
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
var headerOffset  = 130;
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        console.log(target.selector);
        if ( target.selector == "#manifesto") {
          headerOffset = 300;
        }else{
          headerOffset = 130;
        };
        $('html, body').animate({
          scrollTop: target.offset().top - headerOffset
        }, 1000);
        return false;
      }
    }
  });
});
=======

//Add even listener
openBtn.addEventListener("click", openSidebar);

//Function to react to the event listener
function openSidebar() {
  //Toggle the class name on the element
  sidebar.classList.toggle("open");
  openBtn.classList.toggle("open");
}

//Attach the listener to the window
window.onscroll = function(e) {
  
  //Get the pageYOffset
  var pageOffset = window.pageYOffset;
  
  //If the offset is more than 200
  if( pageOffset < 200 ) {
    
    //Add the class name
    header.classList.add("collapsed");
    
  //If the offset is less tha 200  
  } else {
    console.log("BACK TO TOP");
    
    header.classList.remove("collapsed");
  }
}
>>>>>>> Stashed changes
