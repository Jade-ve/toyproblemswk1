const form = document.getElementById("detector");
const input = document.getElementById("speed");
const message = document.getElementById("detect");
form.addEventListener("submit", (event) => {
  //prevent reloading
  event.preventDefault();
  //call function
  speedCheck(input.value);
});
function speedCheck(input) {
  console.log("input skeleton", input);
  // console.log("input value", input.value);

  let points = 0;

  if (input <= 70) {
    //show innerHTML
    console.log("OK");
    message.innerHTML = `<li>ok</li>`;
  } else if (input > 70) {
    points = (input - 70) / 5;
    console.log("you have " +points+ " points");
    check(points);
    message.innerHTML = `<li>you have ${points} points</li>`;
  }

  function check(points) {
    if (points >= 12) {
      //show innerHTML

      console.log("License Suspended");
      message.innerHTML = `<li>License Suspended</li>`;
    }
    //else show points
  }
}