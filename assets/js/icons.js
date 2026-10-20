/* Map pin icon factory (Leaflet divIcon). category drives the colour via CSS (.rain-pin-<category>). */
(function () {
  window.rainPinIcon = function (category, glyph) {
    return L.divIcon({
      className: "rain-pin-wrap",
      html: '<div class="rain-pin rain-pin-' + category + '"><i class="bi ' + glyph + '"></i></div>',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -30],
    });
  };
})();
