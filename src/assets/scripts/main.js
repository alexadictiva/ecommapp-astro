//height window
/* $(document).ready(function () {
  var height = $(window).height();

  $("body").height(height);
}); */
/* 
$(document).ready(function () {
  console.log($(window).height() - 38 + "px");
  $("body").height($(window).height() - 38 + "px");
}); */

//modal
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

//CheckBox show pass
function showPassword() {
  var cambio = document.getElementById("txtPassword");
  var cambio1 = document.getElementById("txtPassword1");
  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }

  if (cambio1.type == "password") {
    cambio1.type = "text";
    $(".icon").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio1.type = "password";
    $(".icon").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }
}
$(document).ready(function () {
  $("#ShowPassword").click(function () {
    $("#Password").attr("type", $(this).is(":checked") ? "text" : "password");
  });
});
//CheckBox show pass Admin
function showPasswordAdmin() {
  var cambio = document.getElementById("txtPassword2");
  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon-ad").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon-ad").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }
}
$(document).ready(function () {
  $("#ShowPassword2").click(function () {
    $("#Password").attr("type", $(this).is(":checked") ? "text" : "password");
  });
});
//CheckBox show pass operator
function showPasswordOperator() {
  var cambio = document.getElementById("txtPassword3");

  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon-op").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon-op").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }
}
$(document).ready(function () {
  $("#ShowPassword3").click(function () {
    $("#Password").attr("type", $(this).is(":checked") ? "text" : "password");
  });
});
//CheckBox show pass Modal
function showPasswordModalRecover() {
  var cambio = document.getElementById("txtPassword5");
  var cambio1 = document.getElementById("txtPassword6");
  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }

  if (cambio1.type == "password") {
    cambio1.type = "text";
    $(".icon").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio1.type = "password";
    $(".icon").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }
}
$(document).ready(function () {
  $("#ShowPassword5").click(function () {
    $("#Password").attr("type", $(this).is(":checked") ? "text" : "password");
  });
});

/* show input email info */
/*
$(".input-mail-text").focus(function () {
  $(".input-mail-alert").css("display", "block");
  $(".input-mail").css("margin-bottom", "0px");
});

$(".input-mail-text").blur(function () {
  $(".input-mail-alert").css("display", "none");
  $(".input-mail").css("margin-bottom", "22px");
});
*/
$(".input-mail-text").keyup(function () {
  if ($(this).val() !== "") {
    $(".input-mail-alert").css("display", "block");
    $(".input-mail").css("margin-bottom", "0px");
  } else {
    $(".input-mail-alert").css("display", "none");
    $(".input-mail").css("margin-bottom", "22px");
  }
});

