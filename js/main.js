const tabella = document.getElementById("table");

const km = document.getElementById("km");
const dom_km = document.getElementById("dom_km");

const anni = document.getElementById("anni");
const dom_eta = document.getElementById("dom_eta");

const btn_calcola = document.getElementById("calcola");

const prezzo = 0.21;
const dom_biglietto = document.getElementById("dom_biglietto");

const dom_minorenni = document.getElementById("dom_minorenni");
const dom_value_minorenni = document.getElementById("dom_value_minorenni");

const dom_sessanta = document.getElementById("dom_sessanta");
const dom_value_sessanta = document.getElementById("dom_value_sessanta");

const minorenni = 18;
const scontoMinorenni = 20;

const sessanta = 65;
const scontoSessanta = 40;

btn_calcola.onclick = () => {

    dom_minorenni.style.display = "none";
    dom_sessanta.style.display = "none";

    if (km.value.length <= 0 || anni.value.length <= 0) {
        tabella.style.display = "none";
    } else {
        tabella.style.display = "block"
        dom_km.innerHTML = km.value;
        dom_eta.innerHTML = anni.value;
        dom_biglietto.innerHTML = "€" + prezzo;
        if (parseInt(anni.value) < minorenni) {
            dom_minorenni.style.display = "flex";
            dom_value_minorenni.innerHTML = "-" + scontoMinorenni + "%"
        }

        if (parseInt(anni.value) >= sessanta) {
            dom_sessanta.style.display = "flex";
            dom_value_sessanta.innerHTML = "-" + scontoSessanta + "%"
        }
    }
}