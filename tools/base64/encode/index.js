const u = new URL(document.URL);
const stdout = document.getElementById("stdout");
console.log([...u.searchParams.entries()].map(([k, v]) => `${k}=${v}`));
const b64 = u.searchParams.has("q");

if (!b64) {
  stdout.innerText = "no text";
} else {
  try {
    const b64_encoded = btoa(u.searchParams.get("q"));
    stdout.innerText = b64_encoded;
  } catch (e) {
    stdout.innerText = "invalid text";
  }
}
