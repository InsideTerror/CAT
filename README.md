# CAT

Static website for the (fictional) CAT Corporation, deployed on Vercel (`vercel.json` enables clean URLs).

## Structure

- `style.css` — the single stylesheet for every page, including the login and dashboard.
  Layout and type follow the C.O.R.E. site (corerail.dpdns.org); colours come from `V1.png`:
  `#060606` black, `#8B0101` red, `#D3AF37` gold, `#0B7189` teal. All tokens are in `:root`.
- `main.js` — shared nav behaviour (mobile menu, products dropdown, footer year).
- `supabase-config.js` — the one Supabase client, imported by `apply.html`, `login.html` and `dashboard.html`.
- `images/` — `*.jpg` vehicle/hero/office images are web-sized copies of the original PNGs
  (the hero PNGs are 20–24 MB each and are no longer referenced; they can be deleted or kept as masters).

## Known issues to fix on the Supabase side

1. **Plain-text passwords readable by anyone.** `login.html` checks the password by reading it from the
   `employees` table with the public anon key. That means anyone can query that table from the browser and
   read every username and password. Move logins to Supabase Auth (`supabase.auth.signInWithPassword`) and
   enable Row Level Security so `employees` is not readable by `anon`.
2. **Dashboard "login" is only a localStorage flag.** Anyone can set `isLoggedIn`/`username=Fritz_Teufel`
   in dev tools. The real protection must be RLS on the `applications` table (only authenticated admins may `select`).
3. **Form fields not stored.** The application form collects nationality, residence, department and summary,
   but only `name`, `email`, `experience` and `resume_url` are inserted. Add columns for the others to the
   `applications` table if you want to keep them, then add them to the insert in `apply.html`.
