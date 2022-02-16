//#region Utilities
const inverse = (x) => 1 / x;
const clamp = (x, min, max) => Math.min(Math.max(x, min), max);
const isInbound = (x, y, mw, mh, w, h) => x >= mw && y >= mh && x < w && y < h;

////#endregion

//#region Constants
const ZERO_WIDTH_SPACE = "\u200B";
const SPACE = " ";
const FILLER_TAB = ZERO_WIDTH_SPACE + SPACE;
const tab = (n) => FILLER_TAB.repeat(n);

/**
 *
 * @param {number} width
 * @param {number} height
 * @returns {{width: number, height: number, ratio: number}}
 */
const ratio = (width, height) => ({ width, height, value: width / height });
const RATIOS = {
  square: ratio(1, 1),
  old: ratio(4, 3),
  oldInverse: ratio(3, 4),
  desktop: ratio(16, 9),
  desktopWide: ratio(21, 9),
  desktopInverse: ratio(9, 16),
  desktopWideInverse: ratio(9, 21),
};

const MINUMUM_WIDTH = 500;
const MINUMUM_HEIGHT = 600;

const verifyRatio = (w, h, r) => {
  return ratio(w, h).value === r;
};
//#endregion

//#region Elements
const link_loader = document.getElementById("link-loader");
const container = document.getElementById("container");
const window_resize_error = document.getElementById("window-size-error");
const container_content = document.getElementById("content");
//#endregion

const links = {
  GitHub: {
    HighArcs: "https://github.com/HighArcs",
    Organization: "https://github.com/rqft",
  },
  Discord: {
    Arcs: "https://discord.com/@me/users/:id",
    Hanas: "https://discord.gg/:id",
    Frequence: "https://discord.gg/:id",
  },
  Twitter: {
    "@HighArcs": "https://twitter.com/HighArcs",
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

/**
 *
 * @param {GlobalEventHandlers} that
 * @param {UIEvent} ui
 */
function onResize(that, ui) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (
    isInbound(width, height, MINUMUM_WIDTH, MINUMUM_HEIGHT, Infinity, Infinity)
  ) {
    window_resize_error.classList.remove("hidden");
    container_content.classList.add("hidden");
  } else {
    window_resize_error.classList.add("hidden");
    container_content.classList.remove("hidden");
  }
}

onResize();
window.addEventListener("resize", onResize);

//#endregion