// variables de validacion
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var timeInterval = 1500;
var timeout;
var mail_valido = false;
/*validation mail registration*/
$(".input-mail-text").keyup(function () {
  if ($(".input-mail-text").val() == "") {
    // si es input esta vacio
    $(".invalid-alert-container").css("display", "none");
    $(".check-validate").css("display", "none");
  } else if (
    $(".input-mail-text").val().indexOf("@", 0) == -1 ||
    $(".input-mail-text").val().indexOf(".", 0) == -1
  ) {
    // si es mail esta mal

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (emailRegex.test($(this).val())) {
        console.log("mail-valido");
        mail_valido = true;
      } else {
        mail_valido = false;
        $(".check-validate")
          .attr("src", "./../src/assets/icons/wrong-icon.svg")
          .css("display", "inline");
        $(".invalid-alert-container").css("display", "block");
        $(".input-mail").css("border-color", "#FF6060");

        $(".svg-mail").attr(
          "src",
          "./../src/assets/icons/email-icon-red.svg"
        );
        return false;
      }
      clearTimeout(timeout);
    }, timeInterval);
  } else {
    // si el mail esta bien
    $(".invalid-alert-container").css("display", "none");
    $(".check-validate").attr(
      "src",
      "./../src/assets/icons/correct-icon.svg"
    );
    $(".input-mail").css("border-color", "#727587");

    $(".svg-mail").attr("src", "./../src/assets/icons/email-icon.svg");
  }
});
/*validation mail signup admin*/
$(".input-mail-text-signup-admin").keyup(function () {
  if (
    $(".input-mail-text-signup-admin").val().indexOf("@", 0) == -1 ||
    $(".input-mail-text-signup-admin").val().indexOf(".", 0) == -1
  ) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (emailRegex.test($(this).val())) {
        console.log("mail-valido");
      } else {
        $(".check-validate2")
          .attr("src", "./../src/assets/icons/wrong-icon.svg")
          .css("display", "inline");
        $(".invalid-alert-container-signup-admin").css("display", "block");
        $(".input-mail-signup-admin").css("border-color", "#FF6060"); //red

        $(".svg-mail-signup-admin").attr(
          "src",
          "./../src/assets/icons/email-icon-red.svg"
        );
        return false;
      }
      clearTimeout(timeout);
    }, timeInterval);
  } else {
    $(".invalid-alert-container-signup-admin").css("display", "none");
    $(".check-validate2").attr(
      "src",
      "./../src/assets/icons/correct-icon.svg"
    );
    $(".input-mail-signup-admin").css("border-color", "#6097FF");

    $(".svg-mail-signup-admin").attr(
      "src",
      "./../src/assets/icons/email-icon.svg"
    );
  }
});
/*validation mail signup operator*/
$(".input-mail-text-signup-operator").keyup(function () {
  let user = "ecommapp";
  if ($(".input-mail-text-signup-operator").val() !== user) {
    $(".check-validate3")
      .attr("src", "./../src/assets/icons/correct-icon.svg")
      .css("display", "inline");
    $(".invalid-alert-container-signup-operator").css("display", "none");
    $(".input-mail-signup-operator").css("border-color", "#FF6060");

    $(".svg-mail-signup-operator").attr(
      "src",
      "./../src/assets/icons/user-icon.svg"
    );
    return false;
  } else {
    $(".invalid-alert-container-signup-operator").css("display", "none");
    $(".check-validate3").attr(
      "src",
      "./../src/assets/icons/correct-icon.svg"
    );
    $(".input-mail-signup-operator").css("border-color", "#6097FF");

    $(".svg-mail-signup-operator").attr(
      "src",
      "./../src/assets/icons/user-icon-blue.svg"
    );
  }
});
/*validation mail signup modal*/
$(".input-mail-text-signup-modal").keyup(function () {
  if (
    $(".input-mail-text-signup-modal").val().indexOf("@", 0) == -1 ||
    $(".input-mail-text-signup-modal").val().indexOf(".", 0) == -1
  ) {
    // si el mail esta mal
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (emailRegex.test($(this).val())) {
        console.log("mail-valido");
      } else {
        $(".check-validate4")
          .attr("src", "./../src/assets/icons/wrong-icon.svg")
          .css("display", "inline");
        $(".invalid-alert-container-signup-modal").css("display", "block");
        $(".input-mail-signup-modal").css("border-color", "#FF6060");

        $(".svg-mail-signup-modal").attr(
          "src",
          "./../src/assets/icons/email-icon-red.svg"
        );
        return false;
      }
      clearTimeout(timeout);
    }, timeInterval);
  } else {
    $(".invalid-alert-container-signup-modal").css("display", "none");
    $(".check-validate4").attr(
      "src",
      "./../src/assets/icons/correct-icon.svg"
    );
    $(".input-mail-signup-modal").css("border-color", "#6097FF");

    $(".svg-mail-signup-modal").attr(
      "src",
      "./../src/assets/icons/email-icon-blue.svg"
    );
  }
});
/* validacion de mails competencia give info modal */

$(".input-mail-text-compet").keyup(function () {
  if ($(".input-mail-text-compet").val() == "") {
    // si es input esta vacio
    $(".invalid-alert-container11").css("display", "none");
    $(".check-validate11").css("display", "none");
  } else if (
    $(".input-mail-text-compet").val().indexOf("@", 0) == -1 ||
    $(".input-mail-text-compet").val().indexOf(".", 0) == -1
  ) {
    // si es mail esta mal

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (emailRegex.test($(this).val())) {
        console.log("mail-valido");
      } else {
        $(".check-validate11")
          .attr("src", "./../src/assets/icons/wrong-icon.svg")
          .css("display", "inline");
        $(".invalid-alert-container11").css("display", "block");
        $(".input-mail").css("border-color", "#FF6060");

        $(".svg-mail").attr(
          "src",
          "./../src/assets/icons/email-icon-red.svg"
        );
        return false;
      }
      clearTimeout(timeout);
    }, timeInterval);
  } else {
    // si el mail esta bien
    $(".invalid-alert-container11").css("display", "none");
    $(".check-validate11").attr(
      "src",
      "./../src/assets/icons/correct-icon.svg"
    );
    $(".input-mail").css("border-color", "#727587");

    $(".svg-mail").attr("src", "./../src/assets/icons/email-icon.svg");
  }
});

