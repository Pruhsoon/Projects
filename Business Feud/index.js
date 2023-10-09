//detecting button press
var noOfDrus = document.querySelectorAll(".drum").length;



for(var i = 0;i<noOfDrus;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonClicked = this.innerHTML;
        makesound(buttonClicked);
        pressed(buttonClicked);
    })
}
//detecting keyboard press
document.addEventListener("keydown",function(event){
    makesound(event.key);
  
    pressed(event.key);
})

//function to play sounds
function makesound(key){ 
  switch(key){
    case "1":
    var right = new Audio("correct.mp3");
  right.play();
 break;
          
  case "2":var right = new Audio("correct.mp3");
  right.play();

  break;
  case "3":var right = new Audio("correct.mp3");
  right.play();

  break;
  case "4":var right = new Audio("correct.mp3");
  right.play();

  break;
  case "5": var right = new Audio("correct.mp3");
  right.play();       

  break;
  case "6":var right = new Audio("correct.mp3");
  right.play();

  break;
  case "x":
  var wrong =new Audio("invalid-selection-39351.mp3");
  wrong.play();
  break;
  default:;    
  }

 }

 function pressed(currentKey) {
  var activeButton = document.querySelector(".drum-" + currentKey);

    activeButton.classList.add("pressed");

 
}  


document.addEventListener('keydown', function (event) {
  if (event.key.toLowerCase() === 'x') {
    var xImage = document.getElementById('xImage');
    xImage.style.display = 'block';  // Display the image

    setTimeout(function () {
      xImage.style.display = 'none';  // Hide the image after 1 second
    }, 1000);
  }
});

//   setTimeout(function () {
//     activeButton.classList.remove("pressed");
//   }, 1000);     
            
