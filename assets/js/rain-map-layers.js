/* RainMapLayers — attaches a basemap switcher to a Leaflet map. */
(function () {
  window.RainMapLayers = {
    attach(map, opts) {
      opts = opts || {};
      const base = opts.base;
      const baseName = opts.baseName || "Default";
      const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      });
      const bases = {};
      if (base) bases[baseName] = base;
      bases["OpenStreetMap"] = osm;
      L.control.layers(bases, null, { position: "topright", collapsed: true }).addTo(map);
    },
  };
})();
