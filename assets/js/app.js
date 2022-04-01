// poi search list
var map,
  featureList,
  buildingSearch = [],
  foodSearch = [],
  parkingSearch = [],
  gateSearch = [];

$(window).resize(function () {
  sizeLayerControl();
});

// side bar mouse click highlight
$(document).on("click", ".feature-row", function (e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

// side bar mouse hover highlight on
if (!("ontouchstart" in window)) {
  $(document).on("mouseover", ".feature-row", function (e) {
    highlight
      .clearLayers()
      .addLayer(
        L.circleMarker(
          [$(this).attr("lat"), $(this).attr("lng")],
          highlightStyle
        )
      );
  });
}

// side bar mouse hover highlight off
$(document).on("mouseout", ".feature-row", clearHighlight);

// navigate btn show modal
$("#navigate-btn").click(function () {
  $("#navigateModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

// about btn show modal
$("#about-btn").click(function () {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

// legend btn show modal
$("#legend-btn").click(function () {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

// events btn show modal
$("#events-btn").click(function () {
  $("#eventsModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

// problem btn show modal
$("#problem-btn").click(function () {
  $("#problemModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

function clearReportTextArea() {
  document.getElementById("reportTextArea").value = "";
}

// feedback btn show modal
$("#feedback-btn").click(function () {
  $("#feedbackModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

//view event click map
$("#goToEventVenueID").click(function () {
  map.setView(
    [
      layer.feature.geometry.coordinates[1],
      layer.feature.geometry.coordinates[0],
    ],
    25
  );
});

$("#list-btn").click(function () {
  animateSidebar();
  return false;
});

$("#nav-btn").click(function () {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function () {
  animateSidebar();
  return false;
});

$("#sidebar-hide-btn").click(function () {
  animateSidebar();
  return false;
});

function animateSidebar() {
  $("#sidebar").animate(
    {
      width: "toggle",
    },
    350,
    function () {
      map.invalidateSize();
    }
  );
}

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  highlight.clearLayers();
}

function sidebarClick(id) {
  var layer = markerClusters.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 20);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
    map.invalidateSize();
  }
}

function syncSidebar() {
  /* Empty sidebar features */
  $("#feature-list tbody").empty();
  /* Loop through buildings layer and add only features which are in the map bounds */
  buildings.eachLayer(function (layer) {
    if (map.hasLayer(buildingLayer)) {
      $("#feature-list tbody").append(
        '<tr class="feature-row" id="' +
          L.stamp(layer) +
          '" lat="' +
          layer.getLatLng().lat +
          '" lng="' +
          layer.getLatLng().lng +
          '"><td style="vertical-align: middle;"><img width="18" height="18" src="assets/img/campus.png"></td><td class="feature-name">' +
          layer.feature.properties.NAME +
          '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>'
      );
    }
  });
  /* Loop through parkings layer and add only features which are in the map bounds */
  parkings.eachLayer(function (layer) {
    if (map.hasLayer(parkingLayer)) {
      $("#feature-list tbody").append(
        '<tr class="feature-row" id="' +
          L.stamp(layer) +
          '" lat="' +
          layer.getLatLng().lat +
          '" lng="' +
          layer.getLatLng().lng +
          '"><td style="vertical-align: middle;"><img width="18" height="18" src="assets/img/parking-area.png"></td><td class="feature-name">' +
          layer.feature.properties.NAME +
          '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>'
      );
    }
  });
  /* Loop through foods layer and add only features which are in the map bounds */
  foods.eachLayer(function (layer) {
    if (map.hasLayer(foodLayer)) {
      $("#feature-list tbody").append(
        '<tr class="feature-row" id="' +
          L.stamp(layer) +
          '" lat="' +
          layer.getLatLng().lat +
          '" lng="' +
          layer.getLatLng().lng +
          '"><td style="vertical-align: middle;"><img width="18" height="18" src="assets/img/cutlery.png"></td><td class="feature-name">' +
          layer.feature.properties.NAME +
          '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>'
      );
    }
  });

  /* Loop through gates layer and add only features which are in the map bounds */
  gates.eachLayer(function (layer) {
    if (map.hasLayer(gateLayer)) {
      $("#feature-list tbody").append(
        '<tr class="feature-row" id="' +
          L.stamp(layer) +
          '" lat="' +
          layer.getLatLng().lat +
          '" lng="' +
          layer.getLatLng().lng +
          '"><td style="vertical-align: middle;"><img width="18" height="18" src="assets/img/gate.png"></td><td class="feature-name">' +
          layer.feature.properties.NAME +
          '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>'
      );
    }
  });

  /* Update list.js featureList */
  featureList = new List("features", {
    valueNames: ["feature-name"],
  });
  featureList.sort("feature-name", {
    order: "asc",
  });
}

/* Basemap Layers */

var cartoLight = L.tileLayer(
  "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=01bcfb36ac6e47b392b2d57aee8105fa",
  {
    attribution:
      '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: "01bcfb36ac6e47b392b2d57aee8105fa",
    maxZoom: 22,
  }
);

var mapbox = L.tileLayer(
  "https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=01bcfb36ac6e47b392b2d57aee8105fa",
  {
    attribution:
      '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: "01bcfb36ac6e47b392b2d57aee8105fa",
    maxZoom: 22,
  }
);

var googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    minZoom: 3,
    maxZoom: 21,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

/* Overlay Layers */
var highlight = L.geoJson(null);
var highlightStyle = {
  stroke: false,
  fillColor: "#90EE90",
  fillOpacity: 0.7,
  radius: 10,
};

// border
var borders = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "green",
      fill: false,
      opacity: 1,
      clickable: false,
      weight: 2,
    };
  },
});
$.getJSON("data/border.geojson", function (data) {
  borders.addData(data);
});

// building path
var building_path = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "black",
      fill: false,
      opacity: 1,
      weight: 3,
    };
  },
});

$("#start-btn").click(function () {
  $("#navigateModal").modal("hide");
  getGeojsonPath();
  reset();
  return false;
});

function reset() {
  var dropDownStart = document.getElementById("startingArea");
  var dropDownEnd = document.getElementById("destinationArea");
  dropDownStart.selectedIndex = 0;
  dropDownEnd.selectedIndex = 0;
}

function removePathBtn() {
  var pathDetailsDiv = L.easyButton(
    "fa-trash fa-lg",
    function () {
      building_path.clearLayers();
    },
    "Clear Path",
    "removeBtn"
  ).addTo(map);
}

/* Single marker cluster layer to hold all clusters */
var markerClusters = new L.MarkerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  disableClusteringAtZoom: 16,
});

/* Empty layer placeholder to add to layer control for listening when to add/remove buildings to markerClusters layer */
var buildingLayer = L.geoJson(null);
var buildings = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/campus.png",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25],
      }),
      title: feature.properties.NAME,
      riseOnHover: true,
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer
        .bindPopup(
          "<p><b><center>" +
            feature.properties.NAME +
            "</center></b></p>" +
            "<center><img src='" +
            feature.properties.PIC +
            "' style='width:150px;height:100px;'></img></center> " +
            "</br><a href='#' data-toggle='collapse' data-target='.navbar-collapse.in' id='description-btn'>" +
            feature.properties.TEXT +
            "</a>" +
            "</br><a href='#' data-toggle='collapse' data-target='.navbar-collapse.in' id='enter-btn'>" +
            feature.properties.ENTER +
            "</a>"
        )
        .openPopup();
      layer.on("popupopen", () => {
        $("#description-btn").click(function () {
          $("#description-title").html(feature.properties.NAME);
          $("#description-pic").html(
            "<div class='img-responsive-height'></div>'<center><img src='" +
              feature.properties.PIC +
              "' style='width:500px;height:350px;'></img></div></center>"
          );
          $("#description-text").html(feature.properties.DESC);
          $("#description-poi-1").html(feature.properties.DESC_POI);
          $("#descriptionModal").modal("show");
          $(".navbar-collapse.in").collapse("hide");
          return false;
        });
      });
      layer.on("popupopen", () => {
        $("#enter-btn").click(function () {
          window.location.href = feature.properties.FLOOR;
        });
      });
      buildingSearch.push({
        name: layer.feature.properties.NAME,
        address: layer.feature.properties.ADDRESS1,
        source: "Buildings",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0],
      });
    }
  },
});
$.getJSON("data/building.geojson", function (data) {
  buildings.addData(data);
  map.addLayer(buildingLayer);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove parkings to markerClusters layer */
var parkingLayer = L.geoJson(null);
var parkings = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/parking-area.png",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25],
      }),
      title: feature.properties.NAME,
      riseOnHover: true,
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer
        .bindPopup(
          "<p><b><center>" + feature.properties.NAME + "</center></b></p>"
        )
        .openPopup();
      parkingSearch.push({
        name: layer.feature.properties.NAME,
        source: "Parkings",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0],
      });
    }
  },
});
$.getJSON("data/parking.geojson", function (data) {
  parkings.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove foods to markerClusters layer */
var foodLayer = L.geoJson(null);
var foods = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/cutlery.png",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25],
      }),
      title: feature.properties.NAME,
      riseOnHover: true,
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer
        .bindPopup(
          "<p><b><center>" + feature.properties.NAME + "</center></b></p>"
        )
        .openPopup();
      foodSearch.push({
        name: layer.feature.properties.NAME,
        source: "Foods",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0],
      });
    }
  },
});
$.getJSON("data/food.geojson", function (data) {
  foods.addData(data);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove gates to markerClusters layer */
var gateLayer = L.geoJson(null);
var gates = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/gate.png",
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25],
      }),
      title: feature.properties.NAME,
      riseOnHover: true,
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer
        .bindPopup(
          "<p><b><center>" + feature.properties.NAME + "</center></b></p>"
        )
        .openPopup();
      gateSearch.push({
        name: layer.feature.properties.NAME,
        source: "Gates",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0],
      });
    }
  },
});
$.getJSON("data/gates.geojson", function (data) {
  gates.addData(data);
});

