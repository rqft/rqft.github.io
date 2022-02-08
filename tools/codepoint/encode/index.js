const u = new URL(document.URL);
const stdout = document.getElementById("stdout");

const codepoints = u.searchParams.has("q");

if (!codepoints) {
  stdout.innerText = "no text";
} else {
  try {
    const codepoints_encoded = u.searchParams
      .get("q")
      .split("")
      .map((x) => "\\x" + x.codePointAt(0).toString(16))
      .join("");
    stdout.innerText = codepoints_encoded;
  } catch (e) {
    stdout.innerText = "invalid text";
  }
}
