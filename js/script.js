/**
 * MC Mods Hub — cestlamorte.site
 * Downloads: place .jar files in /downloads/ (see downloads/README.txt)
 */

const DOWNLOADS_BASE = "downloads/";
const VIDEOS_BASE = "videos/";

const MODS = [
  {
    id: "gambling-rig",
    name: "Gambling Rig",
    category: "Utility",
    mcVersion: "1.21.x",
    status: "undetected",
    fileSize: "341 KB",
    downloadFile: "gambling-rig.jar",
    shortDesc:
      "Dispenser minigame utility for SMP casino events and controlled dispenser outcomes in roleplay setups.",
    longDesc:
      "Gambling Rig adds dispenser-based minigame tools for server-hosted betting events. Configure tables, odds display, and round timers for DonutSMP-style economies without leaving Fabric.",
    type: "Utility mod",
    complexity: "Medium",
    compatibility: "Fabric",
    installNotes:
      "Requires Fabric Loader and Fabric API. Place the .jar in .minecraft/mods and launch the Fabric profile."
  },
  {
    id: "spawner-protect",
    name: "Spawner Protect",
    category: "Utility",
    mcVersion: "1.21.11",
    status: "undetected",
    fileSize: "120 KB",
    downloadFile: "spawner-protect.jar",
    previewVideo: "videos/spawner-protect.mp4",
    shortDesc:
      "Protects placed spawners when players approach—built for DonutSMP-style mob farm security.",
    longDesc:
      "Spawner Protect watches for nearby players and can automatically secure spawners (break to inventory / ender chest workflows depending on config). Designed for high-value spawner farms on public SMPs.",
    type: "Meteor extension / utility",
    complexity: "Medium",
    compatibility: "Fabric",
    installNotes:
      "Requires Meteor Client, Fabric Loader, and Fabric API. Install dependencies first, then this extension."
  },
  {
    id: "bedrock-base-finder",
    name: "Bedrock Base Finder",
    category: "Tool",
    mcVersion: "1.21.11",
    status: "undetected",
    fileSize: "59 KB",
    downloadFile: "bedrock-base-finder.jar",
    shortDesc:
      "Analyzes bedrock patterns to highlight unusual formations useful for base scouting workflows.",
    longDesc:
      "Bedrock Base Finder scans chunks for irregular bedrock patterns and mining traces, then surfaces coordinates for review. Tunable scan radius and filters help balance performance on large worlds.",
    type: "Analysis / tool mod",
    complexity: "Advanced",
    compatibility: "Fabric",
    installNotes:
      "Fabric Loader + Fabric API required. Adjust scan settings in mod config to reduce lag on low-end PCs."
  },
  {
    id: "fake-pay",
    name: "Fake Pay",
    category: "Visual",
    mcVersion: "1.21.x",
    status: "undetected",
    fileSize: "99.8 KB",
    downloadFile: "fake-pay.jar",
    shortDesc:
      "Client-side payment animations for roleplay—visual only, no server balance changes.",
    longDesc:
      "Fake Pay shows pay animations and receipt-style chat messages locally. Toggle from the mod menu; intended for videos and RP shops where no real currency moves on the server.",
    type: "Client-side visual utility",
    complexity: "Easy",
    compatibility: "Fabric",
    installNotes:
      "Client-only Fabric mod. Install on your game client; check server rules before use on multiplayer."
  },
  {
    id: "opsec",
    name: "OpSec",
    category: "Utility",
    mcVersion: "1.21.x",
    status: "undetected",
    fileSize: "2.2 MB",
    downloadFile: "opsec.jar",
    shortDesc:
      "Privacy-focused client mod to reduce tracking fingerprints and harden multiplayer security habits.",
    longDesc:
      "OpSec bundles privacy toggles: coordinate blur for streams, delayed tab updates, and client fingerprint reduction options. Includes a checklist for safer account practices on public servers.",
    type: "Privacy / security utility",
    complexity: "Easy",
    compatibility: "Fabric",
    installNotes:
      "Fabric Loader only (API optional per build). Configure from the mod menu after first launch."
  },
  {
    id: "meteor-client",
    name: "Meteor Client",
    category: "Client",
    mcVersion: "1.21.11",
    status: "detected",
    fileSize: "2.3 MB",
    downloadFile: "meteor-client.jar",
    shortDesc:
      "All-in-one Fabric client with modular HUD, automation, and combat utility categories.",
    longDesc:
      "Meteor Client is a full Fabric client framework with module categories for PvP, render, movement, and automation. Many extensions (like Glazed Addon) require Meteor as a base install.",
    type: "Client mod",
    complexity: "Advanced",
    compatibility: "Fabric",
    installNotes:
      "Install Fabric, then Meteor. Use a separate launcher profile. Server may flag some modules—check server rules."
  },
  {
    id: "glazed-addon",
    name: "Glazed Addon",
    category: "Addon",
    mcVersion: "1.21.11",
    status: "undetected",
    fileSize: "1.1 MB",
    downloadFile: "glazed-addon.jar",
    previewVideo: "videos/glazed-addon.mp4",
    shortDesc:
      "Meteor extension with 50+ DonutSMP-oriented modules for AH, ESP, and utility workflows.",
    longDesc:
      "Glazed Addon extends Meteor Client with auction house automation, ESP overlays, order snipers, and PvP utility modules tuned for economy SMP playstyles.",
    type: "Meteor addon",
    complexity: "Advanced",
    compatibility: "Fabric",
    installNotes:
      "Requires Meteor Client, Fabric Loader, and Fabric API. Install Meteor first, then this addon .jar."
  },
  {
    id: "doomsday-client",
    name: "Doomsday Client",
    category: "Client",
    mcVersion: "1.8 – 1.21.11",
    status: "undetected",
    fileSize: "2.0 MB",
    downloadFile: "doomsday-client.jar",
    shortDesc:
      "Cross-version client spanning 1.8–1.21 with combat, movement, and world modules.",
    longDesc:
      "Doomsday Client targets multiple Minecraft versions with a unified module system for combat, movement, utility, and world interaction. Pick the build that matches your game version exactly.",
    type: "Cross-version client",
    complexity: "Advanced",
    compatibility: "Fabric",
    installNotes:
      "Download the jar built for your exact Minecraft version. Wrong version builds will crash at launch."
  },
  {
    id: "liquidbounce",
    name: "LiquidBounce",
    category: "Client",
    mcVersion: "1.21.11",
    status: "undetected",
    fileSize: "2.3 MB",
    downloadFile: "liquidbounce.jar",
    shortDesc:
      "Large modular client with configs, scripting, and PvP-focused control panels.",
    longDesc:
      "LiquidBounce ships a broad module and command system with anti-cheat-aware configs, scripting support, and ClickGUI workflows for advanced PvP and utility use on Fabric.",
    type: "Client mod",
    complexity: "Advanced",
    compatibility: "Fabric",
    installNotes:
      "Fabric Loader + Fabric API required. Use the Fabric profile that matches the mod’s Minecraft version."
  },
  {
    id: "wurst-client",
    name: "Wurst Client",
    category: "Client",
    mcVersion: "1.21.11",
    status: "undetected",
    fileSize: "2.3 MB",
    downloadFile: "wurst-client.jar",
    shortDesc:
      "Feature-rich Fabric client with combat, movement, automation, and navigator tools.",
    longDesc:
      "Wurst Client bundles hundreds of features across combat, movement, automation, and visual modules with an in-game navigator and ClickGUI for quick toggles.",
    type: "Client mod",
    complexity: "Medium",
    compatibility: "Fabric",
    installNotes:
      "Install Fabric and Fabric API, add Wurst to mods, launch Fabric profile. Open GUI with the keybind shown in mod docs."
  }
];

