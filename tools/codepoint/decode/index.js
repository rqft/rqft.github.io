const u = new URL(document.URL);
const stdout = document.getElementById("stdout");

const codepoints = u.searchParams.has("q");

if (!codepoints) {
  stdout.innerText = "no text";
} else {
  try {
    const codepoints_decoded = String.fromCodePoint(
      ...u.searchParams
        .get("q")
        .split(",")
        .map((x) => parseInt(x, 16))
    );
    stdout.innerText = codepoints_decoded;
  } catch (e) {
    stdout.innerText = "invalid text";
  }
}
