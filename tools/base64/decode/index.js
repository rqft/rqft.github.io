const u = new URL(document.URL);
const stdout = document.getElementById("stdout");
console.log(u);
const b64 = u.searchParams.has("q");

if (!b64) {
  stdout.innerText = "no text";
} else {
  try {
    const b64_decoded = atob(u.searchParams.get("q"));
    stdout.innerText = b64_decoded;
  } catch (e) {
    stdout.innerText = "invalid base64";
  }
}
