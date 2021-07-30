const tabella = document.getElementById("table");

const eh = document.getElementById("eh")

const km = document.getElementById("km");

const dom_km = document.getElementById("dom_km");

const anni = document.getElementById("anni");
const dom_eta = document.getElementById("dom_eta");

const btn_calcola = document.getElementById("calcola");
const dom_biglietto = document.getElementById("dom_biglietto");

const dom_minorenni = document.getElementById("dom_minorenni");
const dom_value_minorenni = document.getElementById("dom_value_minorenni");

const dom_sessanta = document.getElementById("dom_sessanta");
const dom_value_sessanta = document.getElementById("dom_value_sessanta");

const dom_value_tot = document.getElementById("dom_value_tot");

const minorenni = 18;
const scontoMinorenni = 20;

const sessanta = 65;
const scontoSessanta = 40;

km.min = 1;
km.max = 9999;

anni.min = 1;
anni.max = 999;



btn_calcola.onclick = () => {

    var prezzo = 0.21;
    dom_minorenni.style.display = "none";
    dom_sessanta.style.display = "none";

    if (km.value.length <= 0 ||
        anni.value.length <= 0 ||
        parseInt(km.value) < km.min ||
        parseInt(km.value) > km.max ||
        parseInt(anni.value) < anni.min ||
        parseInt(anni.value) > anni.max
    ) {
        tabella.style.display = "none";
        eh.play();
    }
    else {
        tabella.style.display = "block"
        dom_km.innerHTML = km.value;
        dom_eta.innerHTML = anni.value;
        dom_biglietto.innerHTML = "€" + prezzo;
        prezzo *= parseInt(km.value);
        if (parseInt(anni.value) < minorenni) {
            dom_minorenni.style.display = "flex";
            dom_value_minorenni.innerHTML = "-" + scontoMinorenni + "%";
            prezzo -= (prezzo * (scontoMinorenni / 100));
        }
        else if (parseInt(anni.value) >= sessanta) {
            dom_sessanta.style.display = "flex";
            dom_value_sessanta.innerHTML = "-" + scontoSessanta + "%";
            prezzo -= (prezzo * (scontoSessanta / 100));
        }
        dom_value_tot.innerHTML = "€" + prezzo.toFixed(2);
    }
}