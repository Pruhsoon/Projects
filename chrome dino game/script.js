const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

let isAlive = setInterval(function () {
  // this gets the current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // this gets the current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detects collision when cactus is in between 0&50px from the left
  // and the dinotop is 140px from top or lower
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);


// when it registers a keystroke it performs jump
document.addEventListener("keydown", function (event) {
  jump();
});