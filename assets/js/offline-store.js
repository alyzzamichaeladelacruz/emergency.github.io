/* RainOffline — tiny localStorage cache so key data survives losing connection. */
(function () {
  const PREFIX = "rain_offline_";
  window.RainOffline = {
    save(key, value) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* storage full/blocked */ }
    },
    load(key, fallback) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) { return fallback; }
    },
    isOnline() { return navigator.onLine !== false; },
  };
})();
