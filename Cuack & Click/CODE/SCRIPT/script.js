document.addEventListener("DOMContentLoaded", function () {

// ─── ESTADO ───────────────────────────────────────────────
let clicks            = parseInt(localStorage.getItem("clicks"))            || 0;
let clicksHistoricos  = parseInt(localStorage.getItem("clicksHistoricos"))  || 0;
let clicksPorClick    = parseInt(localStorage.getItem("clicksPorClick"))    || 1;
let clicksPorSegundo  = parseInt(localStorage.getItem("clicksPorSegundo"))  || 0;
let tiempoJugado      = parseInt(localStorage.getItem("tiempoJugado"))      || 0;
let logrosDesbloqueados = JSON.parse(localStorage.getItem("logrosDesbloqueados") || "[]");

// ─── UPGRADES CONFIG ──────────────────────────────────────
const UPGRADES = [
    { id: "lago",      emoji: "🏞️", nombre: "Lago",         desc: "+1 CPS — charco tranquilo",            precioBase: 100,   cps: 1,   cpc: 0 },
    { id: "pantano",   emoji: "🌿", nombre: "Pantano",      desc: "+5 CPS — barro rico en patos",          precioBase: 500,   cps: 5,   cpc: 0 },
    { id: "rios",      emoji: "🌊", nombre: "Ríos",         desc: "+10 CPS — corriente de quacks",         precioBase: 1000,  cps: 10,  cpc: 0 },
    { id: "humedales", emoji: "🦢", nombre: "Humedales",    desc: "+25 CPS — paraíso de aves acuáticas",   precioBase: 2500,  cps: 25,  cpc: 0 },
    { id: "delta",     emoji: "🏔️", nombre: "Delta",        desc: "+60 CPS — confluencia poderosa",        precioBase: 8000,  cps: 60,  cpc: 0 },
    { id: "oceano",    emoji: "🌊", nombre: "Océano",       desc: "+150 CPS — infinito pato marino",       precioBase: 25000, cps: 150, cpc: 0 },
    { id: "pico",      emoji: "🦆", nombre: "Pico Duro",    desc: "+1 por click — pico reforzado",         precioBase: 200,   cps: 0,   cpc: 1 },
    { id: "aleta",     emoji: "🪶", nombre: "Alas Rápidas", desc: "+3 por click — aleteo veloz",           precioBase: 800,   cps: 0,   cpc: 3 },
    { id: "turbo",     emoji: "⚡", nombre: "Pato Turbo",   desc: "+8 por click — overdrive de quacks",    precioBase: 3000,  cps: 0,   cpc: 8 },
    { id: "golden",    emoji: "✨", nombre: "Pato Dorado",  desc: "+20 por click — bendición áurea",       precioBase: 12000, cps: 0,   cpc: 20 },
];

<<<<<<< HEAD
const comprados = {};
const precios   = {};
UPGRADES.forEach(u => {
    comprados[u.id] = parseInt(localStorage.getItem("comprado_" + u.id)) || 0;
    precios[u.id]   = parseInt(localStorage.getItem("precio_"   + u.id)) || u.precioBase;
=======
function actualizarBotones() {
    btnLago.textContent    = `Comprar Lago (1 CPS) — Precio: ${precioLago}`;
    btnPantano.textContent = `Comprar Pantano (5 CPS) — Precio: ${precioPantano}`;
    btnRios.textContent    = `Comprar Ríos (10 CPS) — Precio: ${precioRios}`;
    btnHumedales.textContent = `Comprar Humedales (50 CPS) — Precio: ${precioHumedales}`;
}

actualizarBotones();

boton.addEventListener("click", () => {
    clicks += clicksPorClick;
    totalClicks.textContent = clicks;
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("clicksPorClick", clicksPorClick);
    soundCuack();
>>>>>>> 626ad0365b9c211e912c3f3d5dabebe61897286c
});

// ─── LOGROS CONFIG ────────────────────────────────────────
const LOGROS = [
    { id: "primer_click",   emoji: "🐣", nombre: "¡Primer Quack!",    desc: "Haz tu primer click",                 check: () => clicksHistoricos >= 1 },
    { id: "clicks_100",     emoji: "💯", nombre: "Centenario",         desc: "Acumula 100 clicks",                  check: () => clicksHistoricos >= 100 },
    { id: "clicks_1000",    emoji: "🔥", nombre: "Mil Quacks",         desc: "Acumula 1.000 clicks",                check: () => clicksHistoricos >= 1000 },
    { id: "clicks_10k",     emoji: "💎", nombre: "Quackillonario",     desc: "Acumula 10.000 clicks",               check: () => clicksHistoricos >= 10000 },
    { id: "clicks_100k",    emoji: "👑", nombre: "Rey del Quack",      desc: "Acumula 100.000 clicks",              check: () => clicksHistoricos >= 100000 },
    { id: "clicks_1m",      emoji: "🌟", nombre: "Leyenda Pato",       desc: "Acumula 1.000.000 clicks",            check: () => clicksHistoricos >= 1000000 },
    { id: "primer_upgrade", emoji: "🛒", nombre: "Primera Compra",     desc: "Compra tu primer upgrade",            check: () => Object.values(comprados).some(v => v > 0) },
    { id: "5_upgrades",     emoji: "🏪", nombre: "Coleccionista",      desc: "Compra 5 upgrades en total",          check: () => Object.values(comprados).reduce((a,b)=>a+b,0) >= 5 },
    { id: "todos_cps",      emoji: "🌍", nombre: "Imperio Acuático",   desc: "Compra al menos 1 de cada upgrade CPS", check: () => ["lago","pantano","rios","humedales","delta","oceano"].every(id => comprados[id] >= 1) },
    { id: "cps_100",        emoji: "⚙️", nombre: "Máquina de Quacks", desc: "Llega a 100 CPS",                     check: () => clicksPorSegundo >= 100 },
    { id: "cpc_10",         emoji: "👊", nombre: "Golpe de Pato",      desc: "Llega a 10 clicks por click",         check: () => clicksPorClick >= 10 },
    { id: "tiempo_5m",      emoji: "⏳", nombre: "Paciente",           desc: "Juega 5 minutos",                     check: () => tiempoJugado >= 300 },
    { id: "tiempo_30m",     emoji: "🕰️", nombre: "Adicto al Quack",   desc: "Juega 30 minutos",                    check: () => tiempoJugado >= 1800 },
    { id: "golden_duck",    emoji: "✨", nombre: "Pato Dorado",        desc: "Consigue el upgrade Pato Dorado",     check: () => comprados["golden"] >= 1 },
];

// ─── DOM ──────────────────────────────────────────────────
const elClicks         = document.getElementById("totalClicks");
const elCPS            = document.getElementById("cps");
const elPorClick       = document.getElementById("porClick");
const elHistorico      = document.getElementById("clicksHistoricos");
const elTiempo         = document.getElementById("tiempoJugado");
const duckBtn          = document.getElementById("duckBtn");
const buffLista        = document.getElementById("buffLista");
const logrosCount      = document.getElementById("logrosCount");
const logroNotif       = document.getElementById("logroNotif");
const logroNotifNombre = document.getElementById("logroNotifNombre");

// ─── FORMATO NÚMEROS ──────────────────────────────────────
function formatNum(n) {
    if (n >= 1e9) return (n / 1e9).toFixed(2) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(2) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return n.toString();
}
function formatTiempo(s) {
    if (s < 60)   return s + "s";
    if (s < 3600) return Math.floor(s/60) + "m " + (s%60) + "s";
    return Math.floor(s/3600) + "h " + Math.floor((s%3600)/60) + "m";
}

// ─── RENDER UPGRADES ─────────────────────────────────────
function renderUpgrades() {
    buffLista.innerHTML = "";
    UPGRADES.forEach(u => {
        const precio    = precios[u.id];
        const cantidad  = comprados[u.id];
        const puedeComp = clicks >= precio;
        const progreso  = Math.min(clicks / precio, 1);

        const btn = document.createElement("button");
        btn.className = "buff-boton";
        btn.disabled  = !puedeComp;
        btn.id        = "btn_" + u.id;

        btn.innerHTML = `
            <div class="buff-boton-inner">
                <div class="buff-izq">
                    <div class="buff-nombre">${u.emoji} ${u.nombre}</div>
                    <div class="buff-desc">${u.desc}</div>
                </div>
                <div class="buff-der">
                    <div class="buff-precio">🪙 ${formatNum(precio)}</div>
                    <div class="buff-comprados">×${cantidad}</div>
                </div>
            </div>
            <div class="buff-progress-wrap">
                <div class="buff-progress-bar" style="width:${progreso*100}%"></div>
            </div>`;

        btn.addEventListener("click", () => comprar(u.id));
        buffLista.appendChild(btn);
    });
}

function actualizarEstadoUpgrades() {
    UPGRADES.forEach(u => {
        const btn = document.getElementById("btn_" + u.id);
        if (!btn) return;
        const precio    = precios[u.id];
        const puedeComp = clicks >= precio;
        const progreso  = Math.min(clicks / precio, 1);
        btn.disabled    = !puedeComp;
        const bar = btn.querySelector(".buff-progress-bar");
        if (bar) bar.style.width = (progreso * 100) + "%";
        const precioEl = btn.querySelector(".buff-precio");
        if (precioEl) precioEl.textContent = "🪙 " + formatNum(precio);
        const cantEl = btn.querySelector(".buff-comprados");
        if (cantEl) cantEl.textContent = "×" + comprados[u.id];
    });
}

// ─── COMPRAR ──────────────────────────────────────────────
function comprar(id) {
    const u = UPGRADES.find(x => x.id === id);
    if (!u || clicks < precios[id]) return;

    clicks -= precios[id];
    comprados[id]++;
    precios[id] = Math.floor(precios[id] * 1.15);

    if (u.cps > 0) {
        clicksPorSegundo += u.cps;
        elCPS.textContent = formatNum(clicksPorSegundo);
    }
    if (u.cpc > 0) {
        clicksPorClick += u.cpc;
        elPorClick.textContent = formatNum(clicksPorClick);
    }

    guardar();
    actualizarDisplay();
    soundCoin();
    verificarLogros();
}

// ─── DISPLAY ──────────────────────────────────────────────
function actualizarDisplay() {
    elClicks.textContent    = formatNum(clicks);
    elCPS.textContent       = formatNum(clicksPorSegundo);
    elPorClick.textContent  = formatNum(clicksPorClick);
    elHistorico.textContent = formatNum(clicksHistoricos);
    actualizarEstadoUpgrades();
}

// ─── FLOATING NUMBERS ─────────────────────────────────────
function spawnFloat(x, y, texto, esCPS) {
    const el = document.createElement("div");
    el.className = "float-num" + (esCPS ? " cps-tick" : "");
    el.textContent = texto;
    el.style.left = (x - 20) + "px";
    el.style.top  = (y - 20) + "px";
    document.body.appendChild(el);
    el.addEventListener("animationend", () => el.remove());
}

// ─── CLICK HANDLER ────────────────────────────────────────
duckBtn.addEventListener("click", function(e) {
    clicks += clicksPorClick;
    clicksHistoricos += clicksPorClick;
    actualizarDisplay();
    guardar();

    const jitter = (Math.random() - 0.5) * 40;
    spawnFloat(e.clientX + jitter, e.clientY - 10, "+" + formatNum(clicksPorClick), false);

    elClicks.classList.remove("bump");
    void elClicks.offsetWidth;
    elClicks.classList.add("bump");
    setTimeout(() => elClicks.classList.remove("bump"), 150);

    soundCuack();
    verificarLogros();
});

// ─── CPS TICK ─────────────────────────────────────────────
setInterval(function() {
    if (clicksPorSegundo > 0) {
        clicks += clicksPorSegundo;
        clicksHistoricos += clicksPorSegundo;
        actualizarDisplay();
        guardar();

        const rect = duckBtn.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;
        spawnFloat(
            cx + (Math.random() - 0.5) * 60,
            cy + (Math.random() - 0.5) * 60,
            "+" + formatNum(clicksPorSegundo),
            true
        );
        verificarLogros();
    }
}, 1000);

// ─── TIEMPO JUGADO ────────────────────────────────────────
setInterval(function() {
    tiempoJugado++;
    elTiempo.textContent = formatTiempo(tiempoJugado);
    localStorage.setItem("tiempoJugado", tiempoJugado);
    verificarLogros();
}, 1000);

// ─── LOGROS ───────────────────────────────────────────────
let notifQueue  = [];
let notifActiva = false;

<<<<<<< HEAD
function verificarLogros() {
    LOGROS.forEach(l => {
        if (!logrosDesbloqueados.includes(l.id) && l.check()) {
            logrosDesbloqueados.push(l.id);
            localStorage.setItem("logrosDesbloqueados", JSON.stringify(logrosDesbloqueados));
            notifQueue.push(l);
            if (!notifActiva) mostrarSiguienteNotif();
            renderLogros();
            actualizarContadorLogros();
        }
    });
}

function mostrarSiguienteNotif() {
    if (notifQueue.length === 0) { notifActiva = false; return; }
    notifActiva = true;
    const l = notifQueue.shift();
    logroNotifNombre.textContent = l.emoji + " " + l.nombre;
    logroNotif.classList.add("show");
    setTimeout(() => {
        logroNotif.classList.remove("show");
        setTimeout(mostrarSiguienteNotif, 400);
    }, 2800);
}

function renderLogros() {
    const lista = document.getElementById("logrosLista");
    if (!lista) return;
    lista.innerHTML = "";
    LOGROS.forEach(l => {
        const desbloqueado = logrosDesbloqueados.includes(l.id);
        const div = document.createElement("div");
        div.className = "logro-item " + (desbloqueado ? "desbloqueado" : "bloqueado");
        div.innerHTML = `
            <div class="logro-icono">${desbloqueado ? l.emoji : "🔒"}</div>
            <div class="logro-texto">
                <div class="logro-nombre">${l.nombre}</div>
                <div class="logro-desc">${desbloqueado ? l.desc : "???"}</div>
            </div>`;
        lista.appendChild(div);
    });
}

function actualizarContadorLogros() {
    logrosCount.textContent = logrosDesbloqueados.length;
=======
        clicksPorSegundo += 1;
        cps.textContent = clicksPorSegundo;
        localStorage.setItem("clicksPorSegundo", clicksPorSegundo);

        actualizarBotones();
        soundCoind();
    }
}

function comprarPantano() {
    if (clicks >= precioPantano) {
        clicks -= precioPantano;
        totalClicks.textContent = clicks;
        localStorage.setItem("clicks", clicks);

        pantanosComprados++;
        precioPantano = Math.floor(precioPantano * 1.15);
        localStorage.setItem("pantanosComprados", pantanosComprados);
        localStorage.setItem("precioPantano", precioPantano);

        clicksPorSegundo += 5;
        cps.textContent = clicksPorSegundo;
        localStorage.setItem("clicksPorSegundo", clicksPorSegundo);

        actualizarBotones();
        soundCoind();
    }
}

function comprarRios() {
    if (clicks >= precioRios) {
        clicks -= precioRios;
        totalClicks.textContent = clicks;
        localStorage.setItem("clicks", clicks);

        riosComprados++;
        precioRios = Math.floor(precioRios * 1.15);
        localStorage.setItem("riosComprados", riosComprados);
        localStorage.setItem("precioRios", precioRios);

        clicksPorSegundo += 10;
        cps.textContent = clicksPorSegundo;
        localStorage.setItem("clicksPorSegundo", clicksPorSegundo);

        actualizarBotones();
        soundCoind();
    }
}

function comprarHumedales() {
    if (clicks >= precioHumedales) {
        clicks -= precioHumedales;
        totalClicks.textContent = clicks;
        localStorage.setItem("clicks", clicks);

        humedalesComprados++;
        precioHumedales = Math.floor(precioHumedales * 1.15);
        localStorage.setItem("humedalesComprados", humedalesComprados);
        localStorage.setItem("precioHumedales", precioHumedales);

        clicksPorSegundo += 50;
        cps.textContent = clicksPorSegundo;
        localStorage.setItem("clicksPorSegundo", clicksPorSegundo);

        actualizarBotones();
        soundCoind();
    }
>>>>>>> 626ad0365b9c211e912c3f3d5dabebe61897286c
}

// Exponer toggleLogros globalmente para el onclick del HTML
window.toggleLogros = function() {
    const panel = document.getElementById("logrosPanel");
    panel.classList.toggle("visible");
    if (panel.classList.contains("visible")) renderLogros();
};

// ─── RESET ────────────────────────────────────────────────
window.resetGame = function() {
    const confirmado = confirm(
        "¿Seguro que quieres resetear la partida?\n\n" +
        "Se perderá todo:\n" +
        "• " + formatNum(clicks) + " clicks acumulados\n" +
        "• " + formatNum(clicksPorSegundo) + " CPS\n" +
        "• Todos los upgrades\n\n" +
        "Esta acción no se puede deshacer."
    );
    if (!confirmado) return;

    clicks = 0; clicksHistoricos = 0; clicksPorClick = 1;
    clicksPorSegundo = 0; tiempoJugado = 0;
    UPGRADES.forEach(u => { comprados[u.id] = 0; precios[u.id] = u.precioBase; });
    logrosDesbloqueados.length = 0;
    localStorage.clear();

    actualizarDisplay();
    renderUpgrades();
    renderLogros();
    actualizarContadorLogros();
    alert("Partida reseteada. ¡A empezar desde cero, pato!");
<<<<<<< HEAD
};

// ─── GUARDAR ──────────────────────────────────────────────
function guardar() {
    localStorage.setItem("clicks",           clicks);
    localStorage.setItem("clicksHistoricos", clicksHistoricos);
    localStorage.setItem("clicksPorClick",   clicksPorClick);
    localStorage.setItem("clicksPorSegundo", clicksPorSegundo);
    UPGRADES.forEach(u => {
        localStorage.setItem("comprado_" + u.id, comprados[u.id]);
        localStorage.setItem("precio_"   + u.id, precios[u.id]);
    });
}

// ─── SONIDO ───────────────────────────────────────────────
function soundCuack() {
    try { const a = new Audio("../ASSETS/cuack.mp3"); a.volume = 0.5; a.play().catch(()=>{}); } catch(e) {}
}
function soundCoin() {
    try { const a = new Audio("../ASSETS/coin.mp3"); a.volume = 0.6; a.play().catch(()=>{}); } catch(e) {}
}

// ─── INIT ─────────────────────────────────────────────────
actualizarDisplay();
renderUpgrades();
renderLogros();
actualizarContadorLogros();

}); // fin DOMContentLoaded
=======
}

function soundCuack() 
{
    const audio = new Audio('../ASSETS/cuack.mp3');
    audio.play();
}

function soundCoind()
{
    const audio = new Audio('../ASSETS/coin.mp3');
    audio.play();
}
>>>>>>> 626ad0365b9c211e912c3f3d5dabebe61897286c
