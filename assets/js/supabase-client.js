/* Supabase client. Fill in your project URL and anon key to enable real auth. */
(function () {
  const SUPABASE_URL = "";      // e.g. https://xxxx.supabase.co
  const SUPABASE_ANON_KEY = ""; // public anon key
  window.rainSupabase = null;
  try {
    if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
      window.rainSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  } catch (e) {
    console.warn("Supabase init failed:", e);
  }
})();
