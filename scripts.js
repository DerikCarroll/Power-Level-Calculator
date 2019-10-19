// Simple power level calculator for Destiny 2.

// Object literal of calculator functions needed to calculate guardian power level.
const powercalc = {
  // Add to get total power of all gear combined.
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
  // Use total power to find average balance of power between equipment.
  divide(a) {
    return a / 8;
  },
  // Use the remained to calculate how much to next power level.
  remainder(a) {
    return a % 8;
  }
};

// All the const variables needed from the html form to run calculations.
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

// Listen for a submit event on the form to run callback functions.
form.addEventListener("submit", function(event) {
  // Used to stop webpage from trying to actually submit the form.
  event.preventDefault();

  // callback function to find total power of all equipment combined.
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

  // Use remainder and an if statement to display how much power is needed to get to the next power level.
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

// https://www.w3schools.com/js/js_if_else.asp
// Was used to figure out the right syntax for an IF statement in javascript.
// For the .toFixed(), I took what I knew of .toString from C# and let autofill help me to find the right one.
// Bit of a brute force method, but for a small project like this it worked for me.
