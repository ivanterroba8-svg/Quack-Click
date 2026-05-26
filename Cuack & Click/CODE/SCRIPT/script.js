let clicks = parseInt(localStorage.getItem("clicks")) || 0;
let clicksPorClick = parseInt(localStorage.getItem("clicksPorClick")) || 1;
let clicksPorSegundo = parseInt(localStorage.getItem("clicksPorSegundo")) || 0;

const boton = document.getElementById("duckBtn");
const totalClicks = document.getElementById("totalClicks"); // ← estaba como "totalClcks"
const cps = document.getElementById("cps");

totalClicks.textContent = clicks;
cps.textContent = clicksPorSegundo; // ← mostrar CPS inicial

boton.addEventListener("click", () => {
    clicks += clicksPorClick;
    totalClicks.textContent = clicks;
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("clicksPorClick", clicksPorClick);
});

// ← setInterval para que se ejecute cada segundo
setInterval(() => {
    if (clicksPorSegundo > 0) {
        clicks += clicksPorSegundo;
        totalClicks.textContent = clicks;
        localStorage.setItem("clicks", clicks);
    }
}, 1000);

function comprarLago() 
{
    clicksPorSegundo += 1;
    cps.textContent = clicksPorSegundo;
    localStorage.setItem("clicksPorSegundo", clicksPorSegundo);
}

function comprarPantano() 
{
    clicksPorSegundo += 5;
    cps.textContent = clicksPorSegundo;
    localStorage.setItem("clicksPorSegundo", clicksPorSegundo);
}

function comprarRios() 
{
    clicksPorSegundo += 10;
    cps.textContent = clicksPorSegundo;
    localStorage.setItem("clicksPorSegundo", clicksPorSegundo);
}

function comprarCPS(cantidad) 
{
    clicksPorSegundo += cantidad;
    cps.textContent = clicksPorSegundo;
    localStorage.setItem("clicksPorSegundo", clicksPorSegundo);
}