// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const textEl = document.getElementById("txtid");
const wordCountEl = document.getElementById("word-count");
const charCountEl = document.getElementById("char-count");
const sentenceCountEl = document.getElementById("sentence-count");
const paraCountEl = document.getElementById("para-count");
const demoTextBtn = document.getElementById("demo-text");
const clearBtn = document.getElementById("clear");
const copyBtn = document.getElementById("copy");
const cbCountSpaces = document.getElementById("count-spaces");
const cbSpellCheck = document.getElementById("spell-check");

let countSpaces = true;

function updateCount() {
  // update character count
  if (countSpaces) charCountEl.textContent = this.value.length;
  else charCountEl.textContent = this.value.replace(/\s+/g, "").length;

  // update word count
  // remove trailing space(s)
  const text = this.value.trim();
  if (text) {
    wordCountEl.textContent = text
      .split(/\s+/)
      .filter((word) => /^[A-Za-z]+/.test(word)).length;

    const sentenceCount = text.match(/\w[.?!](\s|$)/g)?.length;
    if (sentenceCount) sentenceCountEl.textContent = sentenceCount;

    const paraCount = text.replace(/\n$/gm, "").split(/\n/)?.length;
    if (paraCount) paraCountEl.textContent = paraCount;
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

copyBtn.addEventListener("click", function () {
  textEl.focus();
  textEl.select();
  textEl.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(textEl.value).then(
    function () {
      console.log("copy successful");
    },
    function (err) {
      console.log("copy failure");
    }
  );
});

clearBtn.addEventListener("click", function () {
  textEl.value = "";
  textEl.dispatchEvent(new CustomEvent("input"));
});

cbCountSpaces.addEventListener("change", function () {
  countSpaces = this.checked;
  textEl.dispatchEvent(new CustomEvent("input"));
});

cbSpellCheck.addEventListener("change", function () {
  textEl.spellcheck = this.checked;
});