// initialize map
map = L.map("map", {
  zoom: 19,
  center: [16.046967909993068, 120.34169210507243],
  layers: [cartoLight, borders, markerClusters, highlight],
  zoomControl: false,
  attributionControl: false,
});

// Layer control listeners that allow for a single markerClusters layer
map.on("overlayadd", function (e) {
  if (e.layer === buildingLayer) {
    markerClusters.addLayer(buildings);
    syncSidebar();
  }
  if (e.layer === parkingLayer) {
    markerClusters.addLayer(parkings);
    syncSidebar();
  }
  if (e.layer === foodLayer) {
    markerClusters.addLayer(foods);
    syncSidebar();
  }
  if (e.layer === gateLayer) {
    markerClusters.addLayer(gates);
    syncSidebar();
  }
});

map.on("overlayremove", function (e) {
  if (e.layer === buildingLayer) {
    markerClusters.removeLayer(buildings);
    syncSidebar();
  }
  if (e.layer === parkingLayer) {
    markerClusters.removeLayer(parkings);
    syncSidebar();
  }
  if (e.layer === foodLayer) {
    markerClusters.removeLayer(foods);
    syncSidebar();
  }
  if (e.layer === gateLayer) {
    markerClusters.removeLayer(gates);
    syncSidebar();
  }
});

