if (location.hostname=="www.ecomm-app.com") window.location="https://admin.ecomm-app.com/login/register.html"+window.location.search;
$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                    .exec(window.location.search);

  return (results !== null) ? results[1] || 0 : false;
}


var auxEmail= getUrlParameter("email");;
if (auxEmail) {
  $("#user").val(auxEmail);
}



function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

var session = localStorage.getItem("session");
if (!session) {
  session = uuidv4();
  localStorage.setItem("session", session);
}
if ($.urlParam("fromGmail")) $("#googlelink").click()


function sendCodigo(pais, numero, ok, error) {
  var url = "/login_back/sendCodigo";
  var userData = {
    session: session,
    pais: pais,
    numero: numero,
  };
  $.post(url, userData, function (data, status, xhr) {
    ok();
    console.log("OK");
  }).fail(function (data, status, xhr) {
    error(data);
  });
}

function verifyCodigo(codigo, ok, error) {
  var url = "/login_back/verifyCodigo";
  var userData = {
    session: session,
    codigo: codigo,
  };
  $.post(url, userData, function (data, status, xhr) {
    ok();
  }).fail(function (data, status, xhr) {
    error();
  });
}
//$("#btn-continue").attr("disabled",true);

function evaluateButton(){
  var numero = $("#user-phone").val();
  var name = $("#user-name").val();
  var user = $("#user").val();
  let emailRegex = /.+@.+/i;

  if (numero.length>0 && name.length>0 && user.length>0 && emailRegex.test(user)) {
    $("#btn-continue").attr("disabled",false);
    $("#btn-continue").removeClass("btn-disabled");
  } else {
    $("#btn-continue").attr("disabled",true);
    $("#btn-continue").addClass("btn-disabled");
  }


}

$("#btn-continue").click(async (e) => {
  $("#btn-continue").addClass("d-none");
  $(".code-verification-desc").addClass("d-none");
  $("#btn-continue2").removeClass("d-none");
  $(".input-pass").removeClass("d-none");
  $(".input-pass-repeat").removeClass("d-none");
  $(".btn-test-free").removeClass("d-none");
  $(".no-code").addClass("d-none");
  $(".code-verification-info").addClass("d-none");
  $("#btn-continue2").addClass("d-none");
  $(this).addClass("d-none");

});

$("#register_button").click(async (e) => {
  var utm_source = getUrlParameter("utm_source");
  var utm_medium = getUrlParameter("utm_medium");
  var utm_campaign = getUrlParameter("utm_campaign");
  var url =
    "/login_back/registerUser" +
    "?utm_source=" +
    utm_source +
    "&utm_medium=" +
    utm_medium +
    "&utm_campaign=" +
    utm_campaign +
    "&referrer=" +
    document.referrer;
  var name = $("#user-name").val();
  var user = $("#user").val();
  var password_1 = $("#txtPassword").val();
  var password_2 = $("#txtPassword1").val();
  var pais = $("#select-content10")
    .text()
    .replace(/[^0-9]/g, "");
  if (pais.length == 0) pais = 54;

  var telefono = String(pais) + $("#user-phone").val();


  var userData = {
    user,
    password_1,
    password_2,
    name,
    telefono,
  };

  $.post(url, userData, function (data, status, xhr) {
    $("#mailConfirmModal").modal();
  }).fail(function (data, status, xhr) {
    $(".invalid-alert-container").css("display", "block");
    $(".invalid-alert-container").html(
      "<p>" + data.responseJSON.error + "</p>"
    );
  });
});

function resend() {
  var pais = $("#select-content10")
    .text()
    .replace(/[^0-9]/g, "");
  if (pais.length == 0) pais = 54;
  $("#user-phone-country-code").val();
  var numero = $("#user-phone").val();
  /*
  sendCodigo(
    pais,
    numero,
    () => {
      $("#btn-continue").addClass("d-none");
      $(".code-verification-info").removeClass("d-none");
      $(".no-code").removeClass("d-none");
      $(".code-verification-desc").addClass("d-none");
      $(this).addClass("d-none");
      $("#btn-continue2").removeClass("d-none");
    },
    (response) => {
      $(".alert-phone").text(response.responseText);
      $(".alert-phone").removeClass("d-none");
      console.log("NOT_OK");
    }
  );*/
}

function resend_modal() {
  var pais = $("#select11")
    .text()
    .replace(/[^0-9]/g, "");
  if (pais.length == 0) pais = 54;
  var numero = $("#user-phone-modal").val();
  window.location = $("#googlelink").attr("href") + "&telefono=" + numero;

  /*
  sendCodigo(
    pais,
    numero,
    () => {
      $(".desc-step-1").slideToggle(200);
      $(".code-verification-desc-country").slideToggle(200);
      $(".number-step-1").slideToggle(200);
      $(".code-verification-info-modal").removeClass("d-none");
      $("#btn-continue3").slideToggle(200);

      $(".gmail-step-2").slideToggle(200);
      $(".no-code-modal").removeClass("d-none");
    },
    (response) => {
      $(".alert-phone").text(response.responseText);
      $(".alert-phone").removeClass("d-none");
      console.log("NOT_OK");
    }
  );*/
}

