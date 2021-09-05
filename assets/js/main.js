// lev1.1
document.getElementById("alert").onclick = function myAlert() {
  let text = "WELCOME to the World Of DOM";
  alert(text);
};

// lev1.2
let today = new Date();
let dayOfMonth = today.toISOString().slice(0, 10);
function datum() {
  let datum = document.getElementById("datum");
  datum.innerHTML = dayOfMonth;
  datum.style.color = "purple";
}

// lev1.3
// function changeColor() {
//   const button = document.querySelectorAll("div");
//   console.log(button);
//   button.forEach((but) => {
//     but.addEventListener("click", (event) => {
//   console.log(event);
//       if ((event.target.style.backgroundColor == "#000")) {
//         console.log("button");
//       }
//   });
// }

const allCard = document.querySelectorAll(".card");
console.log(allCard);
allCard.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.style.background = "#000";
  });
});

// for (let i = 0; i < allCard.length; i++) {
//   allCard[i].forEach((e) => {
//     e.addEventListener("click", (event) => {
//       console.log(event);
//       if ((event.style.background = "black")) {
//         console.log(allCard[i]);
//       }
//     });
//   });
// }

// for (let i = 0; i < allCenter.length; i++) {
//   allCenter[i].forEach((event) => {
//     event.addEventListener("click", (event) => {
//       console.log(allCenter[i]);
//       if ((event.target.style.background = "black"));
//       {
//         console.log(allCenter[i]);
//       }
//     });
//   });
// }

// lev1.4
let eventParagraph = document.getElementById("eventParagraph");
let text1 = "you have click on an event paragraph";
eventParagraph.addEventListener("click", (e) => {
  eventParagraph.innerHTML = "you have click on an event paragraph";
});