/* Clear feature highlight when map is clicked */
map.on("click", function (e) {
  highlight.clearLayers();
});

// zoom controller
var zoomControl = L.control
  .zoom({
    position: "topleft",
  })
  .addTo(map);

/* GPS enabled geolocation control set to follow the user's location */
var locateControl = L.control
  .locate({
    position: "topleft",
    drawCircle: true,
    follow: true,
    setView: true,
    keepCurrentZoomLevel: true,
    markerStyle: {
      weight: 1,
      opacity: 0.8,
      fillOpacity: 0.8,
    },
    circleStyle: {
      weight: 1,
      clickable: false,
    },
    icon: "fa fa-map-marker",
    metric: false,
    strings: {
      title: "My location",
      popup: "You are within {distance} {unit} from this point",
      outsideMapBoundsMsg: "You seem located outside the boundaries of the map",
    },
    locateOptions: {
      maxZoom: 18,
      watch: true,
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 10000,
    },
  })
  .addTo(map);

// locate campus
var mainCampusBtn = L.easyButton(
  "<i class='fa fa-thumb-tack' aria-hidden='true'></i>",
  function () {
    map.setView([16.046967909993068, 120.34169210507243], 19);
  },
  "Go back to main campus",
  "campusBtn"
).addTo(map);

// var button3d = L.easyButton(
//   "<i class='fa fa-cube' aria-hidden='true'></i>",
//   function () {
//     window.location.href = "newMap.html";
//   },
//   "3D Map",
//   "backBtn"
// ).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

