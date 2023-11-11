


/* =============================
LANDING
=================================*/
  //HEADER COMPONENT

     /* $(document).ready(function () {
      $("head").load("./components/head.html");
      $("header").load("./components/header.html");
      $("footer").load("./components/footer.html");
    });  */
 

   

// Select country list register
var formatterCurrency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});
var origen = "competencia";
var formatterNumber = new Intl.NumberFormat("es-AR");
var generateUUID = () => {
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

  
// slider swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".mySwiperMeli", {
  spaceBetween: 30,
  loop: false,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiperResponsive", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
var swiper3 = new Swiper(".mySwiperHistorias", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiperEmpretienda", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
/*BLUR MENU */

$(document).delegate(".label-menu", "click", function () {
  $(".menu-blur").toggleClass("active");
  //$(".menuBotton").addClass("mostrar");
  $(".navContainer").toggleClass("menu-active");
  //$(".navContainer").css("right", "0");

  $(".label-menu div").toggleClass("efects-menu");
});
/*
$(document).mouseup(function (e) {
  if ($(e.target).closest(".navContainer").length === 0) {
    $(".menu-blur").removeClass("active");
    //$(".navContainer").css("right", "-600px");
    $(".navContainer").removeClass("menu-active");

    $(".label-menu div").removeClass("efects-menu");
  }
});

$(document).on("keyup", function (e) {
  if (e.keyCode === 27) {
    // ESC
    $(".menu-blur").removeClass("active");
    //$(".navContainer").css("right", "-600px");
    $(".navContainer").removeClass("menu-active");
    $(".label-menu div").removeClass("efects-menu");
  }
});
*/
$(document).on("click", ".dropdown-item", function() {
  var dropdownMenu = $(".drop-item-menu");
  dropdownMenu.toggleClass("active");
});

$(document).on("click", function(e) {
  var dropdownMenu = $(".drop-item-menu");
  var target = $(e.target);

  // Si el clic se realiza fuera de .drop-item-menu y .dropdown-item, se quita la clase .active
  if (
    !target.closest(".drop-item-menu").length &&
    !target.closest(".dropdown-item").length
  ) {
    dropdownMenu.removeClass("active");
  }
});

$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC
    $(".drop-item-menu").removeClass("active");
  }
});

/* BURBUJAS SLIDER DROPDOWN */

$(".text-view-more").click(function () {
  $(".more").toggleClass("d-none");
  $(".less").toggleClass("d-none");
  $(".card-desktop").toggleClass("mostrar");

  $(".text-view-more img").toggleClass("rotate");
});

$(".text-view-more1").click(function () {
  $(".card-desktop1").toggleClass("mostrar");
  $(".more1").toggleClass("d-none");
  $(".less1").toggleClass("d-none");
  $(".text-view-more1 img").toggleClass("rotate");
});
 $(".click1").click(function (e) {
  $(".arrow-icon1").toggleClass("rotate");
  $(".desplegable1").toggleClass("d-block");
});
$(".click2").click(function (e) {
  $(".arrow-icon2").toggleClass("rotate");
  $(".desplegable2").toggleClass("d-block");
});
$(".click3").click(function (e) {
  $(".arrow-icon3").toggleClass("rotate");
  $(".desplegable3").toggleClass("d-block");
});
$(".click4").click(function (e) {
  $(".arrow-icon4").toggleClass("rotate");
  $(".desplegable4").toggleClass("d-block");
});
$(".click5").click(function (e) {
  $(".arrow-icon5").toggleClass("rotate");
  $(".desplegable5").toggleClass("d-block");
});
$(".click6").click(function (e) {
  $(".arrow-icon6").toggleClass("rotate");
  $(".desplegable6").toggleClass("d-block");
});

