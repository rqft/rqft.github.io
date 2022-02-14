//#region Utilities
const inverse = (x) => 1 / x;
////#endregion

//#region Constants
const ZERO_WIDTH_SPACE = "\u200B";
const SPACE = " ";
const FILLER_TAB = ZERO_WIDTH_SPACE + SPACE;
const tab = (n) => FILLER_TAB.repeat(n);

const AVERAGE_SCREEN_RATIO = 16 / 9;

const MINUMUM_WIDTH = 960;
const MINUMUM_HEIGHT = MINUMUM_WIDTH * inverse(AVERAGE_SCREEN_RATIO);
//#endregion

//#region Elements
const link_loader = document.getElementById("link-loader");
const container = document.getElementById("container");
//#endregion

const links = {
  GitHub: {
    HighArcs: "https://github.com/HighArcs",
    Organization: "https://github.com/rqft",
  },
  Discord: {
    HighArcs: "https://discord.com/@me/users/:id",
    Hanas: "https://discord.gg/:id",
    Frequence: "https://discord.gg/:id",
  },
  Twitter: {
    HighArcs: "https://twitter.com/HighArcs",
  },
};

//#region Link Loader
let ret = [];
for (let [name, _links] of Object.entries(links)) {
  ret.push(`${name}`);
  for (let [name, link] of Object.entries(_links)) {
    ret.push(`${tab(4)} / <a href="${link}" class="__link">${name}</a>`);
  }
}
link_loader.innerHTML = ret.join("<br>");
//#endregion

//#region Window Resize

const width = window.innerWidth;
const height = window.innerHeight;
if (width < MINUMUM_WIDTH || height < MINUMUM_HEIGHT) {
  const h1 = document.createElement("h1");
  h1.innerText("yea");
  container.innerHTML = h1.innerHTML;
}

//#endregion
