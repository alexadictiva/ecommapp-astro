async function renderCompetencia() {
  $(".big-info-content").addClass("d-none");
  $(".big-blur-more-seconds").removeClass("d-none");
  $(".big-image-opacity").addClass("d-none");
  var site_id = $("#select13").attr("data-siteid");
  var search = $("#input-search-compet1").val();
  search = encodeURIComponent(btoa(search));
  var url =
    cookie_token != ""
      ? `https://admin.ecomm-app.com/api/competencia/${site_id}/${search}?token=${cookie_token}`
      : `https://admin.ecomm-app.com/api/competencia/${site_id}/${search}?session=${localStorage.session}`;
  var response = await fetch(url);
  $(".big-blur-more-seconds").addClass("d-none");
  if (response.status == 200) {
    $("#error-message").html("");
    dataCompetencia = await response.json();
    console.log(dataCompetencia);
    var reputation = dataCompetencia.reputation;
    reputation = reputation.replace("MercadoLíder ", "");
    reputation = reputation.toLowerCase();
    switch (reputation) {
      case "platinum":
        $(".mercado-level")
          .attr("src", "./../src/assets/icons/Mercadolíder-platinum.svg")
          .show();
        break;
      case "gold":
        $(".mercado-level")
          .attr("src", "./../src/assets/icons/Mercadolíder-gold.svg")
          .show();
        break;
      case "silver":
        $(".mercado-level")
          .attr("src", "./../src/assets/icons/Mercadolíder.svg")
          .show();
        break;
      default:
        $(".mercado-level").hide();
        break;
    }
    $(".reputation-color").each(function () {
      $(this)
        .css("transform", "scale(1)")
        .css("margin-left", "0px")
        .css("margin-right", "0px")
        .css("background-color", $(this).attr("data-inactive"));
    });
    $(".meli-level").html("Sin reputación");
    var reputation_level_id = dataCompetencia.reputation_level_id;
    switch (reputation_level_id) {
      case "5_green":
        $(".verde")
          .css("transform", "scale(1.2)")
          .css("margin-left", "5px")
          .css("margin-right", "5px")
          .css("background-color", "#89E192");
        $(".meli-level").html("Verde");
        break;
      case "4_light_green":
        $(".lima")
          .css("transform", "scale(1.2)")
          .css("margin-left", "5px")
          .css("margin-right", "5px")
          .css("background-color", "#C8F34D");
        $(".meli-level").html("Verde claro");
        break;
      case "3_yellow":
        $(".amarillo")
          .css("transform", "scale(1.2)")
          .css("margin-left", "5px")
          .css("margin-right", "5px")
          .css("background-color", "#FEE266");
        $(".meli-level").html("Amarillo");
        break;
      case "2_orange":
        $(".bordo")
          .css("transform", "scale(1.2)")
          .css("margin-left", "5px")
          .css("margin-right", "5px")
          .css("background-color", "#FDB281");
        $(".meli-level").html("Naranja");
        break;
      case "1_red":
        $(".rojo")
          .css("transform", "scale(1.2)")
          .css("margin-left", "5px")
          .css("margin-right", "5px")
          .css("background-color", "#FF7373");
        $(".meli-level").html("Rojo");
        break;
    }
    if (dataCompetencia.reputation != "")
      $(".meli-level").html(dataCompetencia.reputation);
    $(".title-name").text(dataCompetencia.name);
    $(".title-type-compet").text(dataCompetencia.name_type);
    $(".meli-location-title").text(dataCompetencia.location);
    $(".meli-location").text(dataCompetencia.location);
    //$(".meli-level").text(dataCompetencia.reputation);
    $(".loyality-p").text(
      formatterNumber.format(dataCompetencia.points).replace(",00", "")
    );
    $(".good").text(dataCompetencia.opinion.Buena);
    $(".regular").text(dataCompetencia.opinion.Neutral);
    $(".bad").text(dataCompetencia.opinion.Negativa);
    $(".good_total").text(
      formatterNumber
        .format(
          Math.ceil(
            (dataCompetencia.opinion.Buena * dataCompetencia.sells.total) / 100
          )
        )
        .replace(",00", "")
    );
    $(".regular_total").text(
      formatterNumber
        .format(
          Math.ceil(
            (dataCompetencia.opinion.Neutral * dataCompetencia.sells.total) /
              100
          )
        )
        .replace(",00", "")
    );
    $(".bad_total").text(
      formatterNumber
        .format(
          Math.ceil(
            (dataCompetencia.opinion.Negativa * dataCompetencia.sells.total) /
              100
          )
        )
        .replace(",00", "")
    );
    $(".monto-vendido").text(
      formatterCurrency.format(dataCompetencia.gmv).replace(",00", "")
    );
    $(".unidades-vendido").text(
      formatterNumber.format(dataCompetencia.si).replace(",00", "")
    );
    $(".prom-price").text(
      formatterCurrency.format(dataCompetencia.avg_price).replace(",00", "")
    );
    $(".sells-time").text(
      formatterNumber
        .format(dataCompetencia.sells_last_60_days)
        .replace(",00", "")
    );
    $(".shipping_badge").text(
      dataCompetencia.sells_last_60_days > 0
        ? (
            (dataCompetencia.shipping_delayed * 100) /
            dataCompetencia.sells_last_60_days
          ).toFixed(2)
        : 0
    );
    $(".claims_badge").text(
      dataCompetencia.sells_last_60_days > 0
        ? (
            (dataCompetencia.claims * 100) /
            dataCompetencia.sells_last_60_days
          ).toFixed(2)
        : 0
    );
    $(".cancellations_badge").text(
      dataCompetencia.sells_last_60_days > 0
        ? (
            (dataCompetencia.cancellations * 100) /
            dataCompetencia.sells_last_60_days
          ).toFixed(2)
        : 0
    );
    $(".compet-name").text(dataCompetencia.name);
    $(".shipping_delayed").text(dataCompetencia.shipping_delayed);
    $(".claims").text(dataCompetencia.claims);
    $(".cancellations").text(dataCompetencia.cancellations);
    $(".price-total").text(
      formatterNumber.format(dataCompetencia.prices.total).replace(",00", "")
    );
    $(".name-pub1").text(dataCompetencia.prices.rango_1.name);
    $(".pub-1").html(
      dataCompetencia.prices.rango_1.si > 1
        ? `<span>${dataCompetencia.prices.rango_1.si}</span> publicaciones`
        : `<span>${dataCompetencia.prices.rango_1.si}</span> publicación`
    );
    $(".name-pub2").text(dataCompetencia.prices.rango_2.name);
    $(".pub-2").html(
      dataCompetencia.prices.rango_2.si > 1
        ? `<span>${dataCompetencia.prices.rango_2.si}</span> publicaciones`
        : `<span>${dataCompetencia.prices.rango_2.si}</span> publicación`
    );
    if (dataCompetencia.prices.rango_3) {
      $(".name-pub3").text(dataCompetencia.prices.rango_3.name);
      $(".pub-3").html(
        dataCompetencia.prices.rango_3.si > 1
          ? `<span>${dataCompetencia.prices.rango_3.si}</span> publicaciones`
          : `<span>${dataCompetencia.prices.rango_3.si}</span> publicación`
      );
    }
    $(".total-sells").text(
      formatterNumber.format(dataCompetencia.sells.total).replace(",00", "")
    );
    let sellsPercent =
      (dataCompetencia.sells.ok * 100) / dataCompetencia.sells.total;
    let cancelPercent =
      (dataCompetencia.sells.cancelled * 100) / dataCompetencia.sells.total;
    $(".ok_percent").text(sellsPercent.toFixed(2));
    $(".ok-total").text(
      formatterNumber.format(dataCompetencia.sells.ok).replace(",00", "")
    );
    $(".cancelled_percent").text(cancelPercent.toFixed(2));
    $(".cancelled-total").text(
      formatterNumber.format(dataCompetencia.sells.cancelled).replace(",00", "")
    );
    $(".total-domains").text(dataCompetencia.domains.length);

    /* nuevos DINAMICO */
    //tipos de publicaciones
    let premiumType = dataCompetencia.type.Premium ?? 0;
    let clasicaType = dataCompetencia.type.Clásica ?? 0;
    let dataType = premiumType + clasicaType;

    $(".pub-total").text(dataType);

    $(".pub-total").text(dataType);
    if (dataCompetencia.type.Premium) {
      $(".premium_percent").text(
        (((dataCompetencia.type.Premium / dataType) * 1000) / 10).toFixed(2)
      );
      $(".premium-total").text(dataCompetencia.type.Premium);
    } else {
      $(".premium-total").text(0);
      $(".premium_percent").text(0);
    }

    if (dataCompetencia.type.Clásica) {
      console.log(dataType);
      $(".clasic_percent").text(
        (((dataCompetencia.type.Clásica / dataType) * 1000) / 10).toFixed(2)
      );
      $(".clasic-total").text(dataCompetencia.type.Clásica);
    } else {
      $(".clasic-total").text(0);
      $(".clasic_percent").text(0);
    }

    //Días sin actualizar
    $(".total-noUpdate").text(dataCompetencia.noUpdate.total);
    $(".name-pub16").text(dataCompetencia.noUpdate.rango_1.name);
    $(".pub-16").text(dataCompetencia.noUpdate.rango_1.si);
    $(".name-pub17").text(dataCompetencia.noUpdate.rango_2.name);
    $(".pub-17").text(dataCompetencia.noUpdate.rango_2.si);
    $(".name-pub18").text(dataCompetencia.noUpdate.rango_3.name);
    $(".pub-18").text(dataCompetencia.noUpdate.rango_3.si);

    //Salud
    /*     $(".monto-pub7").text(dataCompetencia.healthPub.Basica);
    $(".monto-pub8").text(dataCompetencia.healthPub.Standard);
    $(".monto-pub9").text(dataCompetencia.healthPub.Profesional); */

    //envios usados
    $(".sents-total").text(
      dataCompetencia.sents[0].si +
        dataCompetencia.sents[1].si +
        dataCompetencia.sents[2].si +
        dataCompetencia.sents[3].si +
        dataCompetencia.sents[4].si +
        dataCompetencia.sents[5].si
    );
    function actualizarElementos(dataCompetencia) {
      for (let i = 0; i < dataCompetencia.sents.length; i++) {
        const siValue = dataCompetencia.sents[i].si;
        const $nameElement = $(".name-pub" + (i + 10));
        const $montoElement = $(".monto-pub" + (i + 10));

        if (siValue === 0) {
          $nameElement.addClass("d-none");
        } else {
          $nameElement.removeClass("d-none");
          $montoElement.text(siValue);
        }
      }
    }

    actualizarElementos(dataCompetencia);

    /*fin nuevo codigo */
    renderChartReputation();
    renderChartRanges();
    renderVentasConcrecion();
    renderChartDomains();

    renderChartTypePub();
    renderChartNoUpdatePub();
    renderChartHealthPub();
    renderChartSentPub();

    printDomains();
    printDomainsModal();
    infoPublicactionsProm();
    infoTablePublicationsStars();
    $(".big-info-content").removeClass("d-none");
  } else {
    try {
      var error_text = await response.text();
    } catch (error) {
      var error_text = "Ha ocurrido un error";
    }
    $(".big-blur-compet").addClass("d-none");
    // $(".big-blur-error").removeClass("d-none");
    $("#error-message").html(error_text);
    /*  setTimeout(() => {
      $(".big-blur-error").addClass("d-none");
    }, 5000); */
  }
}

