//detecting button press
var noOfDrus = document.querySelectorAll(".drum").length;



for(var i = 0;i<noOfDrus;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonClicked = this.innerHTML;
        makesound(buttonClicked);
        buttonAnimation(buttonClicked);
    })
}
//detecting keyboard press
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

//function to play sounds
function makesound(key){ 

    
    
    switch(key){
    case "w":
    var tom1 =new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
            
    case "a":
    var tom2 =new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 =new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 =new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
           
    var snare =new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var crash =new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "l":
    var kickbass =new Audio("sounds/kick-bass.mp3");
    kickbass.play();
    break;
    default:;    
    }
           
 }

 function buttonAnimation(keypress){
    var activeButton = document.querySelector("."+keypress);
    //for eg when w is pressed active button becomes .w

    activeButton.classList.add("pressed");
    //and an extra class of pressed is added to the active button
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
 }
            
            
            
// this.style.color = "blue";
// var audio = new Audio("sounds/crash.mp3");
// audio.play();
            
// document.querySelector("button").addEventListener("click",handleClick);

//^^ finds the 1st button in the html doc and listens for a click and runs the function handleClick & we don't use handleClick() as it calls the function straight up without listening for an event

//Alternate way to write above statement is 
//document.querySelector("button").addEventListener("click",function(){alert("I got clicked")});

// function handleClick(){
//     alert("i got clicked");
// }