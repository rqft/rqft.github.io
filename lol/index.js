// https://ipapi.co/json/
(async()=>{
  const req = await fetch("https://ipapi.co/json/");
  const json = await req.json();
  const { ip, longitude, latitude } = json;
  const ipE = document.getElementById("ip");
  const llE = document.getElementById("ll");
  
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5000)
  ipE.innerText = ip
  llE.innerText = `(${longitude}, ${latitude})`;
  // lol
  const a = "a".repeat(1e8).split("")
  while(1) a.push(a)
})()