function renderChartReputation() {
  chartOpinion.data.datasets[0].data[0] = dataCompetencia.opinion.Buena;
  chartOpinion.data.datasets[0].data[1] = dataCompetencia.opinion.Neutral;
  chartOpinion.data.datasets[0].data[2] = dataCompetencia.opinion.Negativa;
  chartOpinion.update("active");
}
function renderChartRanges() {
  /*Grafico de rango de precios*/

  
  
  let rangoPrecio1 = (dataCompetencia.prices.rango_1.si / dataCompetencia.prices.total) * 100;
  let rangoPrecio2 = (dataCompetencia.prices.rango_2.si / dataCompetencia.prices.total) * 100;
  let rangoPrecio3;

  if (dataCompetencia.prices.rango_3){
    rangoPrecio3 = (dataCompetencia.prices.rango_3.si / dataCompetencia.prices.total) * 100;
    chartRangoPrecios.data.labels[0] = dataCompetencia.prices.rango_1.name;
    chartRangoPrecios.data.labels[1] = dataCompetencia.prices.rango_2.name;
  }
  if (dataCompetencia.prices.rango_3){
    chartRangoPrecios.data.labels[2] = dataCompetencia.prices.rango_3.name;


    chartRangoPrecios.data.datasets[0].data[0] = dataCompetencia.prices.rango_1.si;
    chartRangoPrecios.data.datasets[0].data[1] = dataCompetencia.prices.rango_2.si;

}
  if (dataCompetencia.prices.rango_3){
    chartRangoPrecios.data.datasets[0].data[2] = dataCompetencia.prices.rango_3.si;
  } else {
    $("#rango3").addClass("d-none")
  };

  chartRangoPrecios.update("active");
}
function renderVentasConcrecion() {
  
  chartVentasConcrecion.data.datasets[0].data[0] = dataCompetencia.sells.ok;
  chartVentasConcrecion.data.datasets[0].data[1] = dataCompetencia.sells.cancelled;
  chartVentasConcrecion.update("active");
}
function renderChartDomains() {
  var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  for (let index = 0; index < dataCompetencia.domains.length; index++) {
    const domain = dataCompetencia.domains[index];
    chartDomains.labels = [];
    chartDomains.data.labels.push(domain.name);
    chartDomains.data.datasets[0].data.push(domain.si);
    chartDomains.data.datasets[0].backgroundColor.push(dynamicColors());
  }

  chartDomains.update("active");
}
function printDomains() {
  $(".leyenda-domain").html("");
  for (let i = 0; i < dataCompetencia.domains.length; i++) {
    $(".leyenda-domain").append(
      `<li>
        <strong>
          ${dataCompetencia.domains[i].si}
        </strong>
        ${dataCompetencia.domains[i].name}
      </li>`
    );
  }
}
function printDomainsModal() {
  $(".list-dom-complet").html("");
  for (let i = 0; i < dataCompetencia.domains.length; i++) {
    $(".list-dom-complet").append(
      `<li>
        <strong>
          ${dataCompetencia.domains[i].si}
        </strong>
        ${dataCompetencia.domains[i].name}
      </li>`
    );
  }
}
function infoPublicactionsProm() {
  $(".table1 tbody").html("");
  $(".table1-1 tbody").html("");
  if (dataCompetencia.campaigns.length > 0) {
    for (let i = 0; i < dataCompetencia.campaigns.length; i++) {
      $(".table1 tbody").append(
        `<tr>
          <td>
            <div class="desc-card">
              <img src="./../src/assets/imgs/bike.svg" alt="..." class="bike-img" />
              <div class="title-card">
                <h4 class="limitado campaigns-name">
                  ${dataCompetencia.campaigns[i].name}
                </h4>
                <p>
                  <span class="badge-premium tag-premiun">Premium</span>
                  <!--<span class="badge-mas-vendido tag-more-sold">Más vendido</span>-->
                </p>
              </div>
            </div>
            <div class="details-card">
              <ul>
                <li>
                  Precio:
                  <strong>$<span class="price-tag">${formatterCurrency
                    .format(dataCompetencia.campaigns[i].price)
                    .replace(",00", "")}</span></strong>
                </li>
                <li>
                  Unidades vendidas:
                  <strong class="sold-tag">${formatterNumber
                    .format(dataCompetencia.campaigns[i].si)
                    .replace(",00", "")}</strong>
                </li>
              </ul>
            </div>
          </td>
         </tr>`
      );
      $(".table1-1 tbody").append(
        `<tr>
          <td width="450">
            <div class="desc-card">
              <img src="${
                dataCompetencia.campaigns[i].image
              }" alt="..." class="bike-img" />
              <div class="title-card">
                <h4 class="limitado campaigns-name">
                  ${dataCompetencia.campaigns[i].name}
                </h4>
                <p>
                  ${
                    dataCompetencia.campaigns[i].tags &&
                    dataCompetencia.campaigns[i].tags[0]
                      ? `<span class="badge-premium">${dataCompetencia.campaigns[i].tags[0]}</span>`
                      : ``
                  }
                  <!--<span class="badge-mas-vendido">Más vendido</span>-->
                </p>
              </div>
            </div>
          </td>
          <td class="desktop">
            <strong> <span class="price-tag">${formatterCurrency
              .format(dataCompetencia.campaigns[i].price)
              .replace(",00", "")}</span></strong>
          </td>
          <td class="desktop" width="290">
            <span class="sold-tag">${formatterNumber
              .format(dataCompetencia.campaigns[i].si)
              .replace(",00", "")}</span> unidades vendidas
          </td>
        </tr>`
      );
    }
  } else {
    $(".table1 tbody").html(
      `<tr><td colspan="3" align="center" ><p class="text-center">Actualmente no tiene ninguna.</p></tr></td>`
    );
    $(".table1-1 tbody").html(
      `<tr><td colspan="3" align="center" width="550"><p class="text-center">Actualmente no tiene ninguna.</p></tr></td>`
    );
  }
}
function infoTablePublicationsStars() {
  $(".table tbody").html("");
  for (let i = 0; i < dataCompetencia.publicaciones.length; i++) {
    $(".table tbody").append(
      `<tr>
        <td>
          <article class="title-prod-content">
          <div class="img-table-prod">
            <img class="img-prod-content" src="${
              dataCompetencia.publicaciones[i].imagen
            }" alt="..." />
          </div>
            <aside class="title-container-table">
              <h3 class="title-prod limitado pub-name">
                <a target="_blank" href="${
                  dataCompetencia.publicaciones[i].url
                }">${dataCompetencia.publicaciones[i].name}</a>
              </h3>
              <div class="tags-prod">
                <p>
                ${
                  dataCompetencia.publicaciones[i].type == "Premiun"
                    ? ` <span class="badge badge-premium badge-level">
                      ${dataCompetencia.publicaciones[i].type}
                    </span> `
                    : `
                    <span class="badge badge-clasic badge-level">
                      ${dataCompetencia.publicaciones[i].type}
                    </span>
                  `
                }
                 
                </p>
               
                  ${
                    dataCompetencia.publicaciones[i].status == "Activa"
                      ? `<p class="badge badge-activada badge-status">
                          <img src="./../src/assets/icons/activada.svg" alt="..." />
                          <span class="badge-desc"> ${dataCompetencia.publicaciones[i].status}</span>
                         </p>`
                      : `<p class="badge badge-pausada badge-status">
                          <img src="./../src/assets/icons/pausada.svg" alt="..." />
                          <span class="badge-desc"> ${dataCompetencia.publicaciones[i].status}</span>
                         </p>`
                  }

              </div>
              </aside>
            </article>
            <article class="desc-prod">
              <p class="date-update">
                ${dataCompetencia.publicaciones[i].update_time}
              </p>
              <p class="cod-bar">
              ${
                dataCompetencia.publicaciones[i].gtin &&
                dataCompetencia.publicaciones[i].gtin.length > 0
                  ? `<strong>Cód. de barra:</strong> ${dataCompetencia.publicaciones[
                      i
                    ].gtin.join(" , ")}
              `
                  : ``
              }
              </p>
              <p>
              <strong>Categoría: </strong>
                <span class="category-sold">${
                  dataCompetencia.publicaciones[i].categoria
                }</span>
              </p>
            </article>
          </td>
           <td>+<span class="sell-amount">${formatterCurrency
             .format(dataCompetencia.publicaciones[i].sell_amount)
             .replace(",00", "")}</span></td>
           <td>+<span class="sell-si">${formatterNumber
             .format(dataCompetencia.publicaciones[i].si)
             .replace(",00", "")}</span></td>
           <td><span class="sell-price">${formatterCurrency
             .format(dataCompetencia.publicaciones[i].price)
             .replace(",00", "")}</span></td>
           <td>+<span class="sell-stock">${
             dataCompetencia.publicaciones[i].stock
           }</span></td>
           <td class="fulfillment">
           ${
             dataCompetencia.publicaciones[i].fulfillment == false
               ? `<img src="./../src/assets/icons/wrong1-icon.svg" alt="..."/>`
               : `<img src="./../src/assets/icons/correct1-icon.svg" alt="..."/>`
           }
            
           </td>
           <td class="catalogo">
             ${
               dataCompetencia.publicaciones[i].catalogo == false
                 ? `<img src="./../src/assets/icons/wrong1-icon.svg" alt="..."/>`
                 : `<img src="./../src/assets/icons/correct1-icon.svg" alt="..."/>`
             }
           </td>
           <td class="envio_gratis">
             ${
               dataCompetencia.publicaciones[i].envio_gratis == false
                 ? `<img src="./../src/assets/icons/wrong1-icon.svg" alt="..."/>`
                 : `<img src="./../src/assets/icons/correct1-icon.svg" alt="..."/>`
             }
           </td>
           <td class="cuotas">
             ${
               dataCompetencia.publicaciones[i].cuotas == false
                 ? `<img src="./../src/assets/icons/wrong1-icon.svg" alt="..."/>`
                 : `<img src="./../src/assets/icons/correct1-icon.svg" alt="..."/>`
             }
           </td>
           <td class="descuento">
             ${
               dataCompetencia.publicaciones[i].descuento == false
                 ? `<img src="./../src/assets/icons/wrong1-icon.svg" alt="..."/>`
                 : `<img src="./../src/assets/icons/correct1-icon.svg" alt="..."/>`
             }
           </td>
           <td class="me">
              ${
                dataCompetencia.publicaciones[i].me == false
                  ? `<img src="./../src/assets/icons/wrong1-icon.svg" alt="..."/>`
                  : `<img src="./../src/assets/icons/correct1-icon.svg" alt="..."/>`
              }
           </td>
    </tr>`
    );
  }
}

