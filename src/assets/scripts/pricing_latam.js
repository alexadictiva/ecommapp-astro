const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD'
});

//$.get("https://admin.ecomm-app.com/tickets/latam","https://admin.ecomm-app.com/tickets/argentina", function (responseLatam) {
//$(".box-plan-container-mensual, .box-plan-container-trimestral").html('');
$.get("https://admin.ecomm-app.com/tickets/argentina", function (response) {
  $.each(response, function (key, value) {
    max_orders_desc = value.max_orders >= 999999999 ? "Hasta 15.000 ventas" : "Hasta " + formatter.format(value.max_orders).replace(",00", "").replace("US$", "") + " ventas";
    max_factura_desc = value.max_factura >= 999999999 ? "Hasta 15.000 comprobantes" : "Hasta " + formatter.format(value.max_factura).replace(",00", "").replace("US$", "") + " comprobantes";
    max_items_desc = value.name == "Corporate" ? "Hasta 150.000 publicaciones" : "Hasta 15.000 publicaciones";
    if (value.days_active == 30 && value.name != "Emprendedor") {
      $(".box-plan-container-mensual").prepend(`
                <!-- ${value.name} -->
                <div class="plan ${value.name}">
                  <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                    <aside class="box">
                      <div class="">
                        <h3 class="text-uppercase text-center">${value.name}</h3>
                        <h4 class="text-center">
                          ${formatter.format(value.fee_amount_latam).replace(",00", "")}
                        </h4>
                        <ul class="plan-benefits plan-benefits-variant">
                          <li>
                            <i class="fas fa-angle-right"></i>${max_orders_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_factura_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_items_desc}
                          </li>
                        </ul>
                        <div class="total-plan-container">
                          <p class="detail-hidden">
                            Plan 1 mes<span>$2.600</span>
                          </p>
                          <p class="detail-hidden">IVA<span>+$546</span></p>
                          <p class="total-plan">Total <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                        </div>
                      </div>
                      <div class="btn-container-contrat">
                        <a
                          class="btn-contrat btn-contrat-arg"
                          data-id="1"
                          onclick="window.location.href = '/login/register.html'"
                          >Prueba gratis</a
                        >
                      </div>
                       <ul class="plan-benefits plan-benefits-dif"> 
                        ${value.name !== "Inicial" ? "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>" : "<li class='no-check'> - </li>"}
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
            <div class="card-header" id="heading${key}">
              <button
                class=""
                type="button"
                data-toggle="collapse"
                data-target="#collapse${key}"
                aria-expanded="true"
                aria-controls="collapse${key}"
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
                    <span class="price-info">${formatter.format(value.fee_amount_latam).replace(",00", "")}</span>
                    
                  </p>
                </h2>
              </button>
            </div>
        
            <div
              id="collapse${key}"
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
                <p class="total-mobile">Total <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                <div class="btn-container">
                  <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
                </div>
                 <ul class="plan-desc1">
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
      mensual = value.fee_amount_latam / 3;
      $(".box-plan-container-trimestral").prepend(`
                <!-- ${value.name} -->
                <div class="plan ${value.name}">
                  <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                    <aside class="box">
                      <div class="">
                        <h3 class="text-uppercase text-center">${value.name}</h3>
                        <h4 class="text-center">
                          ${formatter.format(mensual).replace(",00", "")}
                        </h4>
                       
                        <ul class="plan-benefits plan-benefits-variant">
                          <li>
                            <i class="fas fa-angle-right"></i>${max_orders_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_factura_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_items_desc}
                          </li>
                        </ul>
                        <div class="total-plan-container">
                          <p class="detail-hidden">
                            Plan 1 mes<span>$2.600</span>
                          </p>
                          <p class="detail-hidden">IVA<span>+$546</span></p>
                          <p class="total-plan">Total  <strong class="old-price">${formatter.format(value.fee_no_discount_latam).replace(",00", "")}</strong> <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                        </div>
                      </div>
                      <div class="btn-container-contrat">
                        <a
                          class="btn-contrat btn-contrat-arg"
                          data-id="1"
                          onclick="window.location.href = '/login/register.html'"
                          >Prueba gratis</a
                        >
                      </div>
                       <ul class="plan-benefits plan-benefits-dif"> 
                        ${value.name !== "Inicial" ? "<li><img src='./../src/assets/icons/check-pricing.svg' alt='...' /></li>" : "<li class='no-check'> - </li>"}
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
            <div class="card-header" id="heading${key}T">
              <button
                class=""
                type="button"
                data-toggle="collapse"
                data-target="#collapse${key}T"
                aria-expanded="true"
                aria-controls="collapse${key}T"
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
                    
                  </p>
                </h2>
              </button>
            </div>
        
            <div
              id="collapse${key}T"
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
                <p class="total-mobile">Total <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                <div class="btn-container">
                  <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
                </div>
                 <ul class="plan-desc1">
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
      mensual = value.fee_amount_latam / 6
      $(".box-plan-container-semestral").prepend(`
                <!-- ${value.name} -->
                <div class="plan ${value.name}">
                  <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                    <aside class="box">
                      <div class="">
                        <h3 class="text-uppercase text-center">${value.name}</h3>
                        <h4 class="text-center">
                          ${formatter.format(mensual).replace(",00", "")}
                        </h4>
                        
                        <ul class="plan-benefits plan-benefits-variant">
                          <li>
                            <i class="fas fa-angle-right"></i>${max_orders_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_factura_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_items_desc}
                          </li>
                        </ul>
                        <div class="total-plan-container">
                          <p class="detail-hidden">
                            Plan 1 mes<span>$2.600</span>
                          </p>
                          <p class="detail-hidden">IVA<span>+$546</span></p>
                          <p class="total-plan">Total <strong class="old-price">${formatter.format(value.fee_no_discount_latam).replace(",00", "")}</strong> <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                        </div>
                      </div>
                      <div class="btn-container-contrat">
                        <a
                          class="btn-contrat btn-contrat-arg"
                          data-id="1"
                          onclick="window.location.href = '/login/register.html'"
                          >Prueba gratis</a
                        >
                      </div>
                       <ul class="plan-benefits plan-benefits-dif"> 
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
            <div class="card-header" id="heading${key}S">
              <button
                class=""
                type="button"
                data-toggle="collapse"
                data-target="#collapse${key}S"
                aria-expanded="true"
                aria-controls="collapse${key}S"
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
                    
                  </p>
                </h2>
              </button>
            </div>
        
            <div
              id="collapse${key}S"
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
                <p class="total-mobile">Total <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                <div class="btn-container">
                  <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
                </div>
                <ul class="plan-desc1">
                ${value.name == "Inicial" ? " " : "<li>Carga masiva de inventario</li>"}  
                <li><span>${value.operadores}</span> Operadores</li>
                <li><span>${value.competencia * 6}</span> Análisis de competidores</li>
                <li><span>${value.imagenes * 6}</span> Imágenes editadas</li>
                <li><span>${value.chatgpt * 6}</span> Créditos ChatGPT</li>
              </ul>
              </div>
            </div>
          </div>
          `);
    }
    if (value.days_active == 365 && value.name != "Emprendedor") {
      mensual = value.fee_amount_latam / 12
      $(".box-plan-container-anual").prepend(`
                <!-- ${value.name} -->
                <div class="plan ${value.name}">
                  <div class="box-plan" data-aos="fade-up" data-aos-delay="100">
                    <aside class="box">
                      <div class="">
                        <h3 class="text-uppercase text-center">${value.name}</h3>
                        <h4 class="text-center">
                          ${formatter.format(mensual).replace(",00", "")}
                        </h4>
                        
                        <ul class="plan-benefits plan-benefits-variant">
                          <li>
                            <i class="fas fa-angle-right"></i>${max_orders_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_factura_desc}
                          </li>
                          <li>
                            <i class="fas fa-angle-right"></i>${max_items_desc}
                          </li>
                        </ul>
                        <div class="total-plan-container">
                          <p class="detail-hidden">
                            Plan 1 mes<span>$2.600</span>
                          </p>
                          <p class="detail-hidden">IVA<span>+$546</span></p>
                          <p class="total-plan">Total <strong class="old-price">${formatter.format(value.fee_no_discount_latam).replace(",00", "")}</strong> <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                        </div>
                      </div>
                      <div class="btn-container-contrat">
                        <a
                          class="btn-contrat btn-contrat-arg"
                          data-id="1"
                          onclick="window.location.href = '/login/register.html'"
                          >Contratar</a
                        >
                      </div>
                       <ul class="plan-benefits plan-benefits-dif"> 
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
            <div class="card-header" id="heading${key}A">
              <button
                class=""
                type="button"
                data-toggle="collapse"
                data-target="#collapse${key}A"
                aria-expanded="true"
                aria-controls="collapse${key}A"
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
                    
                  </p>
                </h2>
              </button>
            </div>
        
            <div
              id="collapse${key}A"
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
                <p class="total-mobile">Total <span>${formatter.format(value.fee_amount_latam).replace(",00", "")}</span></p>
                <div class="btn-container">
                  <a class="btn-free-trial-planes" href="https://www.ecomm-app.com/login/register.html">Probá gratis</a>
                </div>
                 <ul class="plan-desc1">
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
  });
})
//});

