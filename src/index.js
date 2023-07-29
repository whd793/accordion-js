// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const head = document.querySelectorAll(".head");
const body = document.querySelectorAll(".body");

head.forEach((d) => {
  d.addEventListener("click", (e) => {
    d.classList.toggle("active");
    d.nextElementSibling.classList.toggle("bodyactive");

    body.forEach((b) => {
      if (b !== d.nextElementSibling) {
        b.classList.remove("bodyactive");
        b.previousElementSibling.classList.remove("active");
      }
    });
  });
});
// body.addEventListener("click", (e) => {
//   body.classList.toggle("active");
// });
