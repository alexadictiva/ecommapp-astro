// Select country list register
const select1 = document.querySelector("#select1");
const options1 = document.querySelector("#options1");
const selectContent1 = document.querySelector("#select-content1");
const arrow1 = document.querySelector(".arrow-select-country");

document.querySelectorAll("#options1 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent1.innerHTML = e.currentTarget.innerHTML;
    select1.classList.toggle("active");
    options1.classList.toggle("active");
    arrow1.classList.toggle("rotate");
    // changeCountry($("#select-content1").find("p")[0].id);
  });
});
/*
select1.addEventListener("click", () => {
  select1.classList.toggle("active");
  options1.classList.toggle("active");
  arrow1.classList.toggle("rotate");
});*/