// add or remove layer control
var baseLayers = {
  "&nbspStandard Map": cartoLight,
  "&nbspDark Map": mapbox,
  "&nbspGoogle Satellite": googleSat,
};

var groupedOverlays = {
  "Points of Interest": {
    // "<img src='assets/img/theater.png' width='24' height='28'>&nbsp;Buildings":
    "&nbspBuildings": buildingLayer,
    // "<img src='assets/img/museum.png' width='24' height='28'>&nbsp;Parkings":
    "&nbspParkings": parkingLayer,
    // "<img src='assets/img/museum.png' width='24' height='28'>&nbsp;Foods":
    "&nbspFoods": foodLayer,
    "&nbspGates": gateLayer,
  },
  References: {
    "&nbspCampus Border": borders,
    // "&nbspBuilding Border": building_borders,
  },
};

var layerControl = L.control
  .groupedLayers(baseLayers, groupedOverlays, {
    collapsed: isCollapsed,
  })
  .addTo(map);

/* Highlight search box text on click */
$("#searchbox").click(function () {
  $(this).select();
});

/* Prevent hitting enter from refreshing the page */
$("#searchbox").keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
  }
});

/* Typeahead search functionality */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  sizeLayerControl();
  /* Fit map to border bounds */
  // map.fitBounds(borders.getBounds());
  featureList = new List("features", { valueNames: ["feature-name"] });
  featureList.sort("feature-name", { order: "asc" });

  var buildingsBH = new Bloodhound({
    name: "Buildings",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: buildingSearch,
    limit: 10,
  });

  var parkingsBH = new Bloodhound({
    name: "Parkings",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: parkingSearch,
    limit: 10,
  });

  var foodsBH = new Bloodhound({
    name: "Foods",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: foodSearch,
    limit: 10,
  });

  var gatesBH = new Bloodhound({
    name: "Gates",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: gateSearch,
    limit: 10,
  });

  var geonamesBH = new Bloodhound({
    name: "GeoNames",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "https://api.geonames.org/searchJSON?username=bootleaf&featureClass=P&maxRows=5&countryCode=US&name_startsWith=%QUERY",
      filter: function (data) {
        return $.map(data.geonames, function (result) {
          return {
            name: result.name + ", " + result.adminCode1,
            lat: result.lat,
            lng: result.lng,
            source: "GeoNames",
          };
        });
      },
      ajax: {
        beforeSend: function (jqXhr, settings) {
          settings.url +=
            "&east=" +
            map.getBounds().getEast() +
            "&west=" +
            map.getBounds().getWest() +
            "&north=" +
            map.getBounds().getNorth() +
            "&south=" +
            map.getBounds().getSouth();
          $("#searchicon")
            .removeClass("fa-search")
            .addClass("fa-refresh fa-spin");
        },
        complete: function (jqXHR, status) {
          $("#searchicon")
            .removeClass("fa-refresh fa-spin")
            .addClass("fa-search");
        },
      },
    },
    limit: 10,
  });
  // bordersBH.initialize();
  buildingsBH.initialize();
  parkingsBH.initialize();
  foodsBH.initialize();
  gatesBH.initialize();
  geonamesBH.initialize();

  /* instantiate the typeahead UI */
  $("#searchbox")
    .typeahead(
      {
        minLength: 3,
        highlight: true,
        hint: false,
      },
      {
        name: "Buildings",
        displayKey: "name",
        source: buildingsBH.ttAdapter(),
        templates: {
          header:
            "<h4 class='typeahead-header'><img src='assets/img/campus.png' width='28' height='28'>&nbsp;Buildings</h4>",
          suggestion: Handlebars.compile(
            ["{{name}}<br>&nbsp;<small>{{address}}</small>"].join("")
          ),
        },
      },
      {
        name: "Parkings",
        displayKey: "name",
        source: parkingsBH.ttAdapter(),
        templates: {
          header:
            "<h4 class='typeahead-header'><img src='assets/img/parking-area.png' width='28' height='28'>&nbsp;Parkings</h4>",
          suggestion: Handlebars.compile(
            ["{{name}}<br>&nbsp;<small>{{address}}</small>"].join("")
          ),
        },
      },
      {
        name: "Foods",
        displayKey: "name",
        source: foodsBH.ttAdapter(),
        templates: {
          header:
            "<h4 class='typeahead-header'><img src='assets/img/cutlery.png' width='28' height='28'>&nbsp;Foods</h4>",
          suggestion: Handlebars.compile(
            ["{{name}}<br>&nbsp;<small>{{address}}</small>"].join("")
          ),
        },
      },
      {
        name: "Gates",
        displayKey: "name",
        source: gatesBH.ttAdapter(),
        templates: {
          header:
            "<h4 class='typeahead-header'><img src='assets/img/gate.png' width='28' height='28'>&nbsp;Gates</h4>",
          suggestion: Handlebars.compile(
            ["{{name}}<br>&nbsp;<small>{{address}}</small>"].join("")
          ),
        },
      },
      {
        name: "GeoNames",
        displayKey: "name",
        source: geonamesBH.ttAdapter(),
        templates: {
          header:
            "<h4 class='typeahead-header'><img src='assets/img/globe.png' width='25' height='25'>&nbsp;GeoNames</h4>",
        },
      }
    )
    .on("typeahead:selected", function (obj, datum) {
      if (datum.source === "Buildings") {
        if (!map.hasLayer(buildingLayer)) {
          map.addLayer(buildingLayer);
        }
        map.setView([datum.lat, datum.lng], 20);
        if (map._layers[datum.id]) {
          map._layers[datum.id].fire("click");
        }
      }
      if (datum.source === "Parkings") {
        if (!map.hasLayer(parkingLayer)) {
          map.addLayer(parkingLayer);
        }
        map.setView([datum.lat, datum.lng], 20);
        if (map._layers[datum.id]) {
          map._layers[datum.id].fire("click");
        }
      }
      if (datum.source === "Foods") {
        if (!map.hasLayer(foodLayer)) {
          map.addLayer(foodLayer);
        }
        map.setView([datum.lat, datum.lng], 20);
        if (map._layers[datum.id]) {
          map._layers[datum.id].fire("click");
        }
      }
      if (datum.source === "Gates") {
        if (!map.hasLayer(gateLayer)) {
          map.addLayer(gateLayer);
        }
        map.setView([datum.lat, datum.lng], 20);
        if (map._layers[datum.id]) {
          map._layers[datum.id].fire("click");
        }
      }
      if (datum.source === "GeoNames") {
        map.setView([datum.lat, datum.lng], 14);
      }
      if ($(".navbar-collapse").height() > 50) {
        $(".navbar-collapse").collapse("hide");
      }
    })
    .on("typeahead:opened", function () {
      $(".navbar-collapse.in").css(
        "max-height",
        $(document).height() - $(".navbar-header").height()
      );
      $(".navbar-collapse.in").css(
        "height",
        $(document).height() - $(".navbar-header").height()
      );
    })
    .on("typeahead:closed", function () {
      $(".navbar-collapse.in").css("max-height", "");
      $(".navbar-collapse.in").css("height", "");
    });
  $(".twitter-typeahead").css("position", "static");
  $(".twitter-typeahead").css("display", "block");
});
// Leaflet patch to make layer control scrollable on touch browsers
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent.disableClickPropagation(container).disableScrollPropagation(
    container
  );
} else {
  L.DomEvent.disableClickPropagation(container);
}
