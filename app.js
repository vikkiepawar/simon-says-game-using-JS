let gameSeq = [];
let userSeq = [];

let btns = ['green', 'red', 'yellow', 'purple'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
   if (!started) {
      started = true;
      levelUp();
   }


});

function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(() => btn.classList.remove("flash"), 250);
}

function userFlash(btn) {
   btn.classList.add("userflash");
   setTimeout(() => btn.classList.remove("userflash"), 250);
}

function levelUp() {
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;

   let randidx = Math.floor(Math.random() * 4); 
   let randcolor = btns[randidx];
   let randbtn = document.querySelector(`.${randcolor}`);

   gameSeq.push(randcolor);
   gameFlash(randbtn); 

}

function checkAns(idx) {
   if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length === gameSeq.length) {
         setTimeout(levelUp, 250);
      }
   } else {
      h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;
      
      document.body.style.backgroundColor = "red";
      setTimeout(() => {
         document.body.style.backgroundColor = "white";
      }, 500);

      reset();
   }
}

function btnpress() {
   let btn = this;
   userFlash(btn);

   let userColor = btn.getAttribute("id");
   userSeq.push(userColor); 

   checkAns(userSeq.length - 1); }

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {

   btn.addEventListener("click", btnpress);
}

function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}