$(".click7").click(function (e) {
  $(".arrow-icon7").toggleClass("rotate");
  $(".desplegable7").toggleClass("d-block");
});
$(".click8").click(function () {
  $(".arrow-icon8").toggleClass("rotate");
  $(".desplegable8").toggleClass("d-block");
});
$(".click9").click(function () {
  $(".arrow-icon9").toggleClass("rotate");
  $(".desplegable9").toggleClass("d-block");
});
$(".click10").click(function () {
  $(".arrow-icon10").toggleClass("rotate");
  $(".desplegable10").toggleClass("d-block");
});
$(".click11").click(function () {
  $(".arrow-icon11").toggleClass("rotate");
  $(".desplegable11").toggleClass("d-block");
});
$(".click12").click(function () {
  $(".arrow-icon12").toggleClass("rotate");
  $(".desplegable12").toggleClass("d-block");
});

$(".click25").click(function () {
  $(".arrow-icon25").toggleClass("rotate");
  $(".desplegable25").toggleClass("d-block");
});
$(".click26").click(function () {
  $(".arrow-icon26").toggleClass("rotate");
  $(".desplegable26").toggleClass("d-block");
});
$(".click27").click(function () {
  $(".arrow-icon27").toggleClass("rotate");
  $(".desplegable27").toggleClass("d-block");
});
$(".click28").click(function () {
  $(".arrow-icon28").toggleClass("rotate");
  $(".desplegable28").toggleClass("d-block");
});
$(".click29").click(function () {
  $(".arrow-icon29").toggleClass("rotate");
  $(".desplegable29").toggleClass("d-block");
});
$(".click30").click(function () {
  $(".arrow-icon30").toggleClass("rotate");
  $(".desplegable30").toggleClass("d-block");
});
$(".click31").click(function () {
  $(".arrow-icon31").toggleClass("rotate");
  $(".desplegable31").toggleClass("d-block");
});
$(".click32").click(function () {
  $(".arrow-icon32").toggleClass("rotate");
  $(".desplegable32").toggleClass("d-block");
});
$(".click33").click(function () {
  $(".arrow-icon33").toggleClass("rotate");
  $(".desplegable33").toggleClass("d-block");
});
$(".click34").click(function () {
  $(".arrow-icon34").toggleClass("rotate");
  $(".desplegable34").toggleClass("d-block");
});
$(".click35").click(function () {
  $(".arrow-icon35").toggleClass("rotate");
  $(".desplegable35").toggleClass("d-block");
});
$(".click36").click(function () {
  $(".arrow-icon36").toggleClass("rotate");
  $(".desplegable36").toggleClass("d-block");
});

$(".click13").click(function () {
  $(".arrow-icon13").toggleClass("rotate");
  $(".desplegable13").toggleClass("d-block");
});
$(".click14").click(function () {
  $(".arrow-icon14").toggleClass("rotate");
  $(".desplegable14").toggleClass("d-block");
});
$(".click15").click(function () {
  $(".arrow-icon15").toggleClass("rotate");
  $(".desplegable15").toggleClass("d-block");
});
$(".click16").click(function () {
  $(".arrow-icon16").toggleClass("rotate");
  $(".desplegable16").toggleClass("d-block");
});
$(".click17").click(function () {
  $(".arrow-icon17").toggleClass("rotate");
  $(".desplegable17").toggleClass("d-block");
});
$(".click18").click(function () {
  $(".arrow-icon18").toggleClass("rotate");
  $(".desplegable18").toggleClass("d-block");
});

$(".click37").click(function () {
  $(".arrow-icon37").toggleClass("rotate");
  $(".desplegable37").toggleClass("d-block");
});
$(".click38").click(function () {
  $(".arrow-icon38").toggleClass("rotate");
  $(".desplegable38").toggleClass("d-block");
});
$(".click39").click(function () {
  $(".arrow-icon39").toggleClass("rotate");
  $(".desplegable39").toggleClass("d-block");
});
$(".click40").click(function () {
  $(".arrow-icon40").toggleClass("rotate");
  $(".desplegable40").toggleClass("d-block");
});
$(".click41").click(function () {
  $(".arrow-icon41").toggleClass("rotate");
  $(".desplegable41").toggleClass("d-block");
});

