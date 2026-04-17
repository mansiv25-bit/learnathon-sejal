let step = 0;
const start = document.getElementById("start");
const inputBlock = document.getElementById("inputBlock");
const condition = document.getElementById("condition");
const output = document.getElementById("output");

const input = document.getElementById("numinput");
const nextBtn = document.getElementById("nextBtn");

const blocks = [start, inputBlock, condition, output];

function showStep(index) {
  blocks.forEach((block, i) => {
    block.classList.remove("active");
    if (i === index) {
      block.classList.add("active");
    }
  });
}

showStep(step);

nextBtn.addEventListener("click", () => {

  if (step === 0) {
    step++;
    showStep(step);
  }

  else if (step === 1) {
    if (input.value === "") {
      alert("Please enter a number");
      return;
    }
    step++;
    showStep(step);
  }

  else if (step === 2) {
    let num = parseInt(input.value);

    if (num % 2 === 0) {
      output.innerText = "Output: Even Number";
    } else {
      output.innerText = "Output: Odd Number";
    }

    step++;
    showStep(step);
  }


  else if (step === 3) {
    alert("Flowchart Complete!");

    step = 0;
    input.value = "";
    output.innerText = "Output";
    showStep(step);
  }

});