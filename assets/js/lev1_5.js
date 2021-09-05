// getElementById()
// anzahl = 0;   // Es ist wichtig, hier zu initiieren!
// anzahl += 1;
// innerHTML

let count = document.getElementById("clickMe");
let anzahl = 0;
for (let i = 0; i < 1; i++) {
  console.log(i);
  count.addEventListener("click", () => {
    count.innerHTML = `Click me: ${(anzahl += 1)}`;
    console.log(anzahl);
  });
}
// count.forEach((element) => {
//   let anzahl = 0;
//   element.addEventListener("click", () => {
//     element.innerHTML = anzahl += 1;
//   });
// });
