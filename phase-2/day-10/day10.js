const btn = document.getElementById("btn");
const jokeText = document.getElementById("joke");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");

btn.addEventListener("click", fetchJoke);

async function fetchJoke() {
  // reset UI
  jokeText.textContent = "";
  errorText.textContent = "";
  loadingText.style.display = "block";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    jokeText.textContent = `${data.setup} 😂 ${data.punchline}`;
  } 
  catch (error) {
    errorText.textContent = "Error: " + error.message;
  } 
  finally {
    loadingText.style.display = "none";
  }
}