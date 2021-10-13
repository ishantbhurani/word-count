// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const textEl = document.getElementById("txtid");
const wordCountEl = document.getElementById("word-count");
const charCountEl = document.getElementById("char-count");
const sentenceCountEl = document.getElementById("sentence-count");
const paraCountEl = document.getElementById("para-count");
const demoTextBtn = document.getElementById("demo-text");

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
    sentenceCountEl.textContent = text.match(/\w[.?!](\s|$)/g).length;
    paraCountEl.textContent = text.replace(/\n$/gm, "").split(/\n/).length;
  } else {
    wordCountEl.textContent = "0";
    sentenceCountEl.textContent = "0";
    paraCountEl.textContent = "0";
  }
}

textEl.addEventListener("input", updateCount);

demoTextBtn.addEventListener("click", function () {
  textEl.value =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat cum modi quae, eligendi eius voluptates doloribus aliquid eos sequi sunt voluptatum quam natus non! Nobis laborum harum quisquam dolorem saepe quibusdam ipsam eaque hic, maxime temporibus reiciendis porro recusandae blanditiis magni doloremque earum distinctio dignissimos quaerat incidunt repudiandae et.";
  textEl.dispatchEvent(new CustomEvent("input"));
});