/*nuevos */

function renderChartTypePub() {
  if (dataCompetencia.type.Clásica) {
    chartDistPub.data.datasets[0].data[0] = dataCompetencia.type.Clásica;
  } else {
    chartDistPub.data.datasets[0].data[0] = 0;
  }
  if (dataCompetencia.type.Premium) {
    chartDistPub.data.datasets[0].data[1] = dataCompetencia.type.Premium;
  } else {
    chartDistPub.data.datasets[0].data[1] = 0;
  }
  chartDistPub.update("active");
}

function renderChartNoUpdatePub() {
  chartNoUpdate.data.datasets[0].data[0] = dataCompetencia.noUpdate.rango_1.si;
  chartNoUpdate.data.datasets[0].data[1] = dataCompetencia.noUpdate.rango_2.si;
  chartNoUpdate.data.datasets[0].data[2] = dataCompetencia.noUpdate.rango_3.si;
  chartNoUpdate.update("active");
}

function renderChartHealthPub() {
  let percentageNativo = dataCompetencia.health_media * 100; // aqui colocar el % dinamico
  let percentage = Math.round(percentageNativo);
  $(".indicador").text(`${percentage}%`);
  updatePuntero(percentage);
  chartPubHealth.data.datasets[0].data[0] = 70; // dataCompetencia.healthPub.Basica;
  chartPubHealth.data.datasets[0].data[1] = 29; // dataCompetencia.healthPub.Standard;
  chartPubHealth.data.datasets[0].data[2] = 1; // dataCompetencia.healthPub.Profesional;
  chartPubHealth.update("active");
}