/*focus */
$(".input-mail-text").focus(function () {
  $(".input-mail").css("border-color", "#6097FF");
  $(".svg-mail").attr("src", "./../src/assets/icons/email-icon-blue.svg");
});

$(".input-mail-text").blur(function () {
  $(".input-mail").css("border-color", "#727587");
  $(".svg-mail").attr("src", "./../src/assets/icons/email-icon.svg");
});

$(".input-mail-text-signup-admin").focus(function () {
  $(".input-mail-signup-admin").css("border-color", "#6097FF");
  $(".svg-mail-signup-admin").attr(
    "src",
    "./../src/assets/icons/email-icon-blue.svg"
  );
});

$(".input-mail-text-signup-admin").blur(function () {
  $(".input-mail-signup-admin").css("border-color", "#727587");
  $(".svg-mail-signup-admin").attr(
    "src",
    "./../src/assets/icons/email-icon.svg"
  );
});

$(".input-mail-text-signup-operator").focus(function () {
  $(".input-mail-signup-operator").css("border-color", "#6097FF");
  $(".svg-mail-signup-operator").attr(
    "src",
    "./../src/assets/icons/user-icon-blue.svg"
  );
});

$(".input-mail-text-signup-operator").blur(function () {
  $(".input-mail-signup-operator").css("border-color", "#727587");
  $(".svg-mail-signup-operator").attr(
    "src",
    "./../src/assets/icons/user-icon.svg"
  );
});

$("#txtPassword").focus(function () {
  $(".input-pass").css("border-color", "#6097FF");
  $(".input-img").attr("src", "./../src/assets/icons/pass-icon-blue.svg");
});
$("#txtPassword").blur(function () {
  $(".input-pass").css("border-color", "#727587");
  $(".input-img").attr("src", "./../src/assets/icons/pass-icon.svg");
});

$("#txtPassword1").focus(function () {
  $(".input-pass-repeat").css("border-color", "#6097FF");
  $(".input-img1").attr("src", "./../src/assets/icons/pass-icon-blue.svg");
});
$("#txtPassword1").blur(function () {
  $(".input-pass-repeat").css("border-color", "#727587");
  $(".input-img1").attr("src", "./../src/assets/icons/pass-icon.svg");
});

$("#txtPassword2").focus(function () {
  $(".input-pass-signup-admin").css("border-color", "#6097FF");
  $(".input-img2").attr("src", "./../src/assets/icons/pass-icon-blue.svg");
});
$("#txtPassword2").blur(function () {
  $(".input-pass-signup-admin").css("border-color", "#727587");
  $(".input-img2").attr("src", "./../src/assets/icons/pass-icon.svg");
});

$("#txtPassword3").focus(function () {
  $(".input-pass-signup-operator").css("border-color", "#6097FF");
  $(".input-img3").attr("src", "./../src/assets/icons/pass-icon-blue.svg");
});
$("#txtPassword3").blur(function () {
  $(".input-pass-signup-operator").css("border-color", "#727587");
  $(".input-img3").attr("src", "./../src/assets/icons/pass-icon.svg");
});

/*Validation pass and pass repeat */

/* $("#txtPassword").keyup(function () {
  if ($(this).val() <= 0) {
    $(".input-pass-repeat").css("display", "none");
  } else {
    $(".input-pass-repeat").css("display", "flex");
  }
}); */
$(".input-pass-repeat").keyup(function () {
  if ($("#txtPassword1").val() == "") {
    $(".check-validate1").css("display", "none");
  } else if ($("#txtPassword").val() === $("#txtPassword1").val()) {
    $(".validate-pass-alert").css("display", "none");
    $(".input-pass").css("margin-bottom", "19px");
    $(".check-validate1").css("display", "none");
    $(this).css("border-color", "#727587");
    $(".input-img1").attr("src", "./../src/assets/icons/pass-icon-blue.svg");
  } else {
    $(".validate-pass-alert").css("display", "block");
    $(".input-pass").css("margin-bottom", "8px");
    $(".check-validate1").css("display", "block");

    $(this).css("border-color", "#FF6060");
    $(".input-img1").attr("src", "./../src/assets/icons/pass-icon.svg");
  }
});
/*tabs signup */
$("ul.tabs-list li a:first").closest(".tab-item").addClass("active");
$(".block-tabs-content").hide();
$(".block-tabs-content:first").show();

