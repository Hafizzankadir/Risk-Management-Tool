// variable

let pip5;
let pip10;
let pip15;
let pip20;
let pip25;
let pip30;
let pip35;
let pip40;

let risk;
let capital;

// risk input & risk capital

addEventListener("submit", (event) => {
  event.preventDefault;

  const riskValue = document.getElementById("risk").value;
  const capitalValue = document.getElementById("capital").value;

  localStorage.setItem("risk", riskValue);
  localStorage.setItem("capital", capitalValue);
});

risk = localStorage.getItem("risk");
capital = localStorage.getItem("capital");

// Risk % to Risk $

let riskValue = (risk / 100) * capital;

// Calculate lot Size

pip5 = Math.round((riskValue / 50) * 100) / 100;
pip10 = Math.round((riskValue / 100) * 100) / 100;
pip15 = Math.round((riskValue / 150) * 100) / 100;
pip20 = Math.round((riskValue / 200) * 100) / 100;
pip25 = Math.round((riskValue / 250) * 100) / 100;
pip30 = Math.round((riskValue / 300) * 100) / 100;
pip35 = Math.round((riskValue / 350) * 100) / 100;
pip40 = Math.round((riskValue / 4000) * 100) / 100;

// Output to DOM

document.getElementById("capitalOutput").innerHTML = capital;
document.getElementById("riskOutput").innerHTML = risk;

document.getElementById("pip5").innerHTML = pip5;
document.getElementById("pip10").innerHTML = pip10;
document.getElementById("pip15").innerHTML = pip15;
document.getElementById("pip20").innerHTML = pip20;
document.getElementById("pip25").innerHTML = pip25;
document.getElementById("pip30").innerHTML = pip30;
document.getElementById("pip35").innerHTML = pip35;
document.getElementById("pip40").innerHTML = pip40;