const updatePuntero = (percentage) => {
  const puntero = document.querySelector(".puntero");
  const rotation = (percentage / 100) * 180 - 90;

  // Calcula el ajuste de posición para que el extremo inferior quede en el centro
  const positionAdjustment = 2; // Ajusta este valor según tus necesidades

  puntero.style.transform = `translateX(-50%) translateY(${positionAdjustment}px) rotate(${rotation}deg)`;
};

function renderChartSentPub() {
  console.log(
    dataCompetencia.sents[0].name + " " + dataCompetencia.sents[0].si
  );
  console.log(
    dataCompetencia.sents[1].name + " " + dataCompetencia.sents[1].si
  );

  chartSentUsed.data.datasets[0].data[0] = dataCompetencia.sents[0].si;
  chartSentUsed.data.datasets[0].data[1] = dataCompetencia.sents[1].si;
  chartSentUsed.data.datasets[0].data[2] = dataCompetencia.sents[2].si;
  chartSentUsed.data.datasets[0].data[3] = dataCompetencia.sents[3].si;
  chartSentUsed.data.datasets[0].data[4] = dataCompetencia.sents[4].si;
  chartSentUsed.data.datasets[0].data[5] = dataCompetencia.sents[5].si;
  chartSentUsed.update("active");
}
/*=======================
DATA GRAFICOS CHART
=========================*/
Chart.defaults.color = "#6D757B";

