const buton1 = document.getElementById("firstquestion");
const buton2 = document.getElementById("truequestion");
const button3 = document.getElementById("thirdquestion");
const button4 = document.getElementById("fourthquestion");
const nextbutton = document.getElementById("nextbutton");
const backbutton = document.getElementById("backbutton");
const complate = document.getElementById("complate");
const counter = document.getElementById("counter");
const refresh = document.getElementById("refresh");
const biricncisual = document.getElementById("birincisual");
const ikincisual = document.getElementById("ikincisual");

const firstquestion2 = document.getElementById("firstquestion2");
const secondquestion2 = document.getElementById("secondquestion2");
const thirdquestion2 = document.getElementById("thirdquestion2");
const fourthquestion2 = document.getElementById("fourthquestion2");

const ucuncusual = document.getElementById("birinci-sual3");
const firstquestion3 = document.getElementById("firstquestion3");
const secondquestion3 = document.getElementById("secondquestion3");
const thirdquestion3 = document.getElementById("thirdquestion3");
const fourthquestion3 = document.getElementById("fourthquestion3");

const url = "http://localhost:3000/questions";

buton1.addEventListener("click", () => {
  buton1.style.backgroundColor = "red";
});

buton2.addEventListener("click", () => {
  buton2.style.backgroundColor = "red";
});

button3.addEventListener("click", () => {
  button3.style.backgroundColor = "green";
});
button4.addEventListener("click", () => {
  button4.style.backgroundColor = "red";
});

async function fetchdata() {
  const response = await fetch(url);
  const data = await response.json();
  // handle(data);
  handle2(data);
  handle(data);
  handle3(data);
}

fetchdata();
function handle(data) {
  biricncisual.textContent = data[0].questionText;
  buton1.textContent = data[0].options[0];
  buton2.textContent = data[0].options[3];
  button3.textContent = data[0].options[2];
  button4.textContent = data[0].options[1];
}

function handle2(data) {
  ikincisual.textContent = data[1].questionText;
  firstquestion2.textContent = data[1].options[0];
  secondquestion2.textContent = data[1].options[1];
  thirdquestion2.textContent = data[1].options[2];
  fourthquestion2.textContent = data[1].options[3];
}
function handle3(data) {
  ucuncusual.textContent = data[2].questionText;
  firstquestion3.textContent = data[2].options[0];
  secondquestion3.textContent = data[2].options[1];
  thirdquestion3.textContent = data[2].options[2];
  fourthquestion3.textContent = data[2].options[3];
}

// complate.addEventListener("click", () => {
//   alert("you finsihed the quiz");
// });

// refresh.addEventListener("click", () => {
//   localStorage.removeItem("cem");
// });

firstquestion2.addEventListener("click", () => {
  firstquestion2.style.backgroundColor = "red";
});
secondquestion2.addEventListener("click", () => {
  secondquestion2.style.backgroundColor = "red";
});

firstquestion2.addEventListener("click", () => {
  firstquestion2.style.backgroundColor = "red";
});

secondquestion2.addEventListener("click", () => {
  secondquestion2.style.backgroundColor = "green";
});

thirdquestion2.addEventListener("click", () => {
  thirdquestion2.style.backgroundColor = "red";
});
fourthquestion2.addEventListener("click", () => {
  fourthquestion2.style.backgroundColor = "red";
});

firstquestion3.addEventListener("click", () => {
  firstquestion3.style.backgroundColor = "red";
});

secondquestion3.addEventListener("click", () => {
  secondquestion3.style.backgroundColor = "red";
});

thirdquestion3.addEventListener("click", () => {
  thirdquestion3.style.backgroundColor = "green";
});
fourthquestion3.addEventListener("click", () => {
  fourthquestion3.style.backgroundColor = "red";
});
var timer;
var ele = document.getElementById("timer");

(function () {
  var sec = 0;
  timer = setInterval(() => {
    ele.innerHTML = "00:" + sec;
    sec++;
  }, 1000);
})();

function pause() {
  clearInterval(timer);
}

let counterr = 0; // Use let to allow reassignment

function cavab() {
  const ul = document.getElementById("ul");

  // Update the counter display
  const counterElement = document.createElement("li");
  counterElement.textContent = "3 of " + counterr;
  ul.appendChild(counterElement);

  // Increment the counter when button3 is clicked
  button3.addEventListener("click", () => {
    counterr++;
    // Update the counter display after incrementing
    counterElement.textContent = "3 of " + counterr;
  });
  secondquestion2.addEventListener("click", () => {
    counterr++;
    counterElement.textContent = "3 of " + counterr;
  });
  thirdquestion3.addEventListener("click", () => {
    counterr++;
    counterElement.textContent = "3 of " + counterr;
  });
}

cavab();
