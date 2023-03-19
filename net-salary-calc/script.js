const form = document.getElementById("paye");
const message = document.getElementById("net");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  tax(input.value);
});

let input = 50000;

function tax(input) {
  console.log(input);
  const payeNew = payeCheck(input);
  const nssf = nssfDeduction(input);
  const nhif = nhifDeduction(input);
  const netSalary = input - payeNew - nssf - nhif;
  console.log(netSalary);
}

function payeCheck(input) {
  if (input >= 0 && input <= 24000) {
    paye = 0.1 * input;
    return paye;
  } else if (input > 24000 && input <= 32333) {
    paye = 0.25 * input;
    return paye;
  } else if (input > 32333) {
    paye = 0.3 * input;
    return paye;
  }
}

function nhifDeduction(input) {
  if (input >= 0 && input <= 5999) {
    return 150;
  } else if (input >= 6000 && input <= 7999) {
    return 300;
  } else if (input >= 8000 && input <= 11999) {
    return 400;
  } else if (input >= 12000 && input <= 14999) {
    return 500;
  } else if (input >= 15000 && input <= 19999) {
    return 600;
  } else if (input >= 20000 && input <= 24999) {
    return 750;
  } else if (input >= 25000 && input <= 29999) {
    return 850;
  } else if (input >= 30000 && input <= 34999) {
    return 900;
  } else if (input >= 35000 && input <= 39999) {
    return 950;
  } else if (input >= 40000 && input <= 44999) {
    return 1000;
  } else if (input >= 45000 && input <= 49999) {
    return 1100;
  } else if (input >= 50000 && input <= 59999) {
    return 1200;
  } else if (input >= 60000 && input <= 69999) {
    return 1300;
  } else if (input >= 70000 && input <= 79999) {
    return 1400;
  } else if (input >= 80000 && input <= 89999) {
    return 1500;
  } else if (input >= 90000 && input <= 99999) {
    return 1600;
  } else if (input >= 100000) {
    return 1700;
  }
  
function nssfDeduction(input) {
  input = input * 0.06;
  return input;

  message.innerHTML = `<li>"nssfDeduction " $(input)</li>`;

}

tax(50000);