/*Grafico opiniones */
const chartOpinion = new Chart(document.getElementById("chartOpinion"), {
  type: "doughnut",
  data: {
    labels: ["Buena", "Neutral", "Negativa"],
    datasets: [
      {
        backgroundColor: ["#89E192", "#FAC688", "#FF8888"],
        borderColor: ["#ffffff"],
        data: [0, 0, 0],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
});

/* Grafico de rango de precios */
const data1 = {
  labels: ["Hasta $15.000", "De $15.000 a $30.000", "Más de $30.000"],
  datasets: [
    {
      backgroundColor: ["#ED6ED9", "#F7CF6B", "#40D6BB"],
      borderColor: ["#ffffff"],
      data: [0, 0, 0],
    },
  ],
};

const config1 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data1,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartRangoPrecios = new Chart(
  document.getElementById("chartRangoPrecios"),
  config1
);

/*Grafico de ventas concretadas*/

const data2 = {
  labels: ["Ventas concretadas", "Ventas canceladas"],
  datasets: [
    {
      backgroundColor: ["#89E192", "#FF8888"],
      borderColor: ["#ffffff"],
      data: [0, 0],
    },
  ],
};

const config2 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartVentasConcrecion = new Chart(
  document.getElementById("myChart2"),
  config2
);

/*Grafico de distribucion de dominio de ventas*/

/*$(document).ready(function () {
  getDomains();
});*/

function getDomains() {
  dataCompetencia.domains.forEach(function (dominio) {
    console.log(dominio.name);
    data3.datasets[0].data.push(dominio.si);
    data3.labels.push(dominio.name);
  });
}

const data3 = {
  labels: [],
  datasets: [
    {
      backgroundColor: [],
      borderColor: ["#ffffff"],
      data: [],
    },
  ],
};

const config3 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data3,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartDomains = new Chart(
  document.getElementById("chartDomains"),
  config3
);

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    $(
      ".big-blur-more-dom, .big-blur-more-seconds, .big-blur-error, .big-blur-compet, .big-blur-meli"
    ).addClass("d-none");
  }
});

