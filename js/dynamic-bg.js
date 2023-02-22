var body = document.querySelector("body");
var container = document.querySelector(".bg-plane");
console.log(container.style.backgroundPositionX);

body.addEventListener("mousemove", function (e) {
   var width = container.offsetWidth;
   var height = container.offsetHeight;
  // var bgsizeX = container.style.backgroundSizeX;
  // var bgsizeY = container.style.backgroundSizeY;
  container.style.left = -(e.pageX-width/2) * 0.02 + "px";
  container.style.top = -(e.pageY-height/2) * 0.02 + "px";
});

//reset the background positions back to the original on mouseleave

// container.addEventListener("mouseleave", function () {
//   container.style.backgroundPosition = "0px 0px";
// });