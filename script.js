// Store objects in variables
var sideBar = document.getElementById("sideBar");
var openBtn = document.getElementById("openBtn");

var header = document.getElementById("header");

var goToTop = document.getElementById("goToTop");


var openPopup = document.getElementById("openPopup");
var popUp = document.getElementById("popUp");
var overlay = document.getElementById("overlay");
var closePopup = document.getElementById("closePopup");



// Add the event listener
openBtn.addEventListener("click", openSidebar);
openPopup.addEventListener("click", openPopupOverlay);
overlay.addEventListener("click", closePopupOverlay);
closePopup.addEventListener("click", closePopupOverlay);

// Function to react to the event listener
function openSidebar() {
  // Toggle the class name on the element
  sideBar.classList.toggle("open");
  openBtn.classList.toggle("open");
}

// Function to show the overlay and popup
function openPopupOverlay() {
  popUp.classList.add("showPopup");
  overlay.classList.add("showOverlay");
}
function closePopupOverlay() {
  popUp.classList.remove("showPopup");
  overlay.classList.remove("showOverlay");
}

// Attach a listener to the window
window.onscroll = function(e) {
  
  // Get the pageYOffset
  var pageOffset = window.pageYOffset;
  
  // Get the page total height
  var pageTotalHeight = document.body.clientHeight;
  var pageTotalWidth = document.body.clientWidth;
  
  // Page height minus the browser height
  var totalHeightMinusBrowser = document.body.clientHeight  -window.innerHeight;
  
  var heightDifference = 20;
  
  // Check for Browser Width
  if ( pageTotalWidth < 500 ) {
    heightDifference = 20;
  } else {
    heightDifference = -280;
  }
  
  // Deduct the difference
  totalHeightMinusBrowser -= heightDifference;
  
  // If the offset is more than 200
  if ( pageOffset > 200 ) {
    // Add the class name
    header.classList.add("collapsed");
  // If the offset is less than 200 
  } else {
    // Remove the class name
    header.classList.remove("collapsed");   
  };
  
  // Bottom of the page
  if ( pageOffset > totalHeightMinusBrowser ) {
    goToTop.classList.add("active");
  } else {
    goToTop.classList.remove("active");
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