$(".click19").click(function () {
  $(".arrow-icon19").toggleClass("rotate");
  $(".desplegable19").toggleClass("d-block");
});
$(".click20").click(function () {
  $(".arrow-icon20").toggleClass("rotate");
  $(".desplegable20").toggleClass("d-block");
});
$(".click21").click(function () {
  $(".arrow-icon21").toggleClass("rotate");
  $(".desplegable21").toggleClass("d-block");
});
$(".click22").click(function () {
  $(".arrow-icon22").toggleClass("rotate");
  $(".desplegable22").toggleClass("d-block");
});
$(".click23").click(function () {
  $(".arrow-icon23").toggleClass("rotate");
  $(".desplegable23").toggleClass("d-block");
});
$(".click24").click(function () {
  $(".arrow-icon24").toggleClass("rotate");
  $(".desplegable24").toggleClass("d-block");
});
$(".click50").click(function () {
  $(".arrow-icon50").toggleClass("rotate");
  $(".desplegable50").toggleClass("d-block");
});
 

  /* // Abrir y cerrar contenedores al hacer clic en ".click"
  $('.click').click(function(e) {
    var index = $(this).data('index');
    $(`.arrow-icon:eq(${index - 1})`).toggleClass('rotate');
    $(`.burble-desplegable:eq(${index - 1})`).toggleClass('d-block');
  }); 

  // Ocultar todos los contenedores al hacer clic fuera de ellos


 $(document).click(function(e) {
  var container = $('.click-container')[0];
  if (!container.contains(e.target)) {
    $('.arrow-icon').removeClass('rotate');
    $('.burble-desplegable').removeClass('d-block');
  }
}); */ 


var cookie_token = ""


$(document).ready(function () {
  //$(".se-pre-con").hide();
  if (typeof localStorage.session === "undefined")
    localStorage.session = generateUUID();
  $("#monto-vendido").html("100.000.000");
  let queryDict = {};
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      queryDict[item.split("=")[0]] = item.split("=")[1];
    });
  $("jdiv").hide();
  if (queryDict.hide) {
    $("header, footer, .competencia-hidable, jdiv").hide();
    //$(".competencia-showdable").show();
    $("#jivo-iframe-container").addClass("d-none");
    $(".big-blur-more-seconds, .big-blur-error").css("align-items", "normal");
    $("main").css("padding-top", 0);
    $("#options13").css("position", "fixed");
  }
  if (queryDict.cookie_token) {
    $("#download-pub-star").removeClass("d-none");
    cookie_token = queryDict.cookie_token;
  }
  if (queryDict.search && queryDict.site_id) {
    $("#select13").attr("data-siteid", queryDict.site_id);
    $("#input-search-compet1").val(atob(decodeURIComponent(queryDict.search)));
    $("#inputSearch3").click();
    origen = "web";
  }
  $("a").each(function () {
    var attr = $(this).attr("href");
    if (typeof attr !== "undefined" && attr !== false) {
      var href = $(this).attr("href");
      if (href.includes("afip")) {
        href = "http://qr.afip.gob.ar/?qr=zTKGYvXF759nyXNifLeBNA,,";
        $(this).attr("href", href);
      }
    }
  });
  if (location.href.includes("?")) {
    $("a").each(function () {
      var attr = $(this).attr("href");
      if (typeof attr !== "undefined" && attr !== false) {
        var href = $(this).attr("href");
        if (href.includes("afip"))
          href = "http://qr.afip.gob.ar/?qr=zTKGYvXF759nyXNifLeBNA,,";
        else
          href += "?" + location.href.substring(location.href.indexOf("?") + 1);
        $(this).attr("href", href);
      }
    });
    $("button").each(function () {
      var attr = $(this).attr("onclick");
      if (typeof attr !== "undefined" && attr !== false) {
        var onclick = $(this).attr("onclick");
        onclick = onclick.replace(
          "index.html",
          "index.html" +
          "?" +
          location.href.substring(location.href.indexOf("?") + 1)
        );
        onclick = onclick.replace(
          "register.html",
          "register.html" +
          "?" +
          location.href.substring(location.href.indexOf("?") + 1)
        );
        $(this).attr("onclick", onclick);
      }
    });
  }
});

