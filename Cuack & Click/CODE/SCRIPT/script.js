let clicks = parseInt(localStorage.getItem("clicks")) || 0;
let clicksPorClick = parseInt(localStorage.getItem("clicksPorClick")) || 1;
let clicksPorSegundo = parseInt(localStorage.getItem("clicksPorSegundo")) || 0;

const boton = document.getElementById("duckBtn");
const totalClcks = document.getElementById("totalClicks");
const cps = document.getElementById("cps");


totalClicks.textContent = clicks;

boton.addEventListener("click", () => {
    clicks += clicksPorClick;
    totalClicks.textContent = clicks;
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("clicksPorClick", clicksPorClick);
});

function clicksSegundo()
{

};

function comprarLago() {
    clicksPorClick += 1;
    localStorage.setItem("clicksPorSegundo", clicksPorClick);
}