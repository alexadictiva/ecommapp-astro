
/*=================
METODO PAGINATION
=================== */

/**
* simplePagination.js v1.6
* A simple jQuery pagination plugin.
* http://flaviusmatis.github.com/simplePagination.js/
*
* Copyright 2012, Flavius Matis
* Released under the MIT license.
* http://flaviusmatis.github.com/license.html
*/

(function ($) {

	var methods = {
		init: function (options) {
			var o = $.extend({
				items: 1,
				itemsOnPage: 1,
				pages: 0,
				displayedPages: 5,
				edges: 2,
				currentPage: 1,
				hrefTextPrefix: '#page-',
				hrefTextSuffix: '',
				prevText: 'Prev',
				nextText: 'Next',
				ellipseText: '&hellip;',
				cssStyle: 'light-theme',
				selectOnClick: true,
				onPageClick: function (pageNumber, event) {
					// Callback triggered when a page is clicked
					// Page number is given as an optional parameter
				},
				onInit: function () {
					// Callback triggered immediately after initialization
				}
			}, options || {});

			var self = this;

			o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
			o.currentPage = o.currentPage - 1;
			o.halfDisplayed = o.displayedPages / 2;

			this.each(function () {
				self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
				methods._draw.call(self);
			});

			o.onInit();

			return this;
		},

		selectPage: function (page) {
			methods._selectPage.call(this, page - 1);
			return this;
		},

		prevPage: function () {
			var o = this.data('pagination');
			if (o.currentPage > 0) {
				methods._selectPage.call(this, o.currentPage - 1);
			}
			return this;
		},

		nextPage: function () {
			var o = this.data('pagination');
			if (o.currentPage < o.pages - 1) {
				methods._selectPage.call(this, o.currentPage + 1);
			}
			return this;
		},

		getPagesCount: function () {
			return this.data('pagination').pages;
		},

		getCurrentPage: function () {
			return this.data('pagination').currentPage + 1;
		},

		destroy: function () {
			this.empty();
			return this;
		},

		redraw: function () {
			methods._draw.call(this);
			return this;
		},

		disable: function () {
			var o = this.data('pagination');
			o.disabled = true;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		enable: function () {
			var o = this.data('pagination');
			o.disabled = false;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		updateItems: function (newItems) {
			var o = this.data('pagination');
			o.items = newItems;
			o.pages = Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
			this.data('pagination', o);
			methods._draw.call(this);
		},

		_draw: function () {
			var o = this.data('pagination'),
				interval = methods._getInterval(o),
				i;

			methods.destroy.call(this);

			var $panel = this.prop("tagName") === "UL" ? this : $('<ul></ul>').appendTo(this);

			// Generate Prev link
			/* if (o.prevText) {
				methods._appendItem.call(this, o.currentPage - 1, {text: o.prevText, classes: 'prev'});
			} */

			// Generate start edges
			if (interval.start > 0 && o.edges > 0) {
				var end = Math.min(o.edges, interval.start);
				for (i = 0; i < end; i++) {
					methods._appendItem.call(this, i);
				}
				if (o.edges < interval.start && (interval.start - o.edges != 1)) {
					$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
				} else if (interval.start - o.edges == 1) {
					methods._appendItem.call(this, o.edges);
				}
			}

			// Generate interval links
			for (i = interval.start; i < interval.end; i++) {
				methods._appendItem.call(this, i);
			}

			// Generate end edges
			if (interval.end < o.pages && o.edges > 0) {
				if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
					$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
				} else if (o.pages - o.edges - interval.end == 1) {
					methods._appendItem.call(this, interval.end++);
				}
				var begin = Math.max(o.pages - o.edges, interval.end);
				for (i = begin; i < o.pages; i++) {
					methods._appendItem.call(this, i);
				}
			}

			// Generate Next link
			if (o.nextText) {
				methods._appendItem.call(this, o.currentPage + 1, { text: o.nextText, classes: 'next' });
			}
		},

		_getInterval: function (o) {
			return {
				start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
				end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
			};
		},

		_appendItem: function (pageIndex, opts) {
			var self = this, options, $link, o = self.data('pagination'), $linkWrapper = $('<li></li>'), $ul = self.find('ul');

			pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

			options = $.extend({
				text: pageIndex + 1,
				classes: ''
			}, opts || {});

			if (pageIndex == o.currentPage || o.disabled) {
				if (o.disabled) {
					$linkWrapper.addClass('disabled');
				} else {
					$linkWrapper.addClass('active');
				}
				$link = $('<span class="current">' + (options.text) + '</span>');
			} else {
				$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
				$link.click(function (event) {
					return methods._selectPage.call(self, pageIndex, event);
				});
			}

			if (options.classes) {
				$link.addClass(options.classes);
			}

			$linkWrapper.append($link);

			if ($ul.length) {
				$ul.append($linkWrapper);
			} else {
				self.append($linkWrapper);
			}
		},

		_selectPage: function (pageIndex, event) {
			var o = this.data('pagination');
			o.currentPage = pageIndex;
			if (o.selectOnClick) {
				methods._draw.call(this);
			}
			return o.onPageClick(pageIndex + 1, event);
		}

	};

	$.fn.pagination = function (method) {

		// Method calling logic
		if (methods[method] && method.charAt(0) != '_') {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.pagination');
		}

	};

})(jQuery);

//Funcion paginadora
function paginador() {
	var items = $(".news-render-container .card-other-news");
	var numItems = items.length;
	var perPage = 9;

	items.slice(perPage).hide();

	$("#pagination-container").pagination({
		items: numItems,
		itemsOnPage: perPage,
		prevText: "&laquo;",
		nextText: "&raquo;",
		onPageClick: function (pageNumber) {
			var showFrom = perPage * (pageNumber - 1);
			var showTo = showFrom + perPage;
			items.hide().slice(showFrom, showTo).show();
		},
	});
}

setTimeout(() => {
	paginador()
}, 1000);
/*=================
DATA PRENSA
=================== */
var datosPrensa = {
	main: {
		img: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/12/547350.jpg",
		title: "Ecomm-App recibió inversión por parte de Rockstart, una de las aceleradoras más importantes de Latinoamérica.",
		date: "14 de diciembre de 2022",
		medio: "Forbes",
		link: "https://www.forbesargentina.com/negocios/asi-ecomm-app-firma-argentina-recibio-una-inyeccion-us-100000-una-importante-aceleradora-latam-n26429",
	},
	news: [
		{ img: "https://i0.wp.com/assets.iprofesional.com/assets/jpg/2022/12/547349.jpg?resize=880%2C495&ssl=1", title: "Argentinos crean startup con unos pocos dólares y una idea genial", date: "10 de enero de 2023", medio: "Infoarenales", link: "https://infoarenales.com/2023/01/10/argentinos-crean-startup-con-unos-pocos-dolares-y-una-idea-genial/" },
		{ img: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/12/547350.jpg", title: "Cuatro argentinos crearon una startup con unos pocos dólares y hoy ayudan a miles de emprendedores a vender más", date: "8 de enero de 2023", medio: "Iprofesional", link: "https://www.iprofesional.com/actualidad/374170-argentinos-crean-startup-con-unos-pocos-dolares-y-una-idea-genial" },
		{ img: "./../src/assets/imgs/card1-prensa.svg", title: "Una app local acrecienta en un 65% las ventas online de PyMEs y emprendedores en Latinoamérica", date: "19 de diciembre de 2022", medio: "Portalinnova", link: "https://portalinnova.cl/una-app-local-acrecienta-en-un-65-las-ventas-online-de-pymes-y-emprendedores-en-latinoamerica/" },
		{ img: "https://statics.forbesargentina.com/2022/12/crop/6398a5b1c22eb__822x460.webp", title: "Así es Ecomm-app, la firma argentina que recibió una inyección de US$ 100.000 de una importante aceleradora de Latam", date: "14 de diciembre de 2022", medio: "Forbes Argentina", link: "https://www.forbesargentina.com/negocios/asi-ecomm-app-firma-argentina-recibio-una-inyeccion-us-100000-una-importante-aceleradora-latam-n26429" },
		{ img: "./../src/assets/imgs/card3-prensa.jpg", title: "Ecomm-App en Puro Branding", date: "02 de diciembre de 2022", medio: "Puro branding", link: "https://www.youtube.com/watch?v=P2CU-zyvrRQ" },
		{ img: "https://dbiz.today/galeria/images/o_1ghh1dk2t1iuneef12b410l8mhjc.jpg", title: "Ecomm-App sigue creciendo, ayudando a PyMEs y emprendedores", date: "11 de noviembre de 2022", medio: "dbiz.today", link: "https://dbiz.today/Empresas/PyMES/Ecomm_App_sigue_creciendo_ayudando_a_PyMEs_y_emprendedores" },
		{ img: "https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2020%2F01%2FRockstart-Colombia.jpg&w=640&q=75", title: "Las 12 compañías en las que invirtió Rockstart en su cohorte de 2022", date: "28 de septiembre de 2022", medio: "Forbes Colombia", link: "https://forbes.co/2022/09/28/emprendedores/las-12-companias-en-las-que-invirtio-rockstart-en-su-cohorte-de-2022/" },
		{ img: "https://negocios.com.ar/wp-content/uploads/2021/11/startups-google.jpg", title: "Nuevas tecnologías |Un grupo de startups argentinas competirán en un certamen de innovación tecnológica", date: "14 de septiembre de 2022", medio: "Negocios", link: "https://negocios.com.ar/negocios/un-grupo-de-startups-argentinas-competiran-en-un-certamen-de-innovacion-tecnologica/" },
		{ img: "https://emprelatam.com/wp-content/uploads/2021/09/startups-epa15-1024x576.png", title: "Las 21 startups seleccionadas en PRE-ACELERACIÓN por Emprelatam", date: "07 de septiembre de 2022", medio: "Emprelatam", link: "http://emprelatam.com/2021/09/07/las-21-startups-seleccionadas-en-pre-aceleracion-por-emprelatam/" },
		{ img: "./../src/assets/imgs/card1-prensa.svg", title: "Sharon Fingier: La curiosidad hizo la diferencia", date: "01 de septiembre de 2022", medio: "Calidad Empresaria", link: "https://es.calameo.com/read/006553110282fc62f9459" },
		{ img: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpeg/2021/08/21348.jpeg", title: "Hay una argentina: estas son las 12 startups seleccionadas por una de las aceleradoras más importantes de la región", date: "25 de agosto de 2022", medio: "IproUp", link: "https://www.iproup.com/startups/25442-village-capital-y-su-seleccion-de-startups" },
		{ img: "https://emprendedoresnews.com/wp-content/uploads/2021/08/SocialShare-New-3.jpg", title: "Estas son las 12 startups para el Finance Forward Latinoamérica 2021", date: "25 de agosto de 2021", medio: "Emprendedoresnews", link: "https://emprendedoresnews.com/agenda/convocatorias/estas-son-las-12-startups-para-el-finance-forward-latinoamerica-2021.html" },
		{ img: "https://pronetwork.mx/magazine/wp-content/uploads/2021/08/Finance-Forward-Latinoame%CC%81rica-2021.jpg", title: "Estas son las 12 startups seleccionadas para el programa Finance Forward Latinoamérica 2021", date: "16 de agosto de 2021", medio: "Pronetwork", link: "https://www.pronetwork.mx/magazine/finance-forward-latinoamerica-2021-presenta-las-12-startups-elegidas/" },
		{ img: "https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2021%2F04%2FJulianne-Platzi.jpg&w=640&q=75", title: "Platzi anuncia las 12 startups que estarán en su primer Demo Day del año", date: "09 de abril 2021", medio: "Forbes Colombia", link: "https://forbes.co/2021/04/09/actualidad/platzi-anuncia-las-12-startups-que-estaran-en-su-primer-demo-day-del-ano/" },
		{ img: "https://news.microsoft.com/wp-content/uploads/prod/sites/41/2021/04/M365CO20_MTR_HP_001-960x640.jpg", title: "Las 12 startups con ideas revolucionarias que buscan cambiar a Latinoamérica a través de la tecnología", date: "08 de abril 2021", medio: "Microsoft", link: "https://news.microsoft.com/es-xl/las-12-startups-con-ideas-revolucionarias-que-buscan-cambiar-a-latinoamerica-a-traves-de-la-tecnologia/" },
		{ img: "https://assets.iproup.com/assets/jpg/2021/03/17100.jpg?6.3.1", title: "Platzi elige dos startups argentinas en el programa DemoDay para 'liderar el cambio'", date: "08 de abril 2021", medio: "IproUp", link: "https://www.iproup.com/innovacion/21929-dos-startups-locales-fueron-elegidas-por-platzi-en-el-demoday" },
		{ img: "./../src/assets/imgs/card2-prensa.png", title: "Ecomm-App: la gestión de tu e-commerce en un solo lugar", date: "05 de abril 2021", medio: "Platzi", link: "https://platzi.com/blog/ecomm-app-la-gestion-de-tu-e-commerce-en-un-solo-lugar/" },
		{ img: "https://www.equiposytalento.com/contenido/noticias/concursoemprendedores503.png", title: "El Concurso de Emprendedores 2020 de IEBS cierra con éxito su 11ª edición", date: "28 de octubre de 2020", medio: "Equiposytalento", link: "https://www.equiposytalento.com/noticias/2020/10/28/el-concurso-de-emprendedores-2020-de-iebs-cierra-con-exito-su-11-edicion" },
	],
};

$(document).ready(function () {
	renderPrensaData();
});

async function renderPrensaData() {
	var response = await fetch('https://admin.ecomm-app.com/api/prensa');
	datosPrensa = {
		main: {},
		news: []
	};
	var data = await response.json();
	for (let index = 0; index < data.length; index++) {
		const articulo = data[index];
		if (articulo.destacado == 1) {
			datosPrensa.main.img = articulo.imagen;
			datosPrensa.main.title = articulo.titulo;
			datosPrensa.main.date = articulo.fecha.substr(0,10),
			datosPrensa.main.medio = articulo.medio;
			datosPrensa.main.link = articulo.link;
		} else {
			datosPrensa.news.push({
				img: articulo.imagen,
				title: articulo.titulo,
				date: articulo.fecha.substr(0,10),
				medio: articulo.medio,
				link: articulo.link
			});
		}
	}
	$("#img-main-news").attr("src", datosPrensa.main.img);
	$("#card-title-main-news").text(datosPrensa.main.title);
	$("#news-date-main-news").text(datosPrensa.main.date);
	$("#info-medio-recent-news").text(datosPrensa.main.medio);
	//$("#recent-news-main").text(datosPrensa.main.resume);
	$("#link-main-news").attr("href", datosPrensa.main.link);

	for (let i = 0; i < datosPrensa.news.length; i++) {
		$("#news-render-container").append(
			`
     
        <article class="card card-other-news">
          <a class="card-link" href="${datosPrensa.news[i].link}" target="_blank" >
          
              <img class="card-img-top" src="${datosPrensa.news[i].img}" alt="Card image cap">
        
            <aside class="card-body">
              <h5 class="news-date">${datosPrensa.news[i].date}</h5>
              <h2 class="card-title">${datosPrensa.news[i].title}</h2>
              <h2 class="card-medios">${datosPrensa.news[i].medio}</h2>
            </aside>
          </a>
        </article>
      
      `
		);
	}
}

