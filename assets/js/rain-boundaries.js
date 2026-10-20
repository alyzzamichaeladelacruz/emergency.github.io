/* RainBoundaries — draws barangay boundary polygons (GeoJSON) on a Leaflet map.
   Shared helper: any RAIN page can call RainBoundaries.attach(map, url).
   Expected file: GeoJSON in WGS84 (EPSG:4326, lon/lat). See assets/data/README.txt. */
(function () {
  const NAME_KEYS = [
    "adm4_en", "ADM4_EN", "brgy_name", "BRGY_NAME", "barangay", "Barangay", "BARANGAY",
    "NAME_4", "name_4", "NAME_3", "adm3_en", "name", "Name", "NAME",
  ];
  const STYLE = { color: "#6b1d5c", weight: 1.5, fillColor: "#ec4899", fillOpacity: 0.22 };
  const HOVER = { weight: 3, fillOpacity: 0.45 };
  const cache = {};

  function nameOf(props) {
    props = props || {};
    for (const k of NAME_KEYS) if (props[k]) return String(props[k]);
    for (const k in props) if (typeof props[k] === "string" && props[k]) return props[k];
    return "Barangay";
  }

  function firstCoord(g) {
    if (!g) return null;
    if (g.type === "GeometryCollection") return firstCoord((g.geometries || [])[0]);
    let c = g.coordinates;
    while (Array.isArray(c) && Array.isArray(c[0])) c = c[0];
    return Array.isArray(c) ? c : null;
  }

  // Projected (metre) coordinates look like 400000, 1550000 — Leaflet needs degrees.
  function looksProjected(features) {
    const c = firstCoord(features[0] && features[0].geometry);
    return !!c && (Math.abs(c[0]) > 180 || Math.abs(c[1]) > 90);
  }

  // If the file holds more than Tanauan, keep only features mentioning Tanauan in any text field.
  function onlyTanauan(features) {
    const hit = features.filter((f) =>
      Object.values(f.properties || {}).some((v) => typeof v === "string" && /tanauan/i.test(v)));
    return hit.length ? hit : features;
  }

  async function loadGeoJSON(url) {
    if (cache[url]) return cache[url];
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const gj = await res.json();
    if (gj.type === "Topology") throw new Error("TopoJSON is not supported — export GeoJSON instead.");
    const features = gj.type === "FeatureCollection" ? gj.features : gj.type === "Feature" ? [gj] : [];
    if (!features.length) throw new Error("No features found in file.");
    if (looksProjected(features)) throw new Error("Coordinates are projected (not lon/lat). Re-export as EPSG:4326.");
    cache[url] = { type: "FeatureCollection", features: onlyTanauan(features) };
    return cache[url];
  }

  // Resolves to { layer, count } on success or { error } on failure (never throws).
  async function attach(map, url) {
    try {
      const gj = await loadGeoJSON(url);
      const paneName = "rain-boundaries";
      const pane = map.getPane(paneName) || map.createPane(paneName);
      pane.style.zIndex = 350; // below pins/markers (overlay pane is 400)
      const layer = L.geoJSON(gj, {
        pane: paneName,
        style: () => STYLE,
        onEachFeature: (f, l) => {
          l.bindTooltip(nameOf(f.properties), { sticky: true });
          l.on("mouseover", () => l.setStyle(HOVER));
          l.on("mouseout", () => layer.resetStyle(l));
        },
      }).addTo(map);
      return { layer, count: gj.features.length };
    } catch (e) {
      return { error: e.message || String(e) };
    }
  }

  window.RainBoundaries = { attach, _util: { nameOf, looksProjected, onlyTanauan } };
})();
