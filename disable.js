var toggleBtn = document.getElementById("toggleCss");
var body = document.querySelector("body");

// A variable to use a a state
var cssState = "white";

// On button click
toggleBtn.addEventListener("click", toggleCss);

// The function to execute
function toggleCss() {
  
  if (cssState == "white") {
    body.classList.add("pink");
    cssState = "pink";
  } else if (cssState == "pink") {
    body.classList.remove("pink");
    body.classList.add("yellow");
    cssState = "yellow";
  } else if (cssState == "yellow") {
    body.classList.remove("yellow");
    cssState = "white";
  };
};