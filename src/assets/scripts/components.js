/* ============================
COMPONENT 
===============================*/

/*  SCRIPTS HEAD */

//Google Tag Manager
$("head").append('<!-- Google Tag Manager --> <script>(function (w, d, s, l, i) {w[l] = w[l] || [];w[l].push({"gtm.start": new Date().getTime(),event: "gtm.js",});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != "dataLayer" ? "&l=" + l : "";j.async = true;j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;f.parentNode.insertBefore(j, f);})(window, document, "script", "dataLayer", "GTM-T6TKZ45"); </script>');
//End Google Tag Manager

//Google Tag Manager
$("head").append('<!-- Google Tag Manager --> <script>(function (w, d, s, l, i) {w[l] = w[l] || [];w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != "dataLayer" ? "&l=" + l : "";j.async = true;j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;f.parentNode.insertBefore(j, f);})(window, document, "script", "dataLayer", "GTM-P9F5BL6");</script>');
//End Google Tag Manager

$("head").append('<!-- Google Tag Manager --> <script>var script = document.createElement("script");script.src = "https://www.googletagmanager.com/gtag/js?id=UA-151125378-1";window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-151125378-1");var script = document.createElement("script");script.src = "https://www.googletagmanager.com/gtag/js?id=G-PWGEGE7RVZ";window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-PWGEGE7RVZ");</script>');

//Hot Jar
$("head").append('<!-- hotjar --> <script>(function (h, o, t, j, a, r) {h.hj =h.hj ||function () {(h.hj.q = h.hj.q || []).push(arguments);};h._hjSettings = { hjid: 3218039, hjsv: 6 };a = o.getElementsByTagName("head")[0];r = o.createElement("script");r.async = 1;r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;a.appendChild(r);})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");</script>');
$("head").append('<!-- hotjar --> <script>(function (h, o, t, j, a, r) {h.hj =h.hj ||function () {(h.hj.q = h.hj.q || []).push(arguments);};h._hjSettings = { hjid: 3218039, hjsv: 6 };a = o.getElementsByTagName("head")[0];r = o.createElement("script");r.async = 1;r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;a.appendChild(r);})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");</script>');

// Meta Pixel Code
$("head").append('<!-- Meta Pixel Code --> <script>!(function (f, b, e, v, n, t, s) {if (f.fbq) return;n = f.fbq = function () {n.callMethod? n.callMethod.apply(n, arguments): n.queue.push(arguments);};if (!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = "2.0";n.queue = [];t = b.createElement(e);t.async = !0;t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init", "1058374348129874");fbq("track", "PageView");</script>');

$("head").append('<!-- Meta Pixel Code --> <noscript><img height="1"width="1"style="display: none"src="https://www.facebook.com/tr?id=1058374348129874&ev=PageView&noscript=1"/></noscript>');

$("head").append('<!-- Meta Pixel Code --> <script>!(function (f, b, e, v, n, t, s) {if (f.fbq) return;n = f.fbq = function () {n.callMethod? n.callMethod.apply(n, arguments): n.queue.push(arguments);};if (!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = "2.0";n.queue = [];t = b.createElement(e);t.async = !0;t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init", "693977324494453");fbq("track", "PageView");</script>');

$("head").append('<!-- Meta Pixel Code --> <noscript><img height="1"width="1"style="display: none"src="https://www.facebook.com/tr?id=693977324494453&ev=PageView&noscript=1"/></noscript>');
// End Meta Pixel Code 


// Función para cargar el header
var header = document.getElementById("header");
var headerLoaded = false;

