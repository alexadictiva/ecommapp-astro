// Select country list signup

const select2 = document.querySelector("#select2");
const options2 = document.querySelector("#options2");
const selectContent2 = document.querySelector("#select-content2");
const select3 = document.querySelector("#select3");
const options3 = document.querySelector("#options3");
const selectContent3 = document.querySelector("#select-content3");
const arrow2 = document.querySelector(".arrow-select-country");
const arrow3 = document.querySelector("#arrow-select-country3");

document.querySelectorAll("#options2 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent2.innerHTML = e.currentTarget.innerHTML;
    select2.classList.toggle("active");
    options2.classList.toggle("active");
    arrow2.classList.toggle("rotate");
    changeCountry($("#select-content2").find("p")[0].id);
  });
});

select2.addEventListener("click", () => {
  select2.classList.toggle("active");
  options2.classList.toggle("active");
  arrow2.classList.toggle("rotate");
});

document.querySelectorAll("#options3 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent3.innerHTML = e.currentTarget.innerHTML;
    select3.classList.toggle("active");
    options3.classList.toggle("active");
    arrow3.classList.toggle("rotate");
  });
});

/*select3.addEventListener("click", () => {
  select3.classList.toggle("active");
  options3.classList.toggle("active");
  arrow3.classList.toggle("rotate");
});*/
