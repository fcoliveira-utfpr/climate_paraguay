// ClimaTec PY — menu e utilidades compartilhadas por index.html e mapa.html.
function toggleMenu() { document.getElementById("main-menu").classList.toggle("hidden"); }
document.addEventListener("click", e => {
  const m = document.getElementById("main-menu"), b = document.getElementById("menu-toggle-btn");
  if (m && !m.classList.contains("hidden") && !m.contains(e.target) && !b.contains(e.target)) m.classList.add("hidden");
});

function irPara(pagina) {
  const u = new URL(pagina, location.href); u.searchParams.set("lang", LANG); location.href = u.toString();
}

const fmt = (v, d = 1) => (v === null || v === undefined || v === "" || isNaN(v)) ? "—"
  : Number(v).toLocaleString(LOCALE[LANG], { minimumFractionDigits: d, maximumFractionDigits: d });

function iconesLucide() { if (typeof lucide !== "undefined") lucide.createIcons(); }
