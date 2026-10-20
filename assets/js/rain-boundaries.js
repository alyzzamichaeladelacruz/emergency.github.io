/* RainBoundaries — draws barangay polygons on a Leaflet map, one distinct colour per barangay.
   Shared helper: any RAIN page can call RainBoundaries.attach(map, url, { fallback }).
   1) Tries the real GeoJSON at `url` (WGS84 lon/lat — see assets/data/README.txt).
   2) If that is missing/invalid, draws opts.fallback (window.RAIN_ZONES): APPROXIMATE
      nearest-hall zones, flagged properties.zone = true. These are not official boundaries. */
(function () {
  const NAME_KEYS = [
    "adm4_en", "ADM4_EN", "brgy_name", "BRGY_NAME", "barangay", "Barangay", "BARANGAY",
    "NAME_4", "name_4", "NAME_3", "adm3_en", "name", "Name", "NAME",
  ];
  const LIGHT = [50, 62, 42];
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

  // Give every feature its own colour (golden-angle hues) unless it already has one.
  function colorize(features) {
    features.forEach((f, i) => {
      f.properties = f.properties || {};
      if (!f.properties.color) {
        f.properties.color = "hsl(" + Math.round((i * 137.508) % 360) + ",70%," + LIGHT[i % LIGHT.length] + "%)";
      }
    });
    return features;
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
    cache[url] = { type: "FeatureCollection", features: colorize(onlyTanauan(features)) };
    return cache[url];
  }

  function draw(map, gj) {
    const paneName = "rain-boundaries";
    const pane = map.getPane(paneName) || map.createPane(paneName);
    pane.style.zIndex = 350; // below pins/markers (overlay pane is 400)
    const baseStyle = (f) => {
      const approx = !!(f.properties && f.properties.zone);
      return {
        color: approx ? "#374151" : "#1f2937",
        weight: approx ? 1.2 : 1.5,
        dashArray: approx ? "4 3" : null,
        fillColor: f.properties.color,
        fillOpacity: approx ? 0.5 : 0.55,
      };
    };
    const layer = L.geoJSON(gj, {
      pane: paneName,
      style: baseStyle,
      onEachFeature: (f, l) => {
        const approx = !!(f.properties && f.properties.zone);
        l.bindTooltip(nameOf(f.properties) + (approx ? " (approx. zone)" : ""), { sticky: true });
        l.on("mouseover", () => l.setStyle({ weight: 3, fillOpacity: 0.8 }));
        l.on("mouseout", () => layer.resetStyle(l));
      },
    }).addTo(map);
    return layer;
  }

  // Resolves to { layer, count, approximate } on success or { error } on failure (never throws).
  async function attach(map, url, opts) {
    opts = opts || {};
    let gj = null, approximate = false, firstError = null;
    try {
      // opts.data = a GeoJSON object already in memory (e.g. window.RAIN_BOUNDARIES) — no fetch needed.
      if (opts.data && opts.data.features && opts.data.features.length) {
        gj = { type: "FeatureCollection", features: colorize(opts.data.features) };
      } else gj = await loadGeoJSON(url);
    } catch (e) {
      firstError = e.message || String(e);
      if (opts.fallback && opts.fallback.features && opts.fallback.features.length) {
        gj = opts.fallback; approximate = true;
      }
    }
    if (!gj) return { error: firstError || "no boundary data" };
    try {
      return { layer: draw(map, gj), count: gj.features.length, approximate, note: firstError };
    } catch (e) {
      return { error: e.message || String(e) };
    }
  }

  window.RainBoundaries = { attach, _util: { nameOf, looksProjected, onlyTanauan, colorize } };
})();
