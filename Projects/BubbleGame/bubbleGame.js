// MAKE BUBBLE
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 102; i++) {
    randomNum = Math.floor(Math.random() * 10);
    // console.log(`randomNum = ${randomNum}`);
    clutter += `<div class="bubble" id="bubble1">
    <p>${randomNum}</p>
</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}
makeBubble();

// HIT
function setHit() {
  var hit = Math.floor(Math.random() * 10);
  document.getElementById("playHit").textContent = hit;
  return hit;
}
var hit = setHit();

// TIMER
function runTimer() {
  var seconds = 60;
  var timer = seconds;
  var setIntv = setInterval(() => {
    document.getElementById("playTimer").textContent = timer;
    if (timer > 0) {
      timer--;
    } else if (timer === 0) {
      // END THE GAME
      document.querySelector(
        "#pbottom"
      ).innerHTML = `<h1>GAME OVER : Your Score is ${score}<h1>`;
      // PLAY CONTINOUSLY : need to check not fully functional
      //   alert(`Your score is ${score}`);
      //   makeBubble();
      //   setHit();
      //   timer = seconds;
      //   score = 0;
      //   document.getElementById("playScore").textContent = score;
    } else {
    }
  }, 1000);
}
runTimer();

// SCORE
var score = 0;
function finalScore() {
  score += 10;
  document.getElementById("playScore").textContent = score;
}
// CHECK THE CLICKED BUBBLE
document.getElementById("pbottom").addEventListener("click", (event) => {
  var clickedBubble = event.target;
  clickedBubble.style.backgroundColor = "black";
  console.log(`clicked = ${clickedBubble.textContent}`);
  console.log(`hit = ${hit}`);
  if (Number(clickedBubble.textContent) === hit) {
    finalScore();
    makeBubble();
  }
});
