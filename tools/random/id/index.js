const out = document.getElementById("out");
const id = Date.now();

out.innerHTML = id % (~~Math.PI * 100000);
