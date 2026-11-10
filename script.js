// Assignment 3: Interactive Blacksmith — The Tiny Forge

// PLAN: Select the page controls and display elements.
// PLAN: Keep heat and sword count in JavaScript state.
// PLAN: For Add heat, read the input, convert it to a number, and validate it.
// PLAN: Call the existing game function only when the input is valid.
// PLAN: For Make sword and Reset forge, call the existing game functions.
// PLAN: Update the page after each action and show feedback in the workshop log.

// 1. Select the page elements.
const forge = document.querySelector("#forge");
const heatValue = document.querySelector("#heat-value");
const swordCount = document.querySelector("#sword-count");
const forgeStatus = document.querySelector("#forge-status");
const forgeImage = document.querySelector("#forge-image");
const actionMessage = document.querySelector("#action-message");

const heatInput = document.querySelector("#heat-input");
const addHeatButton = document.querySelector("#add-heat");
const makeSwordButton = document.querySelector("#make-sword");
const resetForgeButton = document.querySelector("#reset-forge");

// These variables connect the buttons and input to the page.

// 2. Store the game state.
let heat = 20;
let swords = 0;

// 3. Return the correct forge status for the current heat.
function getForgeStatus(currentHeat) {
  if (currentHeat < 30) {
    return "Too cold";
  } else if (currentHeat < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

// 4. Update all visual parts of the forge to match the game state.
function updateForge() {
  heatValue.textContent = heat;
  swordCount.textContent = swords;

  const status = getForgeStatus(heat);
  forgeStatus.textContent = status;

  // Remove every status class first so only one can be active.
  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

// 5. Reset the game state, input, feedback, and display.
function resetForge() {
  heat = 20;
  swords = 0;
  // Clear the input and old message when the game is reset.
  heatInput.value = "";
  actionMessage.textContent = "";

  updateForge();
}

// 6. Add heat without allowing the forge to exceed 100.
function heatForge(amount) {
  heat = Math.min(heat + amount, 100);

  actionMessage.textContent = `Heating complete. The forge is at ${heat} heat.`;
  updateForge();
}

// 7. Make exactly one sword when at least 30 heat is available.
function makeSword() {
  if (heat >= 30) {
    heat -= 30;
    swords += 1;
    actionMessage.textContent = "You forged one sword successfully!";
  } else {
    actionMessage.textContent =
      "Not enough heat. Add more heat before making a sword.";
  }

  updateForge();
}

// 8. Handle the Add heat button and validate the user's input.
// Run this code when the player clicks Add heat.
addHeatButton.addEventListener("click", function () {
  // Read the input and turn its text into a number.
  const enteredValue = heatInput.value.trim();
  const amount = Number(enteredValue);

  // Reject empty, non-finite, zero, negative, and decimal values.
  if (
    enteredValue === "" ||
    !Number.isFinite(amount) ||
    !Number.isInteger(amount) ||
    amount <= 0
  ) {
    // Show an error without changing the heat or sword count.
    actionMessage.textContent =
      "Invalid amount. Enter a positive whole number of heat (for example, 10).";
    return;
  }

  // Pass valid input to the existing game function.
  heatForge(amount);
});

// 9. Connect the Make sword button to the existing game function.
// Run the sword-making function when the player clicks Make sword.
makeSwordButton.addEventListener("click", function () {
  makeSword();
});

// 10. Connect the Reset forge button to the existing reset function.
// Reset the game when the player clicks Reset forge.
resetForgeButton.addEventListener("click", function () {
  resetForge();
});

// 11. Start the page with 20 heat, zero swords, and an empty message.
resetForge();
