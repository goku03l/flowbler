# Flowchart editor

A browser-based flowchart editor with shapes, icons, group boxes, smart alignment,
AI generation (OpenAI) and live collaboration.

**Live site:** `https://<your-github-name>.github.io/<repo-name>/`

---

## 1. Put it on GitHub Pages (5 minutes)

1. On GitHub, click **New repository**. Give it a name (for example `flowchart`) and make it **Public**.
2. Click **uploading an existing file**, drag in `index.html`, `config.js`, `database.rules.json`
   and this `README.md`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
4. After a minute the address appears at the top of that page:
   `https://<your-github-name>.github.io/<repo-name>/`. Send it to anyone.

At this point everyone can use the editor. Each person's work is saved in their own browser.
To see each other's changes live, do step 2 once.

**Updating later:** upload a new `index.html` to the repo (same name, it replaces the old one).
The site updates within a minute or two; people may need to refresh.

---

## 2. Switch on live collaboration (10 minutes, free)

Live sessions use Firebase Realtime Database. The free plan is plenty for a team.

1. Go to <https://console.firebase.google.com>, click **Create a project**, follow the steps
   (Google Analytics is not needed).
2. **Build → Realtime Database → Create database.** Pick a location near your team.
   Start in **locked mode**.
3. Open the **Rules** tab, replace everything with the contents of `database.rules.json`,
   and click **Publish**.
4. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable → Save.**
   (People don't create accounts; this just gives each browser a private ID.)
5. **Authentication → Settings → Authorized domains → Add domain:** `<your-github-name>.github.io`
6. **Project settings (gear icon) → Your apps → Web (`</>`)** → register an app (no hosting needed).
   Copy the `firebaseConfig` object it shows.
7. Open `config.js`, replace `null` with that object (see the example in the file),
   make sure it includes `databaseURL`, and upload `config.js` to the repo again.

Open the site, click **Share → Start live session**, and send the link.

### How live sessions work

- **Share** starts a session and gives you a private link. Anyone with the link can see and edit.
  The link is the key: rooms can't be listed or guessed.
- Everyone sees changes within a fraction of a second, plus each other's **cursors**, **selections**
  and **names**. Shapes flash in the colour of the person who just changed them.
- **Activity** lists who changed what, and when. Click an entry to jump to that canvas.
- **Share → Versions**: save named versions and restore any of them. Restoring is itself undoable.
- **Undo (Ctrl+Z)** only reverses *your own* changes, never a colleague's.
- **Leaving** lets you keep a copy of the shared diagram, or go back to your own diagrams.

---

## AI generation

Everyone uses **their own OpenAI API key**, entered in *Generate with AI → OpenAI settings*.
The key is stored only in that person's browser and sent only to api.openai.com —
it is never put in the repository, the shared database, saved files or exports.

---

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole editor |
| `config.js` | Live-sharing settings (`null` = sharing off) |
| `database.rules.json` | Security rules to paste into Firebase |
