var map = L.map("map", {
  minZoom: 1,
  maxZoom: 4,
  center: [0, 0],
  zoom: 1,
  maxBoundsViscosity: 1,
  crs: L.CRS.Simple,
});

map.zoomControl.setPosition("topright");

L.easyButton(
  "<i class='fa fa-chevron-left'></i>",
  function () {
    window.location.href = "index.php";
  },
  "Go back to main campus"
).addTo(map);

L.easyButton(
  "<i class='fa fa-dot-circle-o'></i>",
  function () {
    map.fitBounds(imageBounds);
  },
  "Go back to center"
).addTo(map);

L.easyButton("<strong>4</strong>", function () {}).addTo(map);
L.easyButton("<strong>3</strong>", function () {}).addTo(map);
L.easyButton("<strong>2</strong>", function () {}).addTo(map);
L.easyButton("<strong>1</strong>", function () {}).addTo(map);

var imageUrl = "assets/img/floor-plan.svg",
  imageBounds = [
    [0, 0],
    [250, 250],
  ];
image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
map.fitBounds(imageBounds);

// function loadImage(e) {
//   // remove image layer if it already exists
//   if (map.hasLayer(image)) {
//     map.removeLayer(image);
//   } else {
//     image.addTo(map);
//   }
// }
