const btnMenu = document.querySelector(".btn-menu");
const menuNav = document.querySelector(".menu-navegacion");
const btnCerrar = document.querySelector(".btn-cerrar");
const portada = document.querySelector(".portada");
const aniSobromi = document.querySelector(".ani-sobremi");
const aniPortafolio = document.querySelector(".ani-portafolio");
const imgProyecto = document.querySelectorAll(".img-proyecto");
const agregarImg = document.querySelector(".agregar-img");
const imgProZoom = document.querySelector(".img-pro-zoom");

/* MENU NAVEGACION */
let aplicar = () => {
  menuNav.classList.toggle("movMenu");
  btnCerrar.classList.toggle("movMenu");
  btnMenu.classList.toggle("ocultarBtnMenu");
};

btnMenu.addEventListener("click", () => {
  aplicar();
});

btnCerrar.addEventListener("click", () => {
  aplicar();
});

window.addEventListener("click", (e) => {
  if (
    menuNav.classList.contains("movMenu") &&
    e.target != menuNav &&
    e.target != btnMenu
  ) {
    aplicar();
  }
});

/* AL SCROLLEAR */
window.addEventListener("scroll", function () {
  let scrollArriba = document.documentElement.scrollTop;
  let scrollActual = window.pageYOffset;
  let alturaVentana = window.innerHeight;
  let opacidadVariable = ((scrollActual * 100) / alturaVentana / 100 - 1) * -1;
  let valorx = (alturaVentana * 90) / 100;

  /* OPACIDAD Y ALTURA PORTADA */
  portada.style.opacity = opacidadVariable;

  /* if (scrollArriba > alturaVentana) {
    portada.style.position = "relative";
  } else {
    portada.style.position = "fixed";
    var valorAltura = alturaVentana - scrollActual;
    portada.style.height = valorAltura + "px";
  } */

  /* ANIMACION SECTION SOBRE MI */
  if (aniSobromi.offsetTop - valorx < scrollArriba) {
    aniSobromi.classList.remove("aniSobremiE2");
    aniSobromi.classList.add("aniSobremiE1");
  } else {
    aniSobromi.classList.remove("aniSobremiE1");
    aniSobromi.classList.add("aniSobremiE2");
  }

  /* ANIMACION SECTION PORTAFOLIO */
  if (aniPortafolio.offsetTop - valorx < scrollArriba) {
    aniPortafolio.classList.remove("aniPortafolioE2");
    aniPortafolio.classList.add("aniPortafolioE1");
  } else {
    aniPortafolio.classList.remove("aniPortafolioE1");
    aniPortafolio.classList.add("aniPortafolioE2");
  }
});

/* ZOOM IMG */
imgProyecto.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

imgProZoom.addEventListener("click", (e) => {
  if (e.target !== agregarImg) {
    imgProZoom.classList.toggle("movZoomImg");
    agregarImg.classList.toggle("zoomImg");
    btnMenu.classList.toggle("ocultarBtnMenu");
  }
});

const aparecerImagen = (imagen) => {
  agregarImg.src = imagen;
  imgProZoom.classList.toggle("movZoomImg");
  agregarImg.classList.toggle("zoomImg");
  btnMenu.classList.toggle("ocultarBtnMenu");
};