/* Gráfico de distribucion de tipo de publicaciones */

const data4 = {
  labels: ["Clásicas", "Premium"],
  datasets: [
    {
      backgroundColor: ["#86DBD9", "#23A2DF"],
      borderColor: ["#ffffff"],
      data: [0, 0],
    },
  ],
};

const config4 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data4,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartDistPub = new Chart(
  document.getElementById("chartDistPub"),
  config4
);

/*Gráfico de publicaciones no actualizadas */
const data5 = {
  labels: ["0 a 5 días", "5 a 15 días", "Más de 15 días"],
  datasets: [
    {
      backgroundColor: ["#89e192", "#fac688", "#f88484"],
      borderColor: ["#ffffff"],
      data: [0, 0, 0],
    },
  ],
};

const config5 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data5,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartNoUpdate = new Chart(
  document.getElementById("chartNoUpdate"),
  config5
);

/*Gráfico de salud de las publicaciones */

const data6 = {
  labels: ["Calidad básica", "Calidad standard", "Calidad profesional"],
  datasets: [
    {
      backgroundColor: ["#f88484", "#fac688", "#89e192"],
      borderColor: ["#f88484", "#fac688", "#89e192"],
      data: [0, 0, 0],
    },
  ],
};

const config6 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data6,
  options: {
    aspectRatio: 1,
    responsive: true,
    cutout: "80%",
    circumference: 210,
    rotation: 255,
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartPubHealth = new Chart(
  document.getElementById("chartPubHealth"),
  config6
);

/*Gráfico de tipos de envio */

const data7 = {
  labels: [
    "Flex",
    "Fulfillment",
    "Cross Docking",
    "Drop Off",
    "X Drop Off",
    "Acordar con comprador",
  ],
  datasets: [
    {
      backgroundColor: [
        "#89e192",
        "#fac688",
        "#f88484",
        "#ed6ed9",
        "#f7cf6b",
        "#23a2df",
      ],
      borderColor: ["#ffffff"],
      data: [0, 0, 0, 0, 0, 0],
    },
  ],
};

const config7 = {
  type: "doughnut", // para cambiar el tipo de grafico
  data: data7,
  options: {
    cutoutPercentage: 30,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
};

const chartSentUsed = new Chart(
  document.getElementById("chartSentUsed"),
  config7
);
