var movement = document.getElementById("items");
var maxScrollLeft = movement.scrollWidth - movement.clientWidth;
var intervalo;

const start = () => {
let step = 1;
  intervalo = setInterval(function () {
    movement.scrollLeft = movement.scrollLeft + step;
	if (movement.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (movement.scrollLeft === 0){
      step = step * -1; 
    }
  }, 10);
};

//start();
