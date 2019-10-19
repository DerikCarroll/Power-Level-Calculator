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
