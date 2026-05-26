let clicks = parseInt(localStorage.getItem("clicks")) || 0;
let clicksPorClick = parseInt(localStorage.getItem("clicksPorClick")) || 1;
let clicksPorSegundo = parseInt(localStorage.getItem("clicksPorSegundo")) || 0;
let lagosComprados = parseInt(localStorage.getItem("lagosComprados")) || 0;
let pantanosComprados = parseInt(localStorage.getItem("pantanosComprados")) || 0;
let riosComprados = parseInt(localStorage.getItem("riosComprados")) || 0;
let precioLago = parseInt(localStorage.getItem("precioLago")) || 100;
let precioPantano = parseInt(localStorage.getItem("precioPantano")) || 500;
let precioRios = parseInt(localStorage.getItem("precioRios")) || 1000;

const boton = document.getElementById("duckBtn");
const totalClicks = document.getElementById("totalClicks");
const cps = document.getElementById("cps");
const btnLago = document.getElementById("btnLago");
const btnPantano = document.getElementById("btnPantano");
const btnRios = document.getElementById("btnRios");

totalClicks.textContent = clicks;
cps.textContent = clicksPorSegundo;

function actualizarBotones() {
    btnLago.textContent    = `Comprar Lago (1 CPS) — Precio: ${precioLago}`;
    btnPantano.textContent = `Comprar Pantano (5 CPS) — Precio: ${precioPantano}`;
    btnRios.textContent    = `Comprar Ríos (10 CPS) — Precio: ${precioRios}`;
}

actualizarBotones();

boton.addEventListener("click", () => {
    clicks += clicksPorClick;
    totalClicks.textContent = clicks;
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("clicksPorClick", clicksPorClick);
});

setInterval(() => {
    if (clicksPorSegundo > 0) {
        clicks += clicksPorSegundo;
        totalClicks.textContent = clicks;
        localStorage.setItem("clicks", clicks);
    }
}, 1000);

function comprarLago() {
    if (clicks >= precioLago) {
        clicks -= precioLago;
        totalClicks.textContent = clicks;
        localStorage.setItem("clicks", clicks);

        lagosComprados++;
        precioLago = Math.floor(precioLago * 1.15);
        localStorage.setItem("lagosComprados", lagosComprados);
        localStorage.setItem("precioLago", precioLago);

        clicksPorSegundo += 1;
        cps.textContent = clicksPorSegundo;
        localStorage.setItem("clicksPorSegundo", clicksPorSegundo);

        actualizarBotones();
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
    }
}

function comprarCPS(cantidad) {
    clicksPorClick += cantidad;
    cps.textContent = clicksPorSegundo;
    localStorage.setItem("clicksPorSegundo", clicksPorSegundo);
}