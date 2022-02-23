function on() {
  const date = new Date();

  const timeOutput = document.getElementById("time");
  const dateOutput = document.getElementById("date");

  function toc(a, n = 2) {
    return a.toString(16).padStart(n, "0");
  }

  const color = parseInt(
    toc(date.getHours()) + toc(date.getMinutes()) + toc(date.getSeconds()),
    16
  );
  document.body.style.backgroundColor = `#${color.toString(16)}`;
  timeOutput.innerText = `${date.toLocaleTimeString(undefined, {
    hour12: false,
  })} #${color.toString(16)}`;
  dateOutput.innerText = date.toLocaleDateString();
  const textCol = color > 0x888888 ? "black" : "white";
  timeOutput.style.color = textCol;
  dateOutput.style.color = textCol;
}
setInterval(on, 1);