/*$(document).ready(function () {
  if (location.href.includes('?')) {
    $("a").each(function () {
      var attr = $(this).attr("href");
      if (typeof attr !== 'undefined' && attr !== false) {
        var href = $(this).attr("href");
        href += '?' + location.href.substring(location.href.indexOf('?') + 1);
        $(this).attr("href", href);
      }
    });
  }
});*/
/*==================================
DESTACADO DE MELI
====================================*/

$(".ancor-destacado").mouseover(function () {
  $(".btn-close-destacado button svg path").css("stroke", "#4871BF");
});

$(".ancor-destacado").mouseout(function () {
  $(".btn-close-destacado button svg path").css("stroke", "#A1A3AF");
});

$(".btn-close-destacado button svg").mouseover(function () {
  $(".btn-close-destacado button svg path").css("stroke", "#4871BF");
});
$(".btn-close-destacado button svg").mouseout(function () {
  $(".btn-close-destacado button svg path").css("stroke", "#A1A3AF");
});

$(document).ready(function () {
  $(".big-blur").removeClass("d-none");
});
$(document).ready(function () {
  //$(".big-blur-compet").removeClass("d-none");
});
$("#close-destacado-desktop").click(function () {
  $(".destacado-competencia-container").addClass("d-none");
  $(".popup-competencia").removeClass("d-none");
  $("main").css("padding-top", "145px");
  $(".banner-meli-content article").css("margin-top", "0");
});
$("#close-destacado-mobile").click(function () {
  $(".big-blur").addClass("d-none");
  $(".popup-competencia").removeClass("d-none");
  $("main").css("padding-top", "140px");
});

$("#inputSearch").click(function () {
  $("#monto-vendido").html("0");
});

$("#close-popup-compet").click(function () {
  $(".popup-competencia").addClass("d-none");
  $("main").css("padding-top", "86px");
});

// Select country list register number competencia
var select12 = document.querySelector("#select12");
var options12 = document.querySelector("#options12");
var selectContent12 = document.querySelector("#select-content12");
var arrow12 = document.querySelector(".arrow-select-country12");

document.querySelectorAll("#options12 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    selectContent12.innerHTML = e.currentTarget.innerHTML;
    select12.classList.toggle("active");
    options12.classList.toggle("active");
    arrow12.classList.toggle("rotate");
  });
});

if (select12)
  select12.addEventListener("click", () => {
    select12.classList.toggle("active");
    options12.classList.toggle("active");
    arrow12.classList.toggle("rotate");
  });

$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");

    $(".arrow-select-country12").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC

    $(".arrow-select-country12").removeClass("rotate");
  }
});

$("#download-pub-star").click(function () {
  var site_id = $("#select13").attr("data-siteid");
  var search = $("#input-search-compet1").val();
  search = encodeURIComponent(btoa(search));
  window.location.href = `https://admin.ecomm-app.com/api/competencia/${site_id}/${search}?token=${cookie_token}&excel=true`;
  $(".big-blur-meli").removeClass("d-none");
});
$("#btn-see-more-pub").click(function () {
  $(".big-blur-meli").removeClass("d-none");
});

$("#btn-see-more-pub-star").click(function () {
  $(".big-blur-meli").removeClass("d-none");
});

$(document).delegate("#btn-close-modal-blur-meli", "click", function () {
  $(".big-blur-meli").addClass("d-none");
  console.log("botoncito");
});

async function myAjax(url, param) {
  try {
    var result = await $.ajax({
      url: url,
      type: "POST",
      dataType: "json",
      data: JSON.stringify(param),
      contentType: "application/json; charset=utf-8",
    });
    return result;
  } catch (e) {
    if (e.status != 200) console.log(e);
    return;
  }
}

$("#inputSearch3").click(async function () {
  if (cookie_token != "") renderCompetencia();
  else {
    await myAjax("https://admin.ecomm-app.com/api/competencia/log", {
      user: $("#input-search-compet1").val(),
      origen,
      session: localStorage.session,
    });
    if (!localStorage.competencia_datos)
      $(".big-blur-compet").removeClass("d-none");
    else renderCompetencia();
  }
});

$("#input-search-compet1").keyup(function () {
  /* if ($("#input-search-compet1").val() !== "") {
    $("#inputSearch3 img").attr("src", "./../src/assets/icons/exis-icon.svg");
  } else {
    $("#inputSearch3 img").attr("src", "./../src/assets/icons/lupa-icon.svg");
  } */
});