$("ul.tabs-list li a").click(function () {
  $("ul.tabs-list li a").closest(".tab-item").removeClass("active");
  $(this).closest(".tab-item").addClass("active");
  $(".block-tabs-content").hide();

  var activeTab = $(this).attr("href");
  $(activeTab).show();
  return false;
});

/*hardcore email */ 

var emailH = "ecomm@app.com";
var intervalsTime = 200;


//deshabilitar boton
$(".btn-recover-pass").css("background", "#A1A3AF").prop("disabled", true);
$("#txtPassword6").keyup(function () {
  if ($("#txtPassword6").val() === "") {
    // si repetir contraseña esta vacio
    $(".check-validate6").css("display", "none");
    $(".btn-recover-pass").css("background", "#A1A3AF").prop("disabled", true);
  } else if (
    $("#txtPassword5").val() === "" ||
    $("#txtPassword6").val() === ""
  ) {
    // si password5 o password6 está vacio deshabilitar boton
    $(".btn-recover-pass").css("background", "#A1A3AF").prop("disabled", true);
  } else if (
    $("#txtPassword5").val() === "" &&
    $("#txtPassword6").val() === ""
  ) {
    // si password5 y password6 está vacio deshabilitar boton
    $(".btn-recover-pass").css("background", "#A1A3AF").prop("disabled", true);
  } else if (
    $("#txtPassword5").val() !== "" &&
    $("#txtPassword6").val() === ""
  ) {
    // si password5 esta lleno y password6 está vacio deshabilitar boton
    $(".btn-recover-pass").css("background", "#A1A3AF").prop("disabled", true);
  } else if (
    $("#txtPassword5").val() === "" &&
    $("#txtPassword6").val() !== ""
  ) {
    // si password5 esta vacio y password6 está lleno deshabilitar boton
    $(".btn-recover-pass").css("background", "#A1A3AF").prop("disabled", true);
  } else if ($("#txtPassword5").val() === $("#txtPassword6").val()) {
    // si las contraseñas coinciden
    $(".validate-pass-alert").css("display", "none");
    $(".check-validate6").css("display", "none");
    $(".input-pass-repeat-recover-cap-content").css("border-color", "#727587");
    $(".input-img1").attr("src", "./../src/assets/icons/pass-icon-blue.svg");
    $(".btn-recover-pass").css("background", "#6097ff").prop("disabled", false);
  } else {
    //si las contraseñas no coinciden
    $(".validate-pass-alert").css("display", "block");
    $(".check-validate6").css("display", "block");
    $(".input-pass-repeat-recover-cap-content").css("border-color", "#FF6060");
    $(".input-img6").attr("src", "./../src/assets/icons/pass-icon.svg");
    if ($("#txtPassword5").val() !== $("#txtPassword6").val()) {
      //deshabilitar boton
      $(".btn-recover-pass")
        .css("background", "#A1A3AF")
        .prop("disabled", true);
    }
  }
});

// ocultando select country

$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");
    $(".options").removeClass("active");
    $(".arrow-select-country").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC
    $(".options").removeClass("active");
    $(".arrow-select-country").removeClass("rotate");
  }
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

var checkIsEmail = (value) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

var utm_source = getUrlParameter("utm_source");
var utm_medium = getUrlParameter("utm_medium");
var utm_campaign = getUrlParameter("utm_campaign");
if (!utm_source && document.referrer.indexOf("centrodepartners")!=-1) utm_source="CentroDePartnersMeli";
var reference = "utm_source="+utm_source+"&utm_medium="+utm_medium+"&utm_campaign="+utm_campaign;

