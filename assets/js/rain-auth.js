/* RainAuth. Uses Supabase when configured; otherwise falls back to a demo resident so pages render. */
(function () {
  const DEMO_USER = { id: "demo", name: "Resident", email: "", demo: true };
  const RainAuth = {
    user: null,
    async init() {
      try {
        if (window.rainSupabase) {
          const { data } = await window.rainSupabase.auth.getSession();
          const u = data && data.session && data.session.user;
          if (u) {
            this.user = { id: u.id, name: (u.email || "Resident").split("@")[0], email: u.email || "" };
            return this.user;
          }
        }
      } catch (e) {
        console.warn("Auth check failed, using demo user:", e);
      }
      this.user = DEMO_USER;
      return this.user;
    },
    getUser() { return this.user; },
  };
  window.RainAuth = RainAuth;
})();