$(".compet-result").click(function () {
  $(".search-desc").removeClass("d-none");
  $(".big-info-content").removeClass("d-none");
  $(".banner-competencia-container").addClass("d-none");
  $(this).addClass("d-none");
  $(".big-blur-compet").removeClass("d-none");
  $(".search-desc").removeClass("d-none");
  $(".banner-competencia-desktop").addClass("d-none");
});

$("#btn-continue1").click(async function () {
  $(".big-blur-compet").addClass("d-none");
  var cod_pais = parseInt($("#select-content12").find("p").html());
  await myAjax("https://admin.ecomm-app.com/api/competencia/registro", {
    pais: cod_pais,
    telefono: $("#user-phone-compet").val(),
    nombre: $("#user-name-compet").val(),
    session: localStorage.session,
    email: $("#user-mail-compet").val(),
  });
  localStorage.setItem("competencia_datos", "1");
  renderCompetencia();
});

$("#show-results").click(async function () {
  var response = await fetch(
    `https://admin.ecomm-app.com/api/competencia/verifycodigo`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        session: localStorage.session,
        codigo: $("#verfication-code-compet").val(),
      }),
    }
  );
  if (response.status == 200) {
    $(".big-blur-compet").addClass("d-none");
    renderCompetencia();
  } else if (response.status == 403) {
    $(".big-blur-compet").addClass("d-none");
    $(".big-blur-meli").removeClass("d-none");
  } else {
    try {
      var error_text = await response.text();
    } catch (error) {
      var error_text = "Ha ocurrido un error";
    }
    //$(".big-blur-compet").addClass("d-none");
    //$(".big-blur-error").removeClass("d-none");
    $("#error-message").html(error_text);
    /* setTimeout(() => {
      $(".big-blur-error").addClass("d-none");
    }, 5000); */
  }
});

/*$("#btn-continue1").click(async function () {
  var cod_pais = parseInt($("#select-content12").find("p").html());
  var response = await fetch(
    `https://admin.ecomm-app.com/api/competencia/sendCodigo`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        pais: cod_pais,
        telefono: $("#user-phone-compet").val(),
        nombre: $("#user-name-compet").val(),
        session: localStorage.session,
        email: $("#user-mail-compet").val(),
      }),
    }
  );
  if (response.status == 200) {
    $(".verify-container-compet").removeClass("d-none");
    $(".btn-container-results").removeClass("d-none");
    $(this).addClass("d-none");
  } else if (response.status == 403) {
    $(".big-blur-compet").addClass("d-none");
    renderCompetencia();
    /*$(".big-blur-compet").addClass("d-none");
    $(".big-blur-meli").removeClass("d-none");*/
/*} else {
    try {
      var error_text = await response.text();
    } catch (error) {
      var error_text = "Ha ocurrido un error";
    }
    $(".big-blur-compet").addClass("d-none");
    //$(".big-blur-error").removeClass("d-none");
    $("#error-message").html(error_text);
    /*  setTimeout(() => {
      $(".big-blur-error").addClass("d-none");
    }, 5000); 
  }
});
/*
$("#verfication-code-compet").on("keyup", function () {
  limitText(this, 4);
});

/*============
boton mostrar mas dominios
===============*/

$("#btn-show-more-dom").click(function () {
  $(".big-blur-more-dom").removeClass("d-none");
});
$("#btn-close-modal-blur-more-dom").click(function () {
  $(".big-blur-more-dom").addClass("d-none");
});
$("#btn-close-modal-blur-error").click(function () {
  // $(".big-blur-error").addClass("d-none");
});

/*============
boton mostrar mas envios usados
===============*/

$("#btn-show-more-sent").click(function () {
  $(".big-blur-more-sent").removeClass("d-none");
});
$("#btn-close-modal-blur-more-sent").click(function () {
  $(".big-blur-more-sent").addClass("d-none");
});
$("#btn-close-modal-blur-error").click(function () {
  // $(".big-blur-error").addClass("d-none");
});

