import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  excuse();
};

const button = () => {
  return excuse();
}

const excuse = () => {
  const actionArray = ['I was late', 'I never showed up', 'I had to call out', 'I did not answer', 'I left early', 'I did not finish'];
  const whoArray = ['kid', 'grandma', 'dog', 'cat', 'goldfish', 'neighbor', 'husband', 'wife', 'ex', 'mom', 'dad'];
  const whatArray = ['lost my keys', 'broke my car', 'wet my bed', 'ate my assignment', 'lost my phone', 'set the house on fire', 'stole my purse', 'took my wallet'];
  const whenArray = ['showing', 'brushing my teeth', 'cleaning the house', 'doing homework', 'working out', 'sleeping', 'walking', ' at work'];

  let action = Math.floor(Math.random() * actionArray.length);
  let who = Math.floor(Math.random() * whoArray.length);
  let what = Math.floor(Math.random() * whatArray.length);
  let when = Math.floor(Math.random() * whenArray.length);

  document.querySelector(".action").innerHTML = actionArray[action];
  document.querySelector(".who").innerHTML = whoArray[who];
  document.querySelector(".what").innerHTML = whatArray[what];
  document.querySelector(".when").innerHTML = whenArray[when];

  console.log("excuse");
}
document.querySelector("#myButton").addEventListener("click", button);