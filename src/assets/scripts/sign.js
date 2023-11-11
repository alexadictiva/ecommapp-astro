if (location.hostname=="www.ecomm-app.com") window.location="https://admin.ecomm-app.com/login"+window.location.search;

$.get("https://admin.ecomm-app.com/login_back/ping", (data) => {
  console.log(data);
  $("#select-country-id").val(data.code);
  $("#melilink")[0].href = $("#melilink")[0].href.replace(
    /[?&]country=[a-z]{2}/g,
    ""
  );
  if ($("#melilink")[0].href.indexOf("?") == -1)
    $("#melilink")[0].href = $("#melilink")[0].href + "?country=" + data.code;
  else
    $("#melilink")[0].href = $("#melilink")[0].href + "&country=" + data.code;
});

function changeCountry(country) {
  $("#melilink")[0].href = $("#melilink")[0].href.replace(
    /[?&]country=[a-z]{2}/g,
    ""
  );
  if ($("#melilink")[0].href.indexOf("?") == -1)
    $("#melilink")[0].href = $("#melilink")[0].href + "?country=" + country;
  else $("#melilink")[0].href = $("#melilink")[0].href + "&country=" + country;
}

$("#boton_login").click((e) => {
  var email = $("#login_username").val();
  var password = $("#txtPassword2").val();
  $.post(
    "/login_back/standalone",
    { email: email, password: password },
    function (data, status, xhr) {
      window.location = data.url;
    }
  ).fail(function (data, status, xhr) {
    $(".invalid-alert-container-signup-admin").html("<p>Usuario o contraseña incorrectos<p>")
    $(".invalid-alert-container-signup-admin").css("display","block")

  });
});

  async function myAjax(url,param) {
    const result = await $.ajax({
      url: url,
      type: 'POST',
      data: param,
    })
    return result
  }

  $("#login-operador").click(async (e)=>{
    var usuario=$("#usuario").val();
    var password=$("#txtPassword3").val();
 
    try{
      await myAjax("/Operadores/logout",null);
    } catch(e){

    }
    $.ajax({
      url:"/Operadores/login",   
      type:"POST",
      contentType: "application/x-www-form-urlencoded",
      data:`usuario=${usuario}&password=${password}`,
      success:function(data, status, xhr){
          if (data.data.status==2) {
              window.location = "/";
          } else {
            $(".check-validate3")
            .attr("src", "./../src/assets/icons/wrong-icon.svg")
            .css("display", "inline");
            $(".invalid-alert-container-signup-operator").css("display", "block");
            $(".input-mail-signup-operator").css("border-color", "#FF6060");
        
            $(".svg-mail-signup-operator").attr(
              "src",
              "./../src/assets/icons/user-icon.svg"
            );
            $('.invalid-alert-container-signup-operator').html("<p>Usuario o contraseña invalidos<p>");
          }
      },
      error:function(data,status,xhr) {
          /*if (data.responseJSON)
            loginErrorFromServer(data.responseJSON.message, iconEmail);
          else console.log(data);*/
    },
  });
});



$("#forgot_password").click(async (e)=>{
    var email=$("#email_forgot").val()
    const isEmail = checkIsEmail(email);
    if (!isEmail) {
      $("#error_sign").css("display","block")
      return;
    }
    var userData={user:email};
    $.post("/login_back/changePassword",userData,
        function(data, status, xhr){
          $(".recover-info-container").css("display", "none");
          $(".recover-input-container").css("display", "none");
          $(".btn-recover-container").css("display", "none");
          $(".recover-check-validate").css("display", "block");
          $(".recover-intent-container").css("display", "block");
        }).fail(function(data,status,xhr) {
          $(".recover-intent-container").slideToggle(intervalsTime);
          $(".recover-intent-container p").text(
            "Se ha producido un error, vuelva a intentarlo. " +
              " Si el error persiste comunicate con nosotros."
          );
          $(".btn-recover-wsp").slideToggle(intervalsTime);
          var desktop = window.matchMedia("(min-width: 1024px)");
      

        }
    );
  });