var initRegister = () => {

  if ($("#melilink").length>0){
  $("#melilink")[0].href =
    $("#melilink")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;
  $("#tiendalink")[0].href =
    $("#tiendalink")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;

  $("#melilink1")[0].href =
    $("#melilink1")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;
  $("#tiendalink1")[0].href =
    $("#tiendalink1")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;

  $("#melilink2")[0].href =
    $("#melilink2")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;
  $("#tiendalink2")[0].href =
    $("#tiendalink2")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;
  }
  $("#googlelink")[0].href =
    $("#googlelink")[0].href +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;
};
$(window).on("load", function () {
  // Animate loader off screen
  $(".ajax-gif").each(function () {
    var src = $(this).attr("data-src");
    $(this).attr("src", src);
  });
  $("a").each(function () {
    var text = $(this).text();
    var qs = location.href.includes("?")
      ? "?" + location.href.substring(location.href.indexOf("?") + 1)
      : "";
    if (text.trim() === "Políticas de Privacidad y Datos".trim())
      $(this)
        .attr("href", `/login/privacity.html${qs}`)
        .attr("target", "_blank");
    if (text.trim() === "Términos y Condiciones".trim())
      $(this)
        .attr("href", `/login/conditions.html${qs}`)
        .attr("target", "_blank");
    if (text.trim() === "Preguntas Frecuentes ".trim()) $(this).hide();
  });
  $(".se-pre-con").fadeOut("fast");
});
/* 
$(".country-container .options .option").click(function () {
  var country = $(this).attr("data-country");
  var qs = location.href.includes("?")
    ? "?" + location.href.substring(location.href.indexOf("?") + 1)
    : ``;
  var url = `https://www.ecomm-app.com${qs}`;
  url = removeURLParameter(url, "country");
  url += url.includes("?") ? `&country=${country}` : `?country=${country}`;
  window.location.href = url;
});
 */
function removeURLParameter(url, parameter) {
  //prefer to use l.search if you have a location/link object
  var urlparts = url.split("?");
  if (urlparts.length >= 2) {
    var prefix = encodeURIComponent(parameter) + "=";
    var pars = urlparts[1].split(/[&;]/g);

    //reverse iteration as may be destructive
    for (var i = pars.length; i-- > 0; ) {
      //idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }

    return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
  }
  return url;
}

/* $(document).ready(function () {
  var country = "AR";
  var queryDict = {};
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      queryDict[item.split("=")[0]] = item.split("=")[1];
    });
  if (queryDict.country) country = queryDict.country;
  $(".country-container .options .option").each(function () {
    var data_country = $(this).attr("data-country");
    if (data_country === country) $("#select-content9").html($(this).html());
  });
}); */

$(document).delegate(".inputSearch1", "click", function () {
  var search = $("#input-search-compet").val();
  if (search != "") {
    var site_id = $("#select14").attr("data-siteid");
    window.location.href = `/competencia.html?search=${encodeURIComponent(
      btoa(search)
    )}&site_id=${site_id}&utm_source=Competencia`;
  } else {
    $(".compet-not-result1 .competidor-name").html("Ingresa un apodo");
    $(".compet-not-result1").removeClass("d-none");
  }
});

$(".compet-result1").click(function () {
  window.location.href = `/competencia.html`;
});

$("#input-search-compet").focus(function () {
  $("#inputSearch1").css("background", "#6097FF");
  $(".input-popup-container div").css("border-color", "#6097FF");
});
$("#input-search-compet").blur(function () {
  $("#inputSearch1").css("background", "#4871BF");
  $(".input-popup-container div").css("border-color", "#4871BF");
});

$("#input-search-compet").keyup(function (event) {
  if (event.keyCode === 13) {
    $("#inputSearch1").click();
  }
});
/* ===============
Select country competencia integracion meli
==================*/

var select14 = document.querySelector("#select14");
var options14 = document.querySelector("#options14");
var selectContent14 = document.querySelector("#select-content14");
var arrow14 = document.querySelector(".arrow-select-country14");

document.querySelectorAll("#options14 > .option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    var site_id = e.currentTarget.getAttribute("data-siteid");
    select14.setAttribute("data-siteid", site_id);
    selectContent14.innerHTML = e.currentTarget.innerHTML;
    select14.classList.toggle("active");
    options14.classList.toggle("active");
    arrow14.classList.toggle("rotate");
  });
});

if (select14 != null) {
  select14.addEventListener("click", () => {
    select14.classList.toggle("active");
    options14.classList.toggle("active");
    arrow14.classList.toggle("rotate");
  });
}
$(document).on("click", function (event) {
  if (!$(event.target).closest($(".select-box")).length) {
    // console.log("Outside click detected!");
    $("#options14").removeClass("active");
    $(".arrow-select-country14").removeClass("rotate");
  }
});
$(document).on("keydown", function (e) {
  if (e.keyCode === 27) {
    // ESC
    $(".options").removeClass("active");
    $(".arrow-select-country14").removeClass("rotate");
  }
});


