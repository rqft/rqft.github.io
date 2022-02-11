const link_loader = document.getElementById("link-loader");
const links = {
  GitHub: {
    url: "https://github.com/HighArcs",
    name: "Github / HighArcs",
  },
  Organization: {
    url: "https://github.com/rqft",
    name: "GitHub / rqft",
  },
  Discord: {
    url: null,
    name: "Discord / Arcs#4587",
  },
  Twitter: {
    url: "https://twitter.com/HighArcs",
    name: "Twitter / HighArcs",
  },
};
function isUrl(uri) {
  return uri.startsWith("http://") || uri.startsWith("https://");
}
let ret = [];
for (let key in links) {
  let value = links[key];
  if (value.url) {
    ret.push(
      `<a href="${value.url}" target="_blank" class="text-blue-400">${value.name}</a>`
    );
  } else {
    ret.push(`<span>${value.name}</span>`);
  }
}
link_loader.innerHTML = ret.join("<br>");
