window.onload = function() {


  var urlFija = " https://image.tmdb.org/t/p/original/"
  var article = ""

  var queryString = location.search
  queryString =new URLSearchParams(location.search)
  var idPeliculas = queryString.get("id")
  console.log(idPeliculas);

//FAVORITOS
// localStorage.removeItem("favoritos")
// // Obtengo de Local Storage la parte de favoritos
// var favoritos = localStorage.getItem("favoritos")
//
// // Si hay favoritos...
// if (favoritos != null) {
//   // Si hay los proceso y obtengo SOLO el array que me interesa
//   favoritos = JSON.parse(favoritos).listadoFavoritos
// } else {
//   // Si no hay creo una lista vacia porque... no ten es favoritos
//   favoritos = []
// }


  fetch("https://api.themoviedb.org/3/movie/" + idPeliculas + "?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);


        var title = informacion.title
        var url =  informacion.poster_path
        var arrayDeGeneros = informacion.genres
        var generos = ""
        for (var i = 0; i < arrayDeGeneros.length; i++) {

          generos += arrayDeGeneros [i].name + ","
        }

        var language = informacion.original_language
        var sinopsis = informacion.overview
        var fecha = informacion.release_date
        var trailer = informacion.video

                              article = "<article>"
                              article +=  " <h1>" + title+ "</h1> "
                             article += "<img src= " + urlFija + url + " width='30%'  >"
                             article += "<p> <a href=PeliculasPorGenero.html>"  + generos + " </a> </p>"
                             article += "<p>" + sinopsis + "</p>"
                             article += "<h4>" + fecha + "</h4>"
                             article +=  "<div>" + trailer + "<div>"

                             article += "  </a> </article>"
                             document.querySelector("section.detalle ").innerHTML += article


    })
    .catch(function(error) {
    console.log("Error: " + error);
    })

//recomendadas
var urlFija = " https://image.tmdb.org/t/p/original/"
var limite = 5

fetch("https://api.themoviedb.org/3/movie/"  + idPeliculas +  "/recommendations?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var arrayDePeliculas = informacion.results
    console.log(arrayDePeliculas);

    for (var i = 0; i < limite; i++) {
        var id = arrayDePeliculas[i].id

        var title = arrayDePeliculas[i].title
        console.log(title);
        var url =  arrayDePeliculas[i].poster_path






        article = "<article class='mySlides fade'> "
         article +=    "<a href=PeliculasPorGenero.html?id=" + id +   ">"
        article +=    " <p>" + title + "</p> "
        article +=      "<img src= " + urlFija + url + " width='30%'  >"
         article +=    "</a>"
        article +=    "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
        article += "</article>"
        document.querySelector("section.recomendadas ").innerHTML += article
    }
        showSlides(slideIndex);
      })



  .catch(function(error) {
  console.log("Error: " + error);
  })



   var recomendadas = document.querySelector(".recomendadas")
   var botonsito = document.querySelector (".botonsito")

   botonsito.onclick = function (event) {
      recomendadas.style.display = "block";

   }




}