//$("#btn-continue").click(resend);

$("#input-code-verify-1").on("keyup", function () {
  limitText(this, 4);
});

$("#gmail-input-code-verify-1").on("keyup", function () {
  limitText(this, 4);
});

function limitText(field, maxChar) {
  var ref = $(field),
    val = ref.val();
  if (val.length >= maxChar) {
    ref.val(function () {
      console.log(val.substr(0, maxChar));
      return val.substr(0, maxChar);
    });
  }
}

$("#btn-continue2").click(function () {
  var codigo = $("#input-code-verify-1").val();
  verifyCodigo(
    codigo,
    () => {
      $(".input-pass").removeClass("d-none");
      $(".input-pass-repeat").removeClass("d-none");
      $(".btn-test-free").removeClass("d-none");
      $(".no-code").addClass("d-none");
      $(".code-verification-info").addClass("d-none");
      $("#btn-continue2").addClass("d-none");
      $(this).addClass("d-none");
    },
    () => {
      $(".code-wrong").removeClass("d-none");
      console.log("NOT_OK");
    }
  );
});

/* $("#btn-continue").css("background", "#A1A3AF").prop("disabled", true);
__$(document).keyup(function () {
  if (
    $(".input-name-text").val() !== "" ||
    $(".input-mail-text").val() !== "" ||
    $(".input-telf-text").val() !== ""
  ) {
    $("#btn-continue").css("background", "#6097ff").prop("disabled", false);
  } else {
    $("#btn-continue").css("background", "#A1A3AF").prop("disabled", true);
  }
}); */

$(document).delegate(".input-code-text", "keyup", function () {
  let country = $(".input-code-text").val();

  switch (country) {
    case "+57":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/col-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Colombian Flag");
      break;
    case "+58":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/ven-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Venezuelan Flag");
      break;
    case "+54":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/arg-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Argentina Flag");
      break;
    case "+598":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/uru-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Uruguay Flag");
      break;
    case "+591":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/bol-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Bolivian Flag");
      break;
    case "+52":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/mex-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Mexican Flag");
      break;
    case "+56":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/chi-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Chile Flag");
      break;
    case "+51":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/per-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Perubian Flag");
      break;
    case "+55":
      $(".svg-phone-country").attr(
        "src",
        "./../src/assets/imgs/bra-flag.svg"
      );
      $(".svg-phone-country").attr("alt", "Brazilian Flag");
      break;
    default:
      break;
  }
});

$(document).delegate(".input-code-text-modal", "keyup", function () {
  let country = $(".input-code-text-modal").val();

  switch (country) {
    case "+57":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/col-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Colombian Flag");
      break;
    case "+58":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/ven-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Venezuelan Flag");
      break;
    case "+54":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/arg-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Argentina Flag");
      break;
    case "+598":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/uru-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Uruguay Flag");
      break;
    case "+591":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/bol-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Bolivian Flag");
      break;
    case "+52":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/mex-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Mexican Flag");
      break;
    case "+56":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/chi-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Chile Flag");
      break;
    case "+51":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/per-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Perubian Flag");
      break;
    case "+55":
      $(".svg-phone-country-modal").attr(
        "src",
        "./../src/assets/imgs/bra-flag.svg"
      );
      $(".svg-phone-country-modal").attr("alt", "Brazilian Flag");
      break;
    default:
      break;
  }
});

$(".no-code p").click(function () {
  $(".desc-code-no-sent").removeClass("d-none");
});

$(document).delegate("#btn-continue3", "click", resend_modal);

$("#btn-continue4").click(() => {
  var codigo = $("#gmail-input-code-verify-1").val();
  verifyCodigo(
    codigo,
    () => {
      window.location = $("#googlelink").attr("href") + "&session=" + session;
    },
    () => {
      $(".code-wrong").removeClass("d-none");
      console.log("NOT_OK");
    }
  );
});

$(".code-not-sent").click(function () {
  $(".info-code-not-sent").removeClass("d-none");
});

$("#melilink").on("click",()=>{
  createInterval()
  localStorage.setItem("melilink","1");
})

$("#melilink1").on("click",()=>{
  createInterval()
  localStorage.setItem("melilink","1");
})
$("#melilink2").on("click",()=>{
  createInterval()
  localStorage.setItem("melilink","1");
})


//$(".show-after-meli").addClass("d-none")
//$(".hide-after-meli").removeClass("d-none")

if (window.location.href.indexOf("from_meli")!=-1){
  $(".hide-after-meli").addClass("d-none")
  $(".show-after-meli").removeClass("d-none")
}

function createInterval(){
  var count=0;
  var interval=setInterval(()=>{

    var fromMeli=localStorage.getItem("melilink");
    count++;
    if (fromMeli=="1" && count>3) {
      console.log("Vino de meli");

        localStorage.setItem("melilink",null);
        clearInterval(interval);
        window.location="https://admin.ecomm-app.com/login/register_from_meli.html"+window.location.search;

    }

  },500);
}