const FAQ_DATA = [
  {
    question: "Are all mods free?",
    answer:
      "Yes. Every mod and client listed on cestlamorte.site is free. There are no paywalls or subscriptions for downloads from this hub."
  },
  {
    question: "How do I install a .jar mod?",
    answer:
      "Install Fabric for your Minecraft version, download the mod .jar, and place it in your .minecraft/mods folder. Launch Minecraft using the Fabric profile and confirm the mod appears in the Mods menu."
  },
  {
    question: "Where do I put mod files?",
    answer:
      "Put .jar files in the mods folder inside your Minecraft directory. On Windows: Win+R → %appdata%\\.minecraft\\mods. Create the folder if it does not exist."
  },
  {
    question: "Do I need Forge or Fabric?",
    answer:
      "This catalog targets Fabric. Install Fabric Loader from fabricmc.net, and add Fabric API when the mod requires it. Do not mix Forge and Fabric jars in the same instance."
  },
  {
    question: "What Minecraft version is recommended?",
    answer:
      "Use the version shown on each card (for example 1.21.11). Wrong versions cause crashes or missing-mod errors. Match the server version when playing multiplayer."
  }
];

const INSTALL_STEPS = [
  "<strong>Install Fabric</strong> — Download and install Fabric Loader for your Minecraft version from fabricmc.net.",
  "<strong>Drop the .jar file</strong> — Place the downloaded mod .jar into your .minecraft/mods folder.",
  "<strong>Launch &amp; play</strong> — Start Minecraft with the Fabric profile. Press Right Shift (most clients) to open the in-game GUI."
];

