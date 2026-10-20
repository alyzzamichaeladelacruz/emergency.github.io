/* Shared helpers: haversineKm, renderAppShell, RainEmergencyMode. */
(function () {
  window.haversineKm = function (lat1, lng1, lat2, lng2) {
    const R = 6371, toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  };

  const NAV = [
    { href: "dashboard.html", label: "Dashboard" },
    { href: "emergency.html", label: "Emergency" },
  ];

  // Builds the top bar and an #app-content container. Returns the signed-in user (or null).
  window.renderAppShell = function (page, opts) {
    const user = window.RainAuth && window.RainAuth.getUser();
    const root = document.getElementById("app-shell-root");
    if (opts && opts.title) document.title = opts.title + " — RAIN";
    const links = NAV.map((n) =>
      '<a href="' + n.href + '" class="' + (n.href === page ? "active" : "") + '">' + n.label + "</a>").join("");
    root.innerHTML =
      '<header class="rain-topbar">' +
        '<a class="rain-brand" href="dashboard.html"><i class="bi bi-cloud-rain-heavy"></i>RAIN</a>' +
        '<nav class="rain-nav">' + links +
          '<button type="button" class="rain-theme-btn" id="rainThemeBtn" title="Toggle theme"><i class="bi bi-circle-half"></i></button>' +
        "</nav>" +
      "</header>" +
      '<div id="rainOfflineBanner" class="offline-banner" style="display:none;"><i class="bi bi-cloud-slash"></i> You are offline — showing saved data.</div>' +
      '<main id="app-content"></main>';

    document.getElementById("rainThemeBtn").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("rain_theme", next); } catch (e) {}
    });

    const banner = document.getElementById("rainOfflineBanner");
    const sync = () => { banner.style.display = navigator.onLine === false ? "block" : "none"; };
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    sync();

    return user;
  };

  // Simplified, action-only full-screen view with big call buttons.
  window.RainEmergencyMode = {
    open() {
      if (document.getElementById("rainEmOverlay")) return;
      const contacts = (window.RAIN_DEMO && window.RAIN_DEMO.emergencyContacts) ||
        (window.RainOffline && window.RainOffline.load("emergencyContacts", [])) || [];
      const el = document.createElement("div");
      el.id = "rainEmOverlay";
      el.className = "rain-em-overlay";
      const buttons = contacts.map((c) =>
        '<a class="btn-emergency" href="tel:' + String(c.number).replace(/[^\d+]/g, "") + '">' +
        '<i class="bi bi-telephone-fill"></i> ' + c.name + " — " + c.number + "</a>").join("");
      el.innerHTML =
        '<div class="rain-em-inner">' +
          '<button type="button" class="rain-em-close" id="rainEmClose">Close</button>' +
          "<h2><i class=\"bi bi-broadcast\"></i> Emergency Mode</h2>" +
          '<p style="opacity:.85;">Stay calm. Call for help, then move to the nearest evacuation center.</p>' +
          buttons +
        "</div>";
      document.body.appendChild(el);
      document.getElementById("rainEmClose").addEventListener("click", () => this.close());
    },
    close() {
      const el = document.getElementById("rainEmOverlay");
      if (el) el.remove();
    },
  };
})();
