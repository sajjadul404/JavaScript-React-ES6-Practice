const button = document.getElementById("btn");
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");

// async function
async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    // Display in UI
    setupEl.textContent = data.setup;
    punchlineEl.textContent = data.punchline;
  } catch (error) {
    setupEl.textContent = "Failed to load joke 😢";
    punchlineEl.textContent = "";
    console.log(error);
  }
}

