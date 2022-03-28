//#region Utilities
const inverse = (x) => 1 / x;
const clamp = (x, min, max) => Math.min(Math.max(x, min), max);
const isInbound = (x, y, minX, minY, maxX, maxY) =>
  x < minX || x > maxX || y < minY || y > maxY;
const readFile = (path) => fetch(path).then((response) => response.json());

const createContentTree = (tree, element) => {
  let ret = [];
  for (let [key, value] of Object.entries(tree)) {
    ret.push(`${key}`);
    for (let [name, child] of Object.entries(value)) {
      ret.push(`${tab(4)} / <a href="${child}" class="__link">${name}</a>`);
    }
  }
  element.innerHTML = ret.join("<br>");
};

////#endregion

//#region Constants
const ZERO_WIDTH_SPACE = "\u200B";
const SPACE = " ";
const FILLER_TAB = ZERO_WIDTH_SPACE + SPACE;
function tab(n) {
  return FILLER_TAB.repeat(n);
}

/**
 *
 * @param {number} width
 * @param {number} height
 * @returns {{width: number, height: number, ratio: number}}
 */
function ratio(width, height) {
  return { width, height, value: width / height };
}
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
const page_loader = document.getElementById("page-loader");
const people_loader = document.getElementById("people-loader");
const container = document.getElementById("container");
const window_resize_error = document.getElementById("window-size-error");
const container_content = document.getElementById("content");
//#endregion

//#region Link Loader
(async () => {
  const links = await readFile("./i/json/links.json");
  return createContentTree(links, link_loader);
})();
//#endregion

//#region Page Loader
(async () => {
  const pages = await readFile("./i/json/pages.json");
  return createContentTree(pages, page_loader);
})();
//#endregion

//#region People Loader
(async () => {
  const people = await readFile("./i/json/people.json");
  return createContentTree(people, people_loader);
})();
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
  if (isInbound(width, height, MINUMUM_WIDTH, MINUMUM_HEIGHT, width, height)) {
    window_resize_error.classList.remove("hidden");
    container_content.classList.add("hidden");
  } else {
    window_resize_error.classList.add("hidden");
    container_content.classList.remove("hidden");
  }
}

// onResize(window, new UIEvent("resize", { view: window }));
// window.addEventListener("resize", onResize);

//#endregion
