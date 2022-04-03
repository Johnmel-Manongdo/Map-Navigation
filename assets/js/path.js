function getGeojsonPath() {
  var start = document.getElementById("startingArea").value;
  var finish = document.getElementById("destinationArea").value;

  //be
  if (start == "BE Building" && finish == "BE Building") {
    building_path.clearLayers();
  }
  if (start == "BE Building" && finish == "Automotive Building") {
    $.getJSON("data/pathData/be/be-ab-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path
          .addTo(map)
          .bindPopup(
            "<div class='card' style='width: 18rem;'>" +
              "<div class='card-body'>" +
              "<h5 class='card-title'>Special title treatment</h5>" +
              "<p class='card-text'>" +
              "With supporting text below as a natural lead-in to additional content." +
              "</p>" +
              "<a href='#' class='btn btn-primary'>" +
              "Go somewhere" +
              "</a>" +
              "</div>" +
              "</div>"
          );
        removePathBtn();
      }
      building_path.addData(data);
      building_path.openPopup();
    });
  }
  if (start == "Automotive Building" && finish == "BE Building") {
    $.getJSON("data/pathData/be/ab-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) {
        building_path.clearLayers();
      } else {
        building_path.addTo(map).bindPopup("test2");
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "Engineering Building") ||
    (start == "Engineerin Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "BE Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "BE Building")
  ) {
    $.getJSON("data/pathData/be/be-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CHS Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "CHS Building")
  ) {
    $.getJSON("data/pathData/chs/chs-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "CMA Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "CMA Building")
  ) {
    $.getJSON("data/pathData/cma/cma-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Engineering Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Engineering Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Engineering Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Engineering Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Engineering Building")
  ) {
    $.getJSON("data/pathData/eb/eb-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Forest Area" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Forest Area" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Forest Area" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Forest Area" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Forest Area" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Forest Area" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Forest Area")
  ) {
    $.getJSON("data/pathData/fa/fa-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Faculty Center" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Faculty Center" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Faculty Center" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Faculty Center")
  ) {
    $.getJSON("data/pathData/fc/fc-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "BE Building") ||
    (start == "BE Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Administration Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "Administration Building")
  ) {
    $.getJSON("data/pathData/fvr/fvr-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "NH Building") ||
    (start == "NH Building" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Store Area") ||
    (start == "Store Area" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "UPang Gymnasium" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "UPang Gymnasium")
  ) {
    $.getJSON("data/pathData/gym/gym-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "BE Building") ||
    (start == "BE Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "Administration Building") ||
    (start == "Administration Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-fvr-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "ITS Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "ITS Building")
  ) {
    $.getJSON("data/pathData/itc/itc-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "MBA Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "MBA Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "MBA Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "MBA Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "MBA Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "MBA Building")
  ) {
    $.getJSON("data/pathData/mba/mba-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "NH Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "NH Building")
  ) {
    $.getJSON("data/pathData/nh/nh-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "NH Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "NH Building")
  ) {
    $.getJSON("data/pathData/nh/nh-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "BE Building") ||
    (start == "BE Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-be-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "CHS Building") ||
    (start == "CHS Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-chs-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "Administration Building") ||
    (start == "Administration Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-fvr-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "UPang Gymnasium") ||
    (start == "UPang Gymnasium" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-gym-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "ITS Building") ||
    (start == "ITS Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-itc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "NH Building") ||
    (start == "NH Building" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "Store Area") ||
    (start == "Store Area" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "PTC Building" && finish == "Student Plaza") ||
    (start == "Student Plaza" && finish == "PTC Building")
  ) {
    $.getJSON("data/pathData/ptc/ptc-sp-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
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
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "CMA Building") ||
    (start == "CMA Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-cma-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "Engineering Building") ||
    (start == "Engineering Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-eb-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "Forest Area") ||
    (start == "Forest Area" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-fa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "Faculty Center") ||
    (start == "Faculty Center" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-fc-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "MBA Building") ||
    (start == "MBA Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-mba-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "NH Building") ||
    (start == "NH Building" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-nh-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
  if (
    (start == "Student Plaza" && finish == "Store Area") ||
    (start == "Store Area" && finish == "Student Plaza")
  ) {
    $.getJSON("data/pathData/sp/sp-sa-path.geojson", function (data) {
      if (map.hasLayer(building_path)) building_path.clearLayers();
      else {
        building_path.addTo(map);
        removePathBtn();
      }
      building_path.addData(data);
    });
  }
}

function getAverageWalkingTime() {}

function getAverageRunningTime() {}
