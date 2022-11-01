let counter = document.getElementById('counter');
let count = 0;

setInterval(setTime, 1000);

updateDisplay();

//DONT FUCK WITH THIS SECTION WORKING CORRECTLY
// simple countup
function setTime() {
  ++count;
  counter.innerHTML = pad(count % 50000);
  document.getElementById('pause').innerHTML = 'pause';
}

function pad(val) {
  let valString = val + "";
    return valString;
  }


//DONT FUCK WITH THIS ITS WORKING CORRECTLY
  //// increment and decrement timer
let counterPlus = document.getElementById('plus');
let counterMinus = document.getElementById('minus');

counterPlus.addEventListener("click", () => {
  count++;
  updateDisplay();
})

counterMinus.addEventListener("click", () => {
  count--;
  updateDisplay();
})



function updateDisplay() {
  counter.innerHTML = count;
}



///like the individual number 
// i need to store the liker data into the class "likes" with a for loop 
//then set them as arrays? 
//needs to be an object? because it needs bukket points
// see times clicked per value
let heart = document.getElementById('heart');
let likes = 0;

heart.addEventListener("click", (count) => {
  let likes = {`${count} has been liked ${#NUMBEROFCLICKS} time`};
  const likeCounter = document.createElement("ul").setAttribute("class", "likes")
  
})


//pause the timer 
// need to use clearINterval 
///inner HTML text needs to be changed to disabled
//ask what i should pause/resume in reference to
//for this one i set it in reference to innerhtml of the pause button

let pause = document.getElementById('pause'); 


function pauseBtn() {
    if (pause.innerHTML === 'pause') {
        pause.addEventListener('click', function () {
            clearInterval(setTime);
            pause.innerHTML = 'resume';
            heart.setAttribute(disabled, true);
            counterPlus.setAttribute(disabled, true);
            counterMinus.setAttribute(disabled, true);



        })
    if (pause.innerHTML === 'resume') {
        pause.addEventListener('click', function () {
            setTime();
            pause.innerHTML = 'pause';
            heart.setAttribute(disabled, false);
            counterPlus.setAttribute(disabled, false);
            counterMinus.setAttribute(disabled, false);
        })
    }
}

