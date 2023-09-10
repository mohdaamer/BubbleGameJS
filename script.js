function makebubble() {
  let clutter = "";
  for (i = 1; i <= 126; i++) {
    let number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${number}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
makebubble();

let timer = 60; 
var timeout = function maketimer(){
    setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent = timer;
        } else {
            clearInterval(timeout);
        }
    }, 1000);
}
maketimer();

function newhit(){
    let random = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = random;
}
newhit();
