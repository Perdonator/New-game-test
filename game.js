const player = document.getElementById("myBox");
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
  
  if(event.key.startswith(Arrow)){
    
    switch(event.key){
      case "ArrowUp":
        y -= moveAmount;
        break;
        case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;   
    }
    
    player.style.top = '${y}px';
    player.style.left = '${x}px';
    
  }
})