function loadHeader() {
  if (!headerLoaded) {
    fetch("./../../landing/components/header.html")
      .then((response) => response.text())
      .then((data) => {
        header.insertAdjacentHTML("afterbegin", data);
        // El contenido del header está cargado, podemos hacer las selecciones
        const select9 = document.querySelector("#select9");
        const options9 = document.querySelector("#options9");
        const selectContent9 = document.querySelector("#select-content9");
        const arrow9 = document.querySelector(".arrow-select-country9");

        document.querySelectorAll("#options9 > .option").forEach((option) => {
          option.addEventListener("click", (e) => {
            e.preventDefault();
            selectContent9.innerHTML = e.currentTarget.innerHTML;
            select9.classList.toggle("active");
            options9.classList.toggle("active");
            arrow9.classList.toggle("rotate");
          });
        });
        /*country */
        var country = "AR";
        var queryDict = {};
        $(document).ready(function(){
          // console.log("documentos cargados")
          $(".country-container .options .option").click(function () {
            //  console.log("click bandera")
            var country = $(this).attr("data-country");
            var qs = location.href.includes("?")
              ? "?" + location.href.substring(location.href.indexOf("?") + 1)
              : ``;
            var url = `https://www.ecomm-app.com${qs}`;
            url = removeURLParameter(url, "country");
            url += url.includes("?") ? `&country=${country}` : `?country=${country}`;
            window.location.href = url;
          });

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

        });

        select9.addEventListener("click", () => {
          select9.classList.toggle("active");
          options9.classList.toggle("active");
          arrow9.classList.toggle("rotate");
        });

        $(document).on("click", function (event) {
          if (!$(event.target).closest($(".select-box")).length) {
            $(".options").removeClass("active");
            $(".arrow-select-country9").removeClass("rotate");
          }
        });

        $(document).on("keydown", function (e) {
          if (e.keyCode === 27) {
            $(".options").removeClass("active");
            $(".arrow-select-country9").removeClass("rotate");
          }
        });
      });
    headerLoaded = true;
  }
}

// Función para cargar el header latam
var headerLatam = $("#header-latam");
var headerLoadedlatam = false;

function loadHeaderLatam() {
  if (!headerLoadedlatam) {
    $.get("./../../landing/components/header-latam.html", function(data) {
      headerLatam.prepend(data);
      
      const select9 = $("#select9");
      const options9 = $("#options9");
      const selectContent9 = $("#select-content9");
      const arrow9 = $(".arrow-select-country9");

      options9.on("click", ".option", function(e) {
        e.preventDefault();
        selectContent9.html($(this).html());
        select9.toggleClass("active");
        options9.toggleClass("active");
        arrow9.toggleClass("rotate");
      });

      var country = "AR";
      const qs = location.href.includes("?") ? "?" + location.href.substring(location.href.indexOf("?") + 1) : ``;
      const url = `https://www.ecomm-app.com${qs}`;
      
      options9.on("click", ".option", function() {
        const data_country = $(this).attr("data-country");
        const newUrl = removeURLParameter(url, "country") + (url.includes("?") ? "&country=" : "?country=") + data_country;
        window.location.href = newUrl;
      });

      location.search.substr(1).split("&").forEach(function(item) {
        if (item.split("=")[0] === "country") {
          country = item.split("=")[1];
        }
      });

      $(".country-container .options .option").each(function() {
        const data_country = $(this).attr("data-country");
        if (data_country === country) {
          selectContent9.html($(this).html());
        }
      });

      select9.on("click", function() {
        select9.toggleClass("active");
        options9.toggleClass("active");
        arrow9.toggleClass("rotate");
      });

      $(document).on("click", function(e) {
        if (!$(e.target).closest($(".select-box")).length) {
          $(".options").removeClass("active");
          $(".arrow-select-country9").removeClass("rotate");
        }
      });
      $(document).on("keydown", function(e) {
        if (e.keyCode === 27) {
          $(".options").removeClass("active");
          $(".arrow-select-country9").removeClass("rotate");
        }
      });
    });
    headerLoadedlatam = true;
  }
}

// Función para cargar el footer
var footer = document.getElementById("footer");
function loadFooter() {
  fetch("./../../landing/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footer.insertAdjacentHTML("beforeend", data);
    });
}

// Función para cargar el footer latam
var footerLatam = document.getElementById("footer-latam");
function loadFooterLatam() {
  fetch("./../../landing/components/footer-latam.html")
    .then((response) => response.text())
    .then((data) => {
      footerLatam.insertAdjacentHTML("beforeend", data);
    });
}

// Cargar el header y footer
if (header) {
  loadHeader();
}

if (headerLatam) {
  loadHeaderLatam();
}

if (footer) {
  loadFooter();
}

if (footerLatam) {
  loadFooterLatam();
}