const DOWNLOAD_WARNING_MESSAGE =
  "If some files show the same download size as others, that's normal — they ship bundled together and are meant to be installed as one package. Always use the Fabric profile that matches your Minecraft version.";

const TYPEWRITER_TEXT = "MCMods Hub";
const TYPEWRITER_SPEED = 90;
const TYPEWRITER_PAUSE = 2400;

const modsGrid = document.getElementById("mods-grid");
const faqList = document.getElementById("faq-list");
const installStepsEl = document.getElementById("install-steps");
const typewriterEl = document.getElementById("typewriter");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalPreview = document.getElementById("modal-preview");
const modalVideo = document.getElementById("modal-video");
const modalPreviewFallback = document.getElementById("modal-preview-fallback");
const modalDownloadBtn = document.getElementById("modal-download");
const downloadWarningOverlay = document.getElementById("download-warning-overlay");
const downloadWarningMod = document.getElementById("download-warning-mod");
const downloadWarningText = document.getElementById("download-warning-text");
const downloadWarningCancel = document.getElementById("download-warning-cancel");
const downloadWarningConfirm = document.getElementById("download-warning-confirm");
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.querySelector(".main-nav");

let lastFocusedElement = null;
let pendingDownloadMod = null;
let downloadWarningReturnFocus = null;

function getDownloadHref(mod) {
  if (/^https?:\/\//i.test(mod.downloadFile)) {
    return mod.downloadFile;
  }
  return DOWNLOADS_BASE + mod.downloadFile;
}

function categoryClass(category) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function statusLabel(status) {
  return status === "detected" ? "DETECTED" : "UNDETECTED";
}

function renderMods() {
  modsGrid.innerHTML = MODS.map(
    (mod) => `
    <article class="mod-card glass" role="listitem" data-mod-id="${mod.id}">
      <div class="mod-card-top">
        <span class="version-badge mono">${escapeHtml(mod.mcVersion)}</span>
        <span class="status-badge ${mod.status} mono">${statusLabel(mod.status)}</span>
        <span class="file-size mono">${escapeHtml(mod.fileSize)}</span>
      </div>
      <div class="mod-card-header">
        <h3>${escapeHtml(mod.name)}</h3>
        <span class="category-badge ${categoryClass(mod.category)}">${escapeHtml(mod.category)}</span>
      </div>
      <p>${escapeHtml(mod.shortDesc)}</p>
      <div class="mod-card-actions">
        <button type="button" class="btn btn-download download-btn" data-mod-id="${mod.id}">
          Download
        </button>
        <button type="button" class="btn btn-outline details-btn" data-mod-id="${mod.id}">Details</button>
      </div>
    </article>
  `
  ).join("");

  modsGrid.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.modId));
  });

  modsGrid.querySelectorAll(".download-btn").forEach((btn) => {
    btn.addEventListener("click", () => openDownloadWarning(btn.dataset.modId, btn));
  });
}

function renderFaq() {
  faqList.innerHTML = FAQ_DATA.map(
    (item) => `
    <details class="faq-item glass">
      <summary>${escapeHtml(item.question)}</summary>
      <p class="faq-answer">${escapeHtml(item.answer)}</p>
    </details>
  `
  ).join("");
}

