const buton1 = document.getElementById("firstquestion");
const buton2 = document.getElementById("truequestion");
const button3 = document.getElementById("thirdquestion");
const button4 = document.getElementById("fourthquestion");
const nextbutton = document.getElementById("nextbutton");
const backbutton = document.getElementById("backbutton");
const complate = document.getElementById("complate");
const counter = document.getElementById("counter");
const refresh = document.getElementById("refresh");

let cem = localStorage.getItem("cem")
  ? parseInt(localStorage.getItem("cem"))
  : 0;
counter.textContent = cem;
buton1.addEventListener("click", () => {
  buton1.style.backgroundColor = "red";
});

buton2.addEventListener("click", () => {
  buton2.style.backgroundColor = "green";
  cem++;
  counter.textContent = cem;
  localStorage.setItem("cem", cem);
});

button3.addEventListener("click", () => {
  button3.style.backgroundColor = "red";
});
button4.addEventListener("click", () => {
  button4.style.backgroundColor = "red";
});

complate.addEventListener("click", () => {
  alert("you finsihed the quiz");
});
refresh.addEventListener("click", () => {
  localStorage.removeItem("cem");
});
