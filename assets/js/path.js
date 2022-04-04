function getGeojsonPath() {
  var start = document.getElementById("startingArea").value;
  var finish = document.getElementById("destinationArea").value;

  //be
  if (start == "BE Building" && finish == "BE Building") {
    building_path.clearLayers();
  }
  if (
    (start == "BE Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />128.24 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 22 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 41 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />23.65 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 15 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 8 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />98.78 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 3 second</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 32 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />90.29 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 58 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 29 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />91.98 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 59 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 29 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />114.84 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 13 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 37 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />56.10 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 36 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 18 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />104.46 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 7 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 33 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />108.53 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 9 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />1 minutes & 10 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />67.18 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 43 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 21 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "BE Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />62.95 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 40 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 20 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //chs
  if (start == "CHS Building" && finish == "CHS Building") {
    building_path.clearLayers();
  }
  if (
    (start == "CHS Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />109.12 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 10 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 35 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />79.8 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 51 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 26 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />71.37 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 46 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 23 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />72.90 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 47 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 23 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />95.85 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 1 second</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 31 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />37.18 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 24 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 12 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />85.83 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 55 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 27 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />89.45 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 57 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 29 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />80.26 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 51 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 26 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CHS Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />44.03 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 28 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 14 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //cma
  if (start == "CMA Building" && finish == "CMA Building") {
    building_path.clearLayers();
  }
  if (
    (start == "CMA Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "CMA Building")
  ) {
    $.getJSON("data/pathData/cma/cma-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />1.45 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 1 second</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 1 second</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "CMA Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "CMA Building")
  ) {
    $.getJSON("data/pathData/cma/cma-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />21.75 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 14 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 7 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //eb
  if (start == "Engineering Building" && finish == "Engineering Building") {
    building_path.clearLayers();
  }
  if (
    (start == "Engineering Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />155.08 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 39 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 50 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Engineering Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />145.93 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 33 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 47 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Engineering Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />37.22 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 24 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 12 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Engineering Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />80.04 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 51 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 26 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Engineering Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />125.21 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 20 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 40 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //fa
  if (start == "Forest Area" && finish == "Forest Area") {
    building_path.clearLayers();
  }
  if (
    (start == "Forest Area" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />34.59 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 22 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 11 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Forest Area" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />16.89 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 11 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 5 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Forest Area" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />47.46 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 30 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 15 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Forest Area" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />80.59 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 52 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 26 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Forest Area" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />5.54 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 4 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 2 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Forest Area" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />6.72 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 4 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 2 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Forest Area" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />60.12 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 38 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 19 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //fc
  if (start == "Faculty Center" && finish == "Faculty Center") {
    building_path.clearLayers();
  }
  if (
    (start == "Faculty Center" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />190.12 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />2 minutes & 2 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />1 minute & 1 second</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Faculty Center" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />181.32 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 56 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 58 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Faculty Center" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />113.21 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 12 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 36 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Faculty Center" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />163.47 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 44 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 52 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //administration
  if (
    start == "Administration Building" &&
    finish == "Administration Building"
  ) {
    building_path.clearLayers();
  }
  if (
    (start == "Administration Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />85.64 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 55 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 27 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "BE Building") ||
    (start == "BE Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />23.81 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 15 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 8 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />45.94 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 29 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 15 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />22.13 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 14 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 7 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />91.1 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 58 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 29 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />60.43 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 39 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 19 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />124.13 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 19 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 40 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />65.92 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 42 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 21 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />92.98 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 59 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 30 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />65.69 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 42 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 21 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />22.51 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 14 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 7 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Administration Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />36.31 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 24 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 12 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //gym
  if (start == "UPang Gymnasium" && finish == "UPang Gymnasium") {
    building_path.clearLayers();
  }
  if (
    (start == "UPang Gymnasium" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />129.10 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 23 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 41 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />99.74 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 4 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 32 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />41.13 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 26 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 13 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />92.98 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 59 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 30 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />65.53 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 42 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 21 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />54.49 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 35 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 17 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "NH Building") ||
    (start == "NH Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />109.54 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 10 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 35 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Store Area") ||
    (start == "Store Area" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />100.43 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 4 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 32 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />26.13 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 16 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 8 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //its
  if (start == "ITS Building" && finish == "ITS Building") {
    building_path.clearLayers();
  }
  if (
    (start == "ITS Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />123.25 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 19 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 39 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "BE Building") ||
    (start == "BE Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />67.78 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 43 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 22 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />82.99 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 53 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 27 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />59.58 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 38 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 19 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />136.91 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 28 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 44 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />86.34 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 55 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 28 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />169.88 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 49 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 54 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "Administration Building") ||
    (start == "Administration Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-fvr-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />43.87 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 28 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 14 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />115.79 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 14 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 37 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />149.56 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 36 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 48 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />103.11 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 6 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 33 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />14.76 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 9 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 5 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "ITS Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />84.73 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 54 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 27 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //MBA
  if (start == "MBA Building" && finish == "MBA Building") {
    building_path.clearLayers();
  }
  if (
    (start == "MBA Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />90.91 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 58 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 29 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "MBA Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />82.63 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 53 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 26 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "MBA Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />18.65 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 12 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 6 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "MBA Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />51.60 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 33 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 16 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "MBA Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />14.42 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 9 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 5 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "MBA Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />127.19 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 29 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 41 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //NH
  if (start == "NH Building" && finish == "NH Building") {
    building_path.clearLayers();
  }
  if (
    (start == "NH Building" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "NH Building")
  ) {
    $.getJSON("data/pathData/nh/nh-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />23.12 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 15 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 7 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "NH Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "NH Building")
  ) {
    $.getJSON("data/pathData/nh/nh-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />14.74 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 9 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 5 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "NH Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "NH Building")
  ) {
    $.getJSON("data/pathData/nh/nh-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />76.79 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 49 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 25 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //ptc
  if (start == "PTC Building" && finish == "PTC Building") {
    building_path.clearLayers();
  }
  if (
    (start == "PTC Building" && finish == "AB Building") ||
    (start == "AB Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />136.36 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 27 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 44 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "BE Building") ||
    (start == "BE Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />81.68 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 52 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 26 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />97.07 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 2 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 31 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />72.02 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 46 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 23 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />164.11 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 45 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 52 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />98.59 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 3 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 32 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />188.75 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />2 minutes & 1 second</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />1 minute & 0 second</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "Administration Building") ||
    (start == "Administration Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-fvr-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />56.38 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 36 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 18 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />129.77 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 23 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 41 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "ITS Building") ||
    (start == "ITS Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-itc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />19.00 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 12 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 6 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />163.89 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 45 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 52 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />115.49 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 14 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 37 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />16.45 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 11 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 5 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "PTC Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />86.17 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 55 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 28 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //Sa
  if (start == "Store Area" && finish == "Store Area") {
    building_path.clearLayers();
  }
  if (
    (start == "Store Area" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "Store Area")
  ) {
    $.getJSON("data/pathData/sa/sa-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />97.09 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />1 minute & 2 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 31 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }

  //Sp
  if (start == "Student Plaza" && finish == "Student Plaza") {
    building_path.clearLayers();
  }
  if (
    (start == "Student Plaza" && finish == "Automotive Building") ||
    (start == "Automotive Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />76.05 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 49 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 24 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />46.60 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 30 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 15 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />38.91 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 25 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 12 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />4.02 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 3 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 1 second</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />72.08 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 46 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 23 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />5.58 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 4 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 2 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />56.43 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 36 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 18 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (
    (start == "Student Plaza" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div style='width: 15rem'>" +
              "<p class='banner-left'><strong>Distance: </strong><br />47.30 meters</p>" +
              "<p class='banner-left'><strong>Ave. Walking Time: </strong><br />0 minute & 30 seconds</p>" +
              "<p class='banner-left'><strong>Ave. Running Time: </strong><br />0 minute & 15 seconds</p>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
}