/*============
X dinamico del buscador
===============*/

$("#input-search-compet1").keyup(function () {
  if ($(this).val() !== "") {
    $("#inputDelete svg").css("opacity", 1);
  } else {
    $("#inputDelete svg").css("opacity", 0);
  }
});

$("#inputDelete").click(function () {
  $("#input-search-compet1").val("");
  $("#inputDelete svg").css("opacity", 0);
  $(".compet-result").addClass("d-none");
  $(".compet-not-result").addClass("d-none");
});

$("#input-search-compet1").focus(function () {
  $(".compet-not-result").addClass("d-none");
  $("#inputSearch3").css("background", "#6097FF");
  $(".input-group-search div").css("border-color", "#6097FF");
  $(".input-group-search div").css("box-shadow", "0px 0px 10px #88b1ff");
  $(this).removeAttr("placeholder");
});
$("#input-search-compet1").blur(function () {
  $("#inputSearch3").css("background", "#4871BF");
  $(".input-group-search div").css("border-color", "#4871BF");
  $(".input-group-search div").css("box-shadow", "none");
  $(this).attr("placeholder", "Ej.: TECNOFULL o https://articulo.merc...");
});
$("#input-search-compet1").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#inputSearch3").click();
  }
});
$("#user-phone-compet").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#btn-continue1").click();
  }
});
$(".btn-more-info").click(function () {
  $(".input-group-search div").css("border-color", "#6097FF");
  $(".input-group-search div").css("box-shadow", "0px 0px 10px #88b1ff");
});
/* ===============
Select country competencia info
==================*/

var select13 = document.querySelector("#select13");
var options13 = document.querySelector("#options13");
var selectContent13 = document.querySelector("#select-content13");
var arrow13 = document.querySelector(".arrow-select-country13");

if(select13){
document.querySelectorAll("#options13 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    var site_id = e.currentTarget.getAttribute("data-siteid");
    select13.setAttribute("data-siteid", site_id);
    selectContent13.innerHTML = e.currentTarget.innerHTML;
    select13.classList.toggle("active");
    options13.classList.toggle("active");
    arrow13.classList.toggle("rotate");
  });
});

if (select13) select13.addEventListener("click", () => {
  select13.classList.toggle("active");
  options13.classList.toggle("active");
  arrow13.classList.toggle("rotate");
});
$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");
    $("#options13").removeClass("active");
    $(".arrow-select-country13").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC
    $(".options").removeClass("active");
    $(".arrow-select-country13").removeClass("rotate");
  }
});}

/*juego gpt */
let contador = 0; // variable para contar las veces que se ha dado clic en el botón