$("#changePassword").click(async (e)=>{
  var changeToken=getUrlParameter("change");
  var userData={user:changeToken,password_1:$("#txtPassword5").val()};
  $.post("/login_back/cambiarPassword",userData,
      function(data, status, xhr) {
        $(".input-pass-recover-cap-container").slideToggle(intervalsTime);
        $(".input-pass-repeat-recover-cap-container").slideToggle(intervalsTime);
        $(".btn-cap-pass-container").slideToggle(intervalsTime);
      
        $(".check-pass-changed").slideToggle(intervalsTime);
        $(".info-pass-changed").slideToggle(intervalsTime);
        $(".btn-signup").slideToggle(intervalsTime);
        $(".logo-footer-container-white").slideToggle(intervalsTime);
        $(".modal-body").css("background-color", "#6097FF");
        $(".modal-body").css("border-radius", "40px 40px 40px 40px");
        $(".modal-header").hide();
        $(".logo-footer-container").hide();
        $(".recover-cap-container").hide();
      
        var desktop = window.matchMedia("(min-width: 1024px)");
        //para mobile
        $(".modal-body").css("height", "418px").addClass("alarge-modal");
      }).fail(function(data,status,xhr) {
        $(".input-pass-recover-cap-container").slideToggle(intervalsTime);
        $(".input-pass-repeat-recover-cap-container").slideToggle(intervalsTime);
        $(".btn-cap-pass-container").slideToggle(intervalsTime);      
        $(".modal-header ").css("background", "#FFB0B0");
        $(".modal-title").css("color", "#7F3030");
        $(".btn-modal-close").css("background-color", "#BF4848");
        $(".recover-check-validate img").attr(
          "src",
          "./../src/assets/icons/wrong-icon.svg"
        );
        $(".recover-check-validate")
          .css("margin-bottom", "28px")
          .slideToggle(intervalsTime);
        $(".recover-intent-container").slideToggle(intervalsTime);
        $(".recover-intent-container p").text(
          "Se ha producido un error, vuelva a intentarlo. " +
            " Si el error persiste comunicate con nosotros."
        );      

        $(".btn-recover-wsp").slideToggle(intervalsTime);

  
      }
  );



});  

function restorePassword(){
  $(".recover-info-container").slideToggle(intervalsTime);
  $(".recover-input-container").slideToggle(intervalsTime);
  $(".btn-recover-container").slideToggle(intervalsTime);
  $(".recover-check-validate").slideToggle(intervalsTime);
  $(".recover-intent-container").slideToggle(intervalsTime);
  $(".input-pass-recover-cap-container").slideToggle(intervalsTime);
  $(".input-pass-repeat-recover-cap-container").slideToggle(intervalsTime);
  $(".recover-check-validate").slideToggle(intervalsTime);
  $(".recover-intent-container").slideToggle(intervalsTime);
  $(".btn-cap-pass-container").slideToggle(intervalsTime);
  $(".modal-title").text("Ingresar nueva contraseña");
}

//MODAL INIT SESSION

var changeToken=null;
$(document).ready(function () {
  var session=getUrlParameter("session_ok");
  var change=getUrlParameter("change");
  var error_message=getUrlParameter("message");
  if (session) $("#initSessionModal").modal();
  if (change) {
   //showPasswordModalRecover()
   restorePassword();
   $("#recoverPass").modal();
  }
  if (error_message) {
    $("#errormessage").text(error_message);
    $("#errorSessionModal").modal();
  }
  


});

$("#melilink").on("click",()=>{
  createInterval()
  localStorage.setItem("melilink","1");
})
function createInterval(){
  var count=0;
  var interval=setInterval(()=>{
    var fromMeli=localStorage.getItem("melilink");
    count++;
    if (fromMeli=="1" && count>3) {
      console.log("Vino de meli");

      $(".hide-after-meli").addClass("d-none")
      $(".show-after-meli").removeClass("d-none")
        localStorage.setItem("melilink",null);
        clearInterval(interval);
        window.location="https://admin.ecomm-app.com/login/login_from_meli.html"+window.location.search;
    }
  },500);
}

$('#txtPassword3').on('keyup', function(event) {
  if (event.keyCode === 13) {
    $("#login-operador").click();
  }
});

