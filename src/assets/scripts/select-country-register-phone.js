// Select country list register number
const select10 = document.querySelector("#select10");
const options10 = document.querySelector("#options10");
const selectContent10 = document.querySelector("#select-content10");
const arrow10 = document.querySelector(".arrow-select-country10");

document.querySelectorAll("#options10 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent10.innerHTML = e.currentTarget.innerHTML;
    select10.classList.toggle("active");
    options10.classList.toggle("active");
    arrow10.classList.toggle("rotate");
  });
});

select10.addEventListener("click", () => {
  select10.classList.toggle("active");
  options10.classList.toggle("active");
  arrow10.classList.toggle("rotate");
});

$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");

    $(".arrow-select-country10").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC

    $(".arrow-select-country10").removeClass("rotate");
  }
});

// Select country list register n number modal
const select11 = document.querySelector("#select11");
const options11 = document.querySelector("#options11");
const selectContent11 = document.querySelector("#select-content11");
const arrow11 = document.querySelector(".arrow-select-country11");

document.querySelectorAll("#options11 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent11.innerHTML = e.currentTarget.innerHTML;
    select11.classList.toggle("active");
    options11.classList.toggle("active");
    arrow11.classList.toggle("rotate");
  });
});

select11.addEventListener("click", () => {
  select11.classList.toggle("active");
  options11.classList.toggle("active");
  arrow11.classList.toggle("rotate");
});

$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");

    $(".arrow-select-country11").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC

    $(".arrow-select-country11").removeClass("rotate");
  }
});
