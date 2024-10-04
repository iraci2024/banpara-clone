const html = document.querySelector("html");
const span = document.getElementById("alto-contraste");

span.addEventListener("click", altoContraste);


const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
  darkBanpara: getStyle(html, "--dark-banpara"),
  azulBanpara5: getStyle(html, "--azul-banpara-5"),
  vermelhoBanpara2: getStyle(html, "--vermelho-banpara-2")
}

const contrastBranco = {
  darkBanpara: "#fff",
  azulBanpara5: "#fff",
  vermelhoBanpara2: "#fff"
}

const transformKey = key =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
}


function altoContraste() {
  

    if($("#alto-contraste").hasClass("clicado")){ //Remover Alto Contraste
      
      $("#alto-contraste").removeClass("clicado");
      changeColors(initialColors);

      

      $(".preto").removeClass("preto").addClass("branco");
      $(".badge-noticia-contraste").removeClass("badge-noticia-contraste").addClass("badge-noticia");
      $(".botao-produtos-contraste").removeClass("botao-produtos-contraste").addClass("botao-produtos");
      $(".preto").removeClass("preto").addClass("cinza");
      $(".menu-borda-in").removeClass("menu-borda-in").addClass("menu-borda-off");
      $(".app1").removeClass("preto").addClass("secao-app-banpara");
      $(".app2").removeClass("preto").addClass("secao-app-consignado");
      $(".preto2").removeClass("preto2").addClass("cinza2");
      $(".icone-destaque-contraste").removeClass("icone-destaque-contraste").addClass("icone-destaque");
      $(".barra-cinza-contraste").removeClass("barra-cinza-contraste").addClass("barra-cinza");
      $(".area-nome-pagina2-contraste").removeClass("area-nome-pagina2-contraste").addClass("area-nome-pagina2");
      $(".tab-produtos-contraste").removeClass("tab-produtos-contraste").addClass("tab-produtos");
      $(".efeito-azul-contraste").removeClass("efeito-azul-contraste").addClass("efeito-azul");
      $(".card-anexo-contratos-contraste").removeClass("card-anexo-contratos-contraste").addClass("card-anexo-contratos");
      $(".barra-cinza2-contraste").removeClass("barra-cinza2-contraste").addClass("barra-cinza2");
      $(".info-container-contraste").removeClass("info-container-contraste").addClass("info-container");
      $(".info-title-contraste").removeClass("info-title-contraste").addClass("info-title");
      $(".bloco-cinza-contraste").removeClass("bloco-cinza-contraste").addClass("bloco-cinza");

      //Footer
      $(".footer-container-contraste").removeClass("footer-container-contraste").addClass("footer-container");

      //Header Notícias
      $(".color-overlay-header-noticia-contraste").removeClass("color-overlay-header-noticia-contraste").addClass("color-overlay-header-noticia");

      //Header Genérico
      $(".color-overlay-header-contraste").removeClass("color-overlay-header-contraste").addClass("color-overlay-header");

      //Menu
      $(".btn-conta-contraste").removeClass("btn-conta-contraste").addClass("btn-conta");
      document.getElementById("#img-logo").src = "images/logobanpara.png";

    }
    
    else{ //Adicionar Alto Contraste

      $("#alto-contraste").addClass("clicado");
      changeColors(contrastBranco);

      $(".branco").removeClass("branco").addClass("preto");
      $(".badge-noticia").removeClass("badge-noticia").addClass("badge-noticia-contraste");
      $(".botao-produtos").removeClass("botao-produtos").addClass("botao-produtos-contraste");
      $(".cinza").removeClass("cinza").addClass("preto");
      $(".menu-borda-off").removeClass("menu-borda-off").addClass("menu-borda-in");
      $(".app1").removeClass("secao-app-banpara").addClass("preto");
      $(".app2").removeClass("secao-app-consignado").addClass("preto");
      $(".cinza2").removeClass("cinza2").addClass("preto2");
      $(".icone-destaque").removeClass("icone-destaque").addClass("icone-destaque-contraste");
      $(".barra-cinza").removeClass("barra-cinza").addClass("barra-cinza-contraste");
      $(".area-nome-pagina2").removeClass("area-nome-pagina2").addClass("area-nome-pagina2-contraste");
      $(".tab-produtos").removeClass("tab-produtos").addClass("tab-produtos-contraste");
      $(".efeito-azul").removeClass("efeito-azul").addClass("efeito-azul-contraste");
      $(".card-anexo-contratos").removeClass("card-anexo-contratos").addClass("card-anexo-contratos-contraste");
      $(".barra-cinza2").removeClass("barra-cinza2").addClass("barra-cinza2-contraste");
      $(".info-container").removeClass("info-container").addClass("info-container-contraste");
      $(".info-title").removeClass("info-title").addClass("info-title-contraste");
      $(".bloco-cinza").removeClass("bloco-cinza").addClass("bloco-cinza-contraste");

      //Footer
      $(".footer-container").removeClass("footer-container").addClass("footer-container-contraste");

      //Header Notícias
      $(".color-overlay-header-noticia").removeClass("color-overlay-header-noticia").addClass("color-overlay-header-noticia-contraste");

      //Header Genérico
      $(".color-overlay-header").removeClass("color-overlay-header").addClass("color-overlay-header-contraste");

      //Menu
      $(".btn-conta").removeClass("btn-conta").addClass("btn-conta-contraste");
      document.getElementById("#img-logo").src = "images/logobranca2.png"; 

    }


}
