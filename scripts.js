// Simple power level calculator for Destiny 2

const powercalc = {
  add(a, b, c, d, e, f, g, h) {
    return (
      Number(a) +
      Number(b) +
      Number(c) +
      Number(d) +
      Number(e) +
      Number(f) +
      Number(g) +
      Number(h)
    );
  },
  divide(a) {
    return a / 8;
  },
  remainder(a) {
    return a % 8;
  }
};

const form = document.querySelector("form");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const kinetic = document.querySelector("#kinetic");
const energy = document.querySelector("#energy");
const heavy = document.querySelector("#heavy");
const helmet = document.querySelector("#helmet");
const gauntlet = document.querySelector("#gauntlet");
const chest = document.querySelector("#chest");
const legs = document.querySelector("#legs");
const classitem = document.querySelector("#class");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const total = powercalc.add(
    kinetic.value,
    energy.value,
    heavy.value,
    helmet.value,
    gauntlet.value,
    chest.value,
    legs.value,
    classitem.value
  );

  h2.textContent = powercalc.divide(total).toFixed(1);
  if (powercalc.remainder(total) == 0) {
    h3.textContent = "To Next Level: 8";
  }
  if (powercalc.remainder(total) == 1) {
    h3.textContent = "To Next Level: 7";
  }
  if (powercalc.remainder(total) == 2) {
    h3.textContent = "To Next Level: 6";
  }
  if (powercalc.remainder(total) == 3) {
    h3.textContent = "To Next Level: 5";
  }
  if (powercalc.remainder(total) == 4) {
    h3.textContent = "To Next Level: 4";
  }
  if (powercalc.remainder(total) == 5) {
    h3.textContent = "To Next Level: 3";
  }
  if (powercalc.remainder(total) == 6) {
    h3.textContent = "To Next Level: 2";
  }
  if (powercalc.remainder(total) == 7) {
    h3.textContent = "To Next Level: 1";
  }
});
