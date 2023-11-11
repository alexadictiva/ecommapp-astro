const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS'
});
$.get("https://admin.ecomm-app.com/tickets/argentina", function (response) {
  //$(".box-plan-container-mensual, .box-plan-container-trimestral").html('');
  
  for (let i = 0; i < response.length; i++) {
    const value = response[i];
    max_orders_desc = `Hasta ${formatter.format(value.max_orders).replace(",00", "").replace("$", "")} ventas`;
    max_factura_desc = `Hasta ${formatter.format(value.max_factura).replace(",00", "").replace("$", "")} comprobantes`;
    max_items_desc = `Hasta ${formatter.format(value.max_items).replace(",00", "").replace("$", "")} publicaciones`;
    if (value.days_active == 30 && value.name != "Emprendedor") {
      $(".box-plan-container-mensual").prepend(`
            <!-- ${value.name} -->
            <div class="plan ${value.name}">
              <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                <aside class="box">
                  <div class="">
                    <h3 class="text-uppercase text-center">${value.name}</h3>
                    <h4 class="text-center">
                      ${formatter.format(value.fee_amount).replace(",00", "")}<small> + IVA /mes </small>
                    </h4>
                    <ul class="plan-benefits plan-benefits-variant">
                      <li>
                         ${max_orders_desc}
                      </li>
                      <li>
                         ${max_factura_desc}
                      </li>
                      <li>
                         ${max_items_desc}
                      </li>
                    </ul>
                   
                     
                    <div class="total-plan-container"> 
                      <p class="detail-hidden">
                        Plan 1 mes<span>$2.600</span>
                      </p>
                      <p class="detail-hidden">IVA<span>+$546</span></p>
                      <p class="total-plan">Total <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
                    </div>
                  </div>
                  <div class="btn-container-contrat">
                    <a
                      class="btn-contrat btn-contrat-arg"
                      data-id="1"
                      onclick="window.location.href = '/login/register.html'"
                      >Probá gratis</a
                    >
                  </div>
                  <ul class="plan-benefits plan-benefits-dif">
                  
                      <li class="fact-none"><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>
                      ${value.name == "Inicial" ? "<li class='no-check fact-none'> - </li>" : "<li class='fact-none'><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>"}
                       
                      ${value.name !== "Inicial" ? "<li ><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>" : "<li class='no-check'> - </li>"}
                      <li>
                        <span>${value.operadores}</span> 
                      </li>
                      <li>
                        <span>${value.competencia}</span> 
                      </li>
                      <li>
                        <span>${value.imagenes}</span> 
                      </li>
                      <li>
                        <span>${value.chatgpt}</span> 
                      </li>
                    </ul>
                </aside>
              </div>
            </div>
      `);
      $("#accordionMensual").append(`
      <div class="card">
        <div class="card-header" id="heading${i}">
          <button
            class=""
            type="button"
            data-toggle="collapse"
            data-target="#collapse${i}"
            aria-expanded="true"
            aria-controls="collapse${i}"
          >
            <h2 class="mb-0">
              <div>
              ${value.name}
                <img
                  src="./../src/assets/icons/arrow-down-blue.svg"
                  alt="..."
                />
              </div>
              <p class="plan-info">
                <span class="price-info">${formatter.format(value.fee_amount).replace(",00", "")}</span>
                <span class="iva-info">+IVA/mes</span>
              </p>
            </h2>
          </button>
        </div>
    
        <div
          id="collapse${i}"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionMensual"
        >
          <div class="card-body">
            <ul class="plan-desc">
              <li>${max_orders_desc}</li>
              <li>${max_factura_desc}</li>
              <li>${max_items_desc}</li>
            </ul>
            <p class="total-mobile">Total <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
            <div class="btn-container">
              <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
            </div>
             <ul class="plan-desc1">
              <li>Facturación manual, masiva</li>
              ${value.name == "Inicial" ? " " : "<li>Carga masiva de inventario</li>"}  
              <li><span>${value.operadores}</span> Operadores</li>
              <li><span>${value.competencia}</span> Análisis de competidores</li>
              <li><span>${value.imagenes}</span> Imágenes editadas</li>
              <li><span>${value.chatgpt}</span> Créditos ChatGPT</li>
            </ul>
          </div>
        </div>
      </div>
      `);
    }
    if (value.days_active == 90 && value.name != "Emprendedor") {
      mensual = value.fee_amount / 3;
      $(".box-plan-container-trimestral").prepend(`
            <!-- ${value.name} -->
            <div class="plan ${value.name}">
              <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                <aside class="box">
                  <div class="">
                    <h3 class="text-uppercase text-center">${value.name}</h3>
                    <h4 class="text-center">
                      ${formatter.format(mensual).replace(",00", "")}<small> + IVA /mes </small>
                    </h4>
                    
                    <ul class="plan-benefits plan-benefits-variant">
                      <li>
                         ${max_orders_desc}
                      </li>
                      <li>
                         ${max_factura_desc}
                      </li>
                      <li>
                         ${max_items_desc}
                      </li>
                    </ul>
                    
                    <div class="total-plan-container">
                      <p class="detail-hidden">
                        Plan 1 mes<span>$2.600</span>
                      </p>
                      <p class="detail-hidden">IVA<span>+$546</span></p>

                      <p class="total-plan">Total <strong class="old-price">${formatter.format(value.fee_no_discount * 1.21).replace(",00", "")}</strong> <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
                    </div>
                  </div>
                  <div class="btn-container-contrat">
                    <a
                      class="btn-contrat btn-contrat-arg"
                      data-id="1"
                      onclick="window.location.href = '/login/register.html'"
                      >Probá gratis</a
                    >
                  </div>
                  <ul class="plan-benefits plan-benefits-dif">
                      <li>Facturación manual y masiva</li>
                      ${value.name == "Inicial" ? "<li class='no-check'> - </li>" : "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>"}
                      ${value.name !== "Inicial" ? "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>" : " - "}
                      <li>
                        <span>${value.operadores}</span> 
                      </li>
                      <li>
                        <span>${value.competencia}</span> 
                      </li>
                      <li>
                        <span>${value.imagenes}</span> 
                      </li>
                      <li>
                        <span>${value.chatgpt}</span> 
                      </li>
                      
                    </ul>
                </aside>
              </div>
            </div>
      `);
      $("#accordionTrimestral").append(`
      <div class="card">
        <div class="card-header" id="heading${i}T">
          <button
            class=""
            type="button"
            data-toggle="collapse"
            data-target="#collapse${i}T"
            aria-expanded="true"
            aria-controls="collapse${i}T"
          >
            <h2 class="mb-0">
              <div>
              ${value.name}
                <img
                  src="./../src/assets/icons/arrow-down-blue.svg"
                  alt="..."
                />
              </div>
              <p class="plan-info">
                <span class="price-info">${formatter.format(mensual).replace(",00", "")}</span>
                <span class="iva-info">+IVA/mes</span>
              </p>
            </h2>
          </button>
        </div>
    
        <div
          id="collapse${i}T"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionMensual"
        >
          <div class="card-body">
            <ul class="plan-desc">
              <li>${max_orders_desc}</li>
              <li>${max_factura_desc}</li>
              <li>${max_items_desc}</li>
            </ul>
            <p class="total-mobile">Total <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
            <div class="btn-container">
              <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
            </div>
             <ul class="plan-desc1">
              <li>Facturación manual, masiva</li>
              <li>Facturación automática</li>
              ${value.name == "Inicial" ? " " : "<li>Carga masiva de inventario</li>"}  
              <li><span>${value.operadores}</span> Operadores</li>
              <li><span>${value.competencia}</span> Análisis de competidores</li>
              <li><span>${value.imagenes}</span> Imágenes editadas</li>
              <li><span>${value.chatgpt}</span> Créditos ChatGPT</li>
            </ul>
          </div>
        </div>
      </div>
      `);
    }
    if (value.days_active == 180 && value.name != "Emprendedor") {
      mensual = value.fee_amount / 6
      $(".box-plan-container-semestral").prepend(`
            <!-- ${value.name} -->
            <div class="plan ${value.name}">
              <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                <aside class="box">
                  <div class="">
                    <h3 class="text-uppercase text-center">${value.name}</h3>
                    <h4 class="text-center">
                      ${formatter.format(mensual).replace(",00", "")}<small> + IVA /mes </small>
                    </h4>
                    
                    <ul class="plan-benefits plan-benefits-variant">
                      <li>
                         ${max_orders_desc}
                      </li>
                      <li>
                         ${max_factura_desc}
                      </li>
                      <li>
                         ${max_items_desc}
                      </li>
                    </ul>
                     
                    
                    <div class="total-plan-container">
                      <p class="detail-hidden">
                        Plan 1 mes<span>$2.600</span>
                      </p>
                      <p class="detail-hidden">IVA<span>+$546</span></p>
                      
                      <p class="total-plan">Total <strong class="old-price">${formatter.format(value.fee_no_discount * 1.21).replace(",00", "")}</strong> <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
                    </div>
                  </div>
                  <div class="btn-container-contrat">
                    <a
                      class="btn-contrat btn-contrat-arg"
                      data-id="1"
                      onclick="window.location.href = '/login/register.html'"
                      >Probá gratis</a
                    >
                  </div>
                   <ul class="plan-benefits plan-benefits-dif">
                      <li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>
                      ${value.name == "Inicial" ? "<li class='no-check'> - </li>" : "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>"}
                      ${value.name !== "Inicial" ? "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>" : "<li class='no-check'> - </li>"}
                      <li>
                        <span>${value.operadores}</span>
                      </li>
                      <li>
                        <span>${value.competencia * 6}</span>
                      </li>
                      <li>
                        <span>${value.imagenes * 6}</span>
                      </li>
                      <li>
                        <span>${value.chatgpt * 6}</span> 
                      </li>
                    </ul>
                </aside>
              </div>
            </div>
      `);
      $("#accordionSemestral").append(`
      <div class="card">
        <div class="card-header" id="heading${i}S">
          <button
            class=""
            type="button"
            data-toggle="collapse"
            data-target="#collapse${i}S"
            aria-expanded="true"
            aria-controls="collapse${i}S"
          >
            <h2 class="mb-0">
              <div>
              ${value.name}
                <img
                  src="./../src/assets/icons/arrow-down-blue.svg"
                  alt="..."
                />
              </div>
              <p class="plan-info">
                <span class="price-info">${formatter.format(mensual).replace(",00", "")}</span>
                <span class="iva-info">+IVA/mes</span>
              </p>
            </h2>
          </button>
        </div>
    
        <div
          id="collapse${i}S"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionMensual"
        >
          <div class="card-body">
            <ul class="plan-desc">
              <li>${max_orders_desc}</li>
              <li>${max_factura_desc}</li>
              <li>${max_items_desc}</li>
            </ul>
            <p class="total-mobile">Total <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
            <div class="btn-container">
              <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
            </div>
             <ul class="plan-desc1">
              <li>Facturación manual, masiva</li>
              <li>Facturación automática</li>
              ${value.name == "Inicial" ? " " : "<li>Carga masiva de inventario</li>"}  
              <li><span>${value.operadores}</span> Operadores</li>
              <li><span>${value.competencia * 6}</span> Análisis de competidores</li>
              <li><span>${value.imagenes  * 6}</span> Imágenes editadas</li>
              <li><span>${value.chatgpt * 6}</span> Créditos ChatGPT</li>
            </ul>
          </div>
        </div>
      </div>
      `);
    }
    if (value.days_active == 365 && value.name != "Emprendedor") {
      mensual = value.fee_amount / 12
      $(".box-plan-container-anual").prepend(`
            <!-- ${value.name} -->
            <div class="plan ${value.name}">
              <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                <aside class="box">
                  <div class="">
                    <h3 class="text-uppercase text-center">${value.name}</h3>
                    <h4 class="text-center">
                      ${formatter.format(mensual).replace(",00", "")}<small> + IVA /mes </small>
                    </h4>
                    
                    <ul class="plan-benefits plan-benefits-variant">
                      <li>
                         ${max_orders_desc}
                      </li>
                      <li>
                         ${max_factura_desc}
                      </li>
                      <li>
                         ${max_items_desc}
                      </li>
                    </ul>
                     
                    
                    <div class="total-plan-container">
                      <p class="detail-hidden">
                        Plan 1 mes<span>$2.600</span>
                      </p>
                      <p class="detail-hidden">IVA<span>+$546</span></p>
                      
                      <p class="total-plan">Total <strong class="old-price">${formatter.format(value.fee_no_discount * 1.21).replace(",00", "")}</strong> <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
                    </div>
                  </div>
                  <div class="btn-container-contrat">
                    <a
                      class="btn-contrat btn-contrat-arg"
                      data-id="1"
                      onclick="window.location.href = '/login/register.html'"
                      >Probá gratis</a
                    >
                  </div>
                   <ul class="plan-benefits plan-benefits-dif">
                      <li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>
                      ${value.name == "Inicial" ? "<li class='no-check'> - </li>" : "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>"}
                      ${value.name !== "Inicial" ? "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>" : "<li class='no-check'> - </li>"}
                      <li>
                        <span>${value.operadores}</span>
                      </li>
                      <li>
                        <span>${value.competencia * 12}</span>
                      </li>
                      <li>
                        <span>${value.imagenes * 12}</span>
                      </li>
                      <li>
                        <span>${value.chatgpt * 12}</span> 
                      </li>
                    </ul>
                </aside>
              </div>
            </div>
      `);
      $("#accordionAnual").append(`
      <div class="card">
        <div class="card-header" id="heading${i}A">
          <button
            class=""
            type="button"
            data-toggle="collapse"
            data-target="#collapse${i}A"
            aria-expanded="true"
            aria-controls="collapse${i}A"
          >
            <h2 class="mb-0">
              <div>
              ${value.name}
                <img
                  src="./../src/assets/icons/arrow-down-blue.svg"
                  alt="..."
                />
              </div>
              <p class="plan-info">
                <span class="price-info">${formatter.format(mensual).replace(",00", "")}</span>
                <span class="iva-info">+IVA/mes</span>
              </p>
            </h2>
          </button>
        </div>
    
        <div
          id="collapse${i}A"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionMensual"
        >
          <div class="card-body">
            <ul class="plan-desc">
              <li>${max_orders_desc}</li>
              <li>${max_factura_desc}</li>
              <li>${max_items_desc}</li>
            </ul>
            <p class="total-mobile">Total <span>${formatter.format(value.fee_amount * 1.21).replace(",00", "")}</span></p>
            <div class="btn-container">
              <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
            </div>
             <ul class="plan-desc1">
              <li>Facturación manual, masiva</li>
              <li>Facturación automática</li>
              ${value.name == "Inicial" ? " " : "<li>Carga masiva de inventario</li>"}  
              <li><span>${value.operadores}</span> Operadores</li>
              <li><span>${value.competencia * 12}</span> Análisis de competidores</li>
              <li><span>${value.imagenes * 12}</span> Imágenes editadas</li>
              <li><span>${value.chatgpt * 12}</span> Créditos ChatGPT</li>
            </ul>
          </div>
        </div>
      </div>
      `);
    }
  };
});



$.getJSON('/front/geo', function(data) {
  if((data.geoplugin_countryName) == "Argentina"){
    $(".pay-current").attr("src","./../src/assets/imgs/mercadopago-logo.svg")
  }else{
    $(".pay-current").attr("src","./../src/assets/imgs/paypal-logo.svg")
    $(".fact-none").addClass("d-none")
     
  }
  
});

