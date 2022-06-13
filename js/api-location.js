
// Location
let coords = {};
navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.coords);
},
function (error) {
  console.log(error);
});

function openMap(){
  location.href = "https://www.google.com/maps/@" + coords.latitude + "," + coords.longitude;
}
