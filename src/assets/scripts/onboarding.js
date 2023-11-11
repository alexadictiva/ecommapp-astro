async function myAjax(url,param) {
  const result = await $.ajax({
    url: url,
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(param),
  })
  return result
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                    .exec(window.location.search);

  return (results !== null) ? results[1] || 0 : false;
}

var codigo=$.urlParam("code");
var meli=$("#meli-link").attr("href");
var mpago=$("#mpago-link").attr("href");
var tiendanube=$("#tnube-link").attr("href");
var token=$.urlParam("cookie_token");

$("#meli-link").attr("href",meli+"?cookie_token="+token);
$("#mpago-link").attr("href",mpago+"?cookie_token="+token);
$("#tnube-link").attr("href",tiendanube+"/"+token);
$("#omitir-link").attr("href","https://admin.ecomm-app.com/login_back/dummy/"+codigo+"?cookie_token="+token);

var hash=uuidv4();




function getValue(id){
  return $("#"+id)[0].checked
}

$("#btn-cap-info-step1").click(async function () {
  var botones=[];
  if (getValue("card-meli")) botones.push("mercadolibre");
  if (getValue("card-mpago")) botones.push("mercadopago");
  if (getValue("card-mshops")) botones.push("mercadoshops");
  if (getValue("card-tnube")) botones.push("tiendanube");
  if (getValue("card-local")) botones.push("localfisico");
  if ($("#input-cap-info").val().length) botones.push($("#input-cap-info").val());

  var obj={
    hash:hash,
    botones:botones.join(","),
    step:1
  }
  try{
    await myAjax("https://admin.ecomm-app.com/login_back/onboarding?codigo="+codigo,obj);  
  } catch(e){
    console.log(e); 
  }
  $(".step1").addClass("d-none");
  $(".step2").removeClass("d-none");
  $(".progress").attr("value", 60);
});

$("#btn-cap-info-step2").click(async function () {
  var botones=[];
  if (getValue("counter-sells1")) botones.push("<15");
  if (getValue("counter-sells2")) botones.push("16 a 100");
  if (getValue("counter-sells3")) botones.push("100 a 500");
  if (getValue("counter-sells4")) botones.push(" 500 a 2500");
  if (getValue("counter-sells5")) botones.push(" 2500 a 10000");
  if (getValue("counter-sells6")) botones.push(" >10000");

  var obj={
    hash:hash,
    botones:botones.join(","),
    step:2
  }
  try{
    await myAjax("https://admin.ecomm-app.com/login_back/onboarding?codigo="+codigo,obj);  
  } catch(e){
    console.log(e); 
  }
  $(".step2").addClass("d-none");
  $(".step3").removeClass("d-none");
  $(".progress").attr("value", 100);
});

$("#btn-cap-info-step3").click(async function () {

  var botones=[];
  $("[for^=counter-solv]").each((index,el)=>{
    if ($("#"+$(el).attr("for"))[0].checked) botones.push($(el).text())
  });

  var obj={
    hash:hash,
    botones:botones.join(","),
    step:3
  }
  try{
    await myAjax("https://admin.ecomm-app.com/login_back/onboarding?codigo="+codigo,obj);  
  } catch(e){
    console.log(e); 
  }

  $(".title-top").addClass("d-none");
  $(".dinamic-info-container").addClass("d-none");
  $(".progress-bar-container").addClass("d-none");
  $(".big-div-onboard").addClass("d-none");
  $(".step3").addClass("d-none");
  $(".step4").removeClass("d-none");
});

$("#btn-cap-info-volver1").click(function () {
  $(".progress").attr("value", 25);
  $(".step1").removeClass("d-none");
  $(".step2").addClass("d-none");
});

$("#btn-cap-info-volver2").click(function () {
  $(".progress").attr("value", 60);
  $(".step2").removeClass("d-none");
  $(".step3").addClass("d-none");
});
/* 
$(".tnube-card1").mouseover(function () {
  $(".tnube-img").attr("src", "./../src/assets/imgs/tiendanube-white.svg");
});

$(".tnube-card1").mouseout(function () {
  $(".tnube-img").attr("src", "./../src/assets/imgs/tiendanube-blue.svg");
});
 */

/* select country */
const select91 = document.querySelector("#select91");
const options91 = document.querySelector("#options91");
const selectContent91 = document.querySelector("#select-content91");
const arrow91 = document.querySelector(".arrow-select-country91");

document.querySelectorAll("#options91 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent91.innerHTML = e.currentTarget.innerHTML;
    select91.classList.toggle("active");
    options91.classList.toggle("active");
    arrow91.classList.toggle("rotate");
  });
});

select91.addEventListener("click", () => {
  select91.classList.toggle("active");
  options91.classList.toggle("active");
  arrow91.classList.toggle("rotate");
});

$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");
    $("#options91").removeClass("active");
    $(".arrow-select-country91").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC
    $("#options91").removeClass("active");
    $(".arrow-select-country91").removeClass("rotate");
  }
});