function renderInstallSteps() {
  installStepsEl.innerHTML = INSTALL_STEPS.map((step) => `<li>${step}</li>`).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function clearModalPreview() {
  modalPreview.hidden = true;
  modal.classList.remove("has-preview");
  modalPreviewFallback.hidden = true;
  modalVideo.onerror = null;
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
}

function setModalPreview(mod) {
  if (!mod.previewVideo) {
    clearModalPreview();
    return;
  }

  modalPreview.hidden = false;
  modal.classList.add("has-preview");
  modalPreviewFallback.hidden = true;
  modalVideo.onerror = () => {
    modalPreviewFallback.hidden = false;
  };
  modalVideo.src = mod.previewVideo;
  modalVideo.load();
}

function openModal(modId) {
  const mod = MODS.find((m) => m.id === modId);
  if (!mod) return;

  lastFocusedElement = document.activeElement;

  document.getElementById("modal-title").textContent = mod.name;
  document.getElementById("modal-category").textContent = mod.category;
  document.getElementById("modal-size").textContent = `${mod.fileSize} · Minecraft ${mod.mcVersion}`;

  const statusEl = document.getElementById("modal-status");
  statusEl.textContent = statusLabel(mod.status);
  statusEl.className = `status-badge mono ${mod.status}`;

  setModalPreview(mod);

  document.getElementById("modal-desc").textContent = mod.longDesc;
  document.getElementById("modal-type").textContent = mod.type;
  document.getElementById("modal-compatibility").textContent = mod.compatibility;

  const complexityEl = document.getElementById("modal-complexity");
  complexityEl.textContent = mod.complexity;
  complexityEl.className = `complexity-${mod.complexity.toLowerCase()}`;

  document.getElementById("modal-install-notes").textContent = mod.installNotes;

  modalDownloadBtn.dataset.modId = mod.id;
  document.getElementById("modal-download-size").textContent = `(${mod.fileSize})`;

  modalOverlay.removeAttribute("hidden");
  requestAnimationFrame(() => {
    modalOverlay.classList.add("is-open");
    modal.focus();
  });
  document.body.style.overflow = "hidden";
}

function triggerDownload(mod) {
  const link = document.createElement("a");
  link.href = getDownloadHref(mod);
  link.download = mod.downloadFile;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function openDownloadWarning(modId, returnFocusEl) {
  const mod = MODS.find((m) => m.id === modId);
  if (!mod) return;

  pendingDownloadMod = mod;
  downloadWarningReturnFocus = returnFocusEl || document.activeElement;
  downloadWarningMod.textContent = `${mod.name} · ${mod.fileSize}`;
  downloadWarningText.textContent = DOWNLOAD_WARNING_MESSAGE;

  downloadWarningOverlay.removeAttribute("hidden");
  requestAnimationFrame(() => {
    downloadWarningOverlay.classList.add("is-open");
    downloadWarningConfirm.focus();
  });
  document.body.style.overflow = "hidden";
}

function closeDownloadWarning(proceed) {
  const mod = pendingDownloadMod;
  const focusEl = downloadWarningReturnFocus;

  downloadWarningOverlay.classList.remove("is-open");
  pendingDownloadMod = null;
  downloadWarningReturnFocus = null;

  setTimeout(() => {
    downloadWarningOverlay.setAttribute("hidden", "");
    if (!modalOverlay.classList.contains("is-open")) {
      document.body.style.overflow = "";
    }
    if (proceed && mod) triggerDownload(mod);
    if (focusEl && typeof focusEl.focus === "function") focusEl.focus();
  }, 350);
}

function initDownloadWarning() {
  modalDownloadBtn.addEventListener("click", () => {
    if (modalDownloadBtn.dataset.modId) {
      openDownloadWarning(modalDownloadBtn.dataset.modId, modalDownloadBtn);
    }
  });

  downloadWarningCancel.addEventListener("click", () => closeDownloadWarning(false));
  downloadWarningConfirm.addEventListener("click", () => closeDownloadWarning(true));

  downloadWarningOverlay.addEventListener("click", (e) => {
    if (e.target === downloadWarningOverlay) closeDownloadWarning(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !downloadWarningOverlay.classList.contains("is-open")) return;
    e.stopPropagation();
    closeDownloadWarning(false);
  });
}

function closeModal() {
  clearModalPreview();
  modalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";

  const onEnd = () => {
    modalOverlay.setAttribute("hidden", "");
    modalOverlay.removeEventListener("transitionend", onEnd);
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  modalOverlay.addEventListener("transitionend", onEnd);
  setTimeout(onEnd, 400);
}

function initTypewriter() {
  let index = 0;
  let deleting = false;

  function tick() {
    if (!deleting) {
      typewriterEl.textContent = TYPEWRITER_TEXT.slice(0, index + 1);
      index++;
      if (index >= TYPEWRITER_TEXT.length) {
        setTimeout(() => {
          deleting = true;
          tick();
        }, TYPEWRITER_PAUSE);
        return;
      }
      setTimeout(tick, TYPEWRITER_SPEED);
    } else {
      index--;
      typewriterEl.textContent = TYPEWRITER_TEXT.slice(0, index);
      if (index <= 0) {
        deleting = false;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, TYPEWRITER_SPEED / 2);
    }
  }

  tick();
}

function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w = 0;
  let h = 0;
  let animationId;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.35 + 0.08,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.45 + 0.08,
      hue: Math.random() > 0.4 ? 270 : 145
    };
  }

  function init() {
    resize();
    const count = Math.min(70, Math.floor((w * h) / 20000));
    particles = Array.from({ length: count }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.y -= p.speedY;
      p.x += p.speedX;
      if (p.y < -10) {
        p.y = h + 10;
        p.x = Math.random() * w;
      }
      if (p.x < 0 || p.x > w) p.speedX *= -1;
    });
    animationId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationId);
    init();
    draw();
  });
}

function initNav() {
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initModal() {
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !modalOverlay.classList.contains("is-open")) return;
    if (downloadWarningOverlay.classList.contains("is-open")) return;
    closeModal();
  });
}

function init() {
  renderMods();
  renderFaq();
  renderInstallSteps();
  initTypewriter();
  initParticles();
  initNav();
  initModal();
  initDownloadWarning();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
