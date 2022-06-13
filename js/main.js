// Slideshow
var sliderMain = document.getElementById("slider-main");
var imgFeatured = document.querySelector(".img-featured");
var images = [];
var photos = 4;
for (var i = 0; i < photos; i++) {
  images[i] = new Image();
  images[i].src = "../images/" + "backgroundslider" + i + ".jpg";
}
var index = 0;

function prev() {
  index--;
  if (index < 0) index = images.length - 1;
  var anh = document.getElementById("anh");
  anh.src = images[index].src;
}
function next() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var anh = document.getElementById("anh");
  anh.src = images[index].src;
}
setInterval(function () {
  next();
}, 3000);
// End Slideshow

// Back To Top
//Get the button
// var mybutton = document.getElementById("gotobtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// Back to top


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