let index = 0;
let textos = [
  "Si, tenemos stock disponible en color blanco y negro.",
  "Si realizas la compra antes de las 18 hs. tu pedido llegará dentro de las 24 hs.",
  "El parlante portátil Marshall Emberton tiene una duración de batería de hasta 20 horas de reproducción continua a volumen medio. Es importante tener en cuenta que la duración de la batería puede variar dependiendo del nivel de volumen al que se esté reproduciendo.",
];
$(".btn-respuesta").click(function() {
    if (contador == 0) {
      $(".gpt-img").attr("src","./../src/assets/imgs/prueba-gpt2.svg")
      $(".chat-details h3").text("Apple AirPods Con Estuche De Carga-blanco");
      $(".nbm").text("#MLA928422859");  
      $(".gpt-sku").text("air-pd-wh"); 
      $(".price-gpt").text("$54.198")
      $(".user-gpt").text("Jose Perez (42)")
      $(".location-gtp").text("Córdoba")
      $(".question-content").text("¿Si los compro ahora cuando llegan?")
      $(".time-content").text("Hace 2 min.")
      $(".textarea-gpt").val("");
     // $(".textarea-gpt").text("Si realizas la compra antes de las 18 hs. tu pedido llegará dentro de las 24 hs.")
      contador++;
      $(".btn-gpt").prop("disabled", false);
      $(".btn-respuesta").prop("disabled", true);
    } else if (contador == 1) {
      $(".gpt-img").attr("src","./../src/assets/imgs/prueba-gpt3.svg")
      $(".chat-details h3").text("Parlante Marshall Emberton portátil con bluetooth ");
      $(".nbm").text("#MLA918322706");  
      $(".gpt-sku").text("spemarsh-emb"); 
      $(".price-gpt").text("$35.336")
      $(".user-gpt").text("Camila Lopez (19)")
      $(".location-gtp").text("Quilmes")
      $(".question-content").text("¿Cuanto dura la batería?")
      $(".time-content").text("Hace 5 min.")
      $(".textarea-gpt").val("");
     // $(".textarea-gpt").text("El parlante portátil Marshall Emberton tiene una duración de batería de hasta 20 horas de reproducción continua a volumen medio. Es importante tener en cuenta que la duración de la batería puede variar dependiendo del nivel de volumen al que se esté reproduciendo.")
      contador++;
      $(".btn-gpt").prop("disabled", false);
      $(".btn-respuesta").prop("disabled", true);
    } else if (contador == 2) {
      $(".gpt-img").attr("src","./../src/assets/icons/prueba-gpt.svg")
      $(".chat-details h3").text("Reloj Smartwatch Xiaomi Redmi Smart Band 2");
      $(".nbm").text("#MLA321589654");  
      $(".gpt-sku").text("sm-wt-wh"); 
      $(".price-gpt").text("$56.555")
      $(".user-gpt").text("Carla González (34)")
      $(".location-gtp").text("San Juan")
      $(".question-content").text("¿tenés stock?")
      $(".time-content").text("Hace 30 seg.")
      $(".textarea-gpt").val("");
      //$(".textarea-gpt").text("Si, tenemos stock disponible en color blanco y negro.")
      contador = 0;
      $(".btn-gpt").prop("disabled", false);
      $(".btn-respuesta").prop("disabled", true);
    }
    
  });
  
  $(".btn-gpt").click(function(){
    $(".btn-respuesta").prop("disabled", false);
    $(this).prop("disabled", true);
    if (index >= textos.length) {
      index = 0; 
    }
     let texto_actual = textos[index];
    let letras = texto_actual.split("");
     function agregar_letra(i) {
      if (i < letras.length) {
        $(".textarea-gpt").val(function(index, val) {
          return val + letras[i];
        });
        setTimeout(function() {
          agregar_letra(i + 1);
        }, Math.floor(Math.random() * 1) + 10); 
      } else {
        index++; 
      }
    }
  
    // borrar el texto actual y comenzar a agregar letras
    $(".textarea-gpt").val("");
    agregar_letra(0);

  })



  $(".btn-respuesta").prop("disabled", true); // inhabilitar el botón si el textarea está vacío
   

  /*newsletter */
  $(document).ready(function() {
      $(".input-newsletter").on("input", function() {
        var email = $(this).val();
        var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (isValid) {
          $(".btn-newsletter").prop("disabled", false);
        } else {
          $(".btn-newsletter").prop("disabled", true);
        }
      });
    });

    $(".btn-newsletter").on("click", function(){
      var email = $(".input-newsletter").val();
      $.post(
        "https://admin.ecomm-app.com/api/regitsterEmail",
        { email, origen: "landing" },
        (data, status, xhr) => {
          $(".newsl1").addClass("d-none")
          $(".newsl2").removeClass("d-none")
        }
      );

    })

    /*validacion contacto */
     /*validacion contacto*/
    $(document).ready(function() {
      $(".input-email-contact").on("input", function() {
        var email = $(this).val();
        var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (isValid) {
          $(".btn-send-form").prop("disabled", false);
        } else {
          $(".btn-send-form").prop("disabled", true);
        }
      });
    });

    $(".btn-send-form").on("click", function(event){
      event.preventDefault()
      var email = $(".input-email-contact").val();
      var nombre=$(".input-name-contact").val();
      var consulta=$('textarea').val();
      $.post(
        "https://admin.ecomm-app.com/api/regitsterEmail",
        { email, origen: "contacto",nombre,consulta },
        (data, status, xhr) => {
          $(".form-step1").addClass("d-none")
          $(".form-step2").removeClass("d-none")
        }
      );

    })