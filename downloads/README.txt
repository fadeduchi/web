HOW TO MAKE DOWNLOADS WORK
============================

1. Put your real .jar files in THIS folder (downloads/).

2. File names MUST match script.js exactly:

   gambling-rig.jar
   spawner-protect.jar
   bedrock-base-finder.jar
   fake-pay.jar
   opsec.jar
   meteor-client.jar
   glazed-addon.jar
   doomsday-client.jar
   liquidbounce.jar
   wurst-client.jar

3. Test locally:
   - Open PowerShell in the project folder (minecraft-mods-hub)
   - Run:  python -m http.server 8765
   - Visit: http://localhost:8765/
   - Click Download on any mod

   (Browsers often block downloads when opening index.html as file://)

4. Publish to cestlamorte.site:
   - Upload the whole folder to your host (Netlify, Vercel, GitHub Pages, etc.)
   - Keep the same structure: index.html, css/, js/, downloads/
   - Each download link points to: downloads/your-mod.jar

5. Optional: host large files elsewhere
   - Edit js/script.js and set downloadFile to a full URL, e.g.
     downloadFile: "https://your-cdn.com/mods/liquidbounce.jar"
   - Update getDownloadHref() if you use external URLs (see comment in script.js)

File sizes shown on the site are display-only (341 KB, 6.3 MB, etc.).
They do not need to match the real jar byte size, but you can update
fileSize in script.js if you want them accurate.
