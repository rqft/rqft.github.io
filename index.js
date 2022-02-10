const link_loader = document.getElementById("link-loader");
const links = {
  github: "https://github.com/HighArcs",
  organization: "https://github.com/rqft",
  discord: "Arcs#4587",
  twitter: "https://twitter.com/HighArcs",
};
function isUrl(uri) {
  return uri.startsWith("http://") || uri.startsWith("https://");
}
let ret = [];
for (let key in links) {
  let value = links[key];
  console.log(value);
  let str = key;
  if (isUrl(value)) {
    str = `<a href="${value}" target="_blank" class="underline text-blue-400">${key}</a>`;
  }
  ret.push(str);
}
link_loader.innerHTML = ret.join(" | ");
