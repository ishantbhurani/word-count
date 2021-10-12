// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const textEl = document.getElementById("txtid");
const wordCountEl = document.getElementById("word-count");
const charCountEl = document.getElementById("char-count");

function updateCount() {
  // update character count
  charCountEl.textContent = this.value.length;

  // update word count
  // remove trailing space(s)
  const text = this.value.trim();
  if (text) {
    wordCountEl.textContent = text
      .split(/\s+/)
      .filter((word) => /^[A-Za-z]+/.test(word)).length;
  } else {
    wordCountEl.textContent = "0";
  }
}

textEl.addEventListener("input", updateCount);
