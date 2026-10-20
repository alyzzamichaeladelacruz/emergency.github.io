Barangay boundary file for the RAIN map
=======================================

Put the file here as:  assets/data/tanauan-barangays.geojson

Export it from QGIS (your barangay layer):
  1. Select the Tanauan City barangays (Select by Expression on the municipality field,
     e.g. the field that says "Tanauan"), or skip this and export everything - the page
     keeps only features that mention "Tanauan" if it finds any.
  2. Right-click the layer > Export > Save Selected Features As...
  3. Format: GeoJSON
     CRS: EPSG:4326 - WGS 84   (important - the map needs longitude/latitude)
     Tick "Save only selected features" if you made a selection.
     Under Layer Options you can set COORDINATE_PRECISION = 5 to keep the file small.
  4. Save as tanauan-barangays.geojson in this folder.

Open the page through a local server (e.g. python -m http.server), not by double-clicking
the HTML file, or the browser will block loading this file.

The barangay name label uses the first of these fields it finds:
adm4_en, brgy_name, barangay, NAME_4, NAME_3, name  (otherwise the first text field).
