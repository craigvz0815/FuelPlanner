# Clipper Fuel Planner — hosting on GitHub Pages

One file (`index.html`). No build step, no server.

## First-time setup (about 5 minutes)

1. Sign in at github.com (free account is fine).
2. Click **+** (top right) → **New repository**.
   - Name: `clipper-fuel-planner` (anything works)
   - Public
   - Leave everything else unchecked → **Create repository**
3. On the empty repo page, click **uploading an existing file**, drag in `index.html`, then **Commit changes**.
4. Go to **Settings** (repo tab) → **Pages** (left sidebar).
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**
5. Wait a minute, then reload the Pages settings page. The site URL appears at the top:
   `https://<your-username>.github.io/clipper-fuel-planner/`

Send that link to the crew. It works on any phone, no sign-in, no popups.

## Updating fees after a new itinerary

1. Give Claude the new itinerary; it returns an updated `index.html`.
2. In the repo, click `index.html` → the pencil icon (Edit) → select all, paste the new file → **Commit changes**.
   (Or drag-and-drop the new file via **Add file → Upload files**; it replaces the old one.)
3. The live site updates within a minute. Crew can tap **↻ Refresh** on the page.

GitHub keeps every previous version under the repo's **History**, so you can always see when a minimum changed.

## Custom domain (optional, later)

Settings → Pages → Custom domain lets you point something like `fuel.yourdomain.com` at it.
