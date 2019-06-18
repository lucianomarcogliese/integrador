window.onload = function() {


  var header = document.querySelector(".permitido")
  var bloqueado = document.querySelector (".formulario")
  var btn =document.querySelector(".boton2")
  btn.onclick = function (event) {
    alert("hola")
    bloqueado.style.display = "block";
    header.style.display ="none";  }

    // var encabezado = document.querySelector(".permitido")
    // var blocked = document.querySelector (".iniciaSesion")
    // var loguea =document.querySelector(".loguiate")
    // loguea.onclick = function (event) {
    //   blocked.style.display = "block";
    //  encabezado.style.display ="none"; }



  var buscador = document.querySelector ("form.Buscador");

  var inputBusqueda= document.querySelector ("input.Busqueda")


  buscador.onsubmit = function () {
    if (inputBusqueda.value.length < 3 ) {
      event.preventDefault ();
      inputBusqueda.classList.add ("error");
      inputBusqueda.parentElement.querySelector("p.errorBuscador").innerText = "Minimo 3 caracteres";
      setTimeout(function() {
          inputBusqueda.parentElement.querySelector("p.errorBuscador").style.display = "none"
      }, 3000)

    } }
  var urlFija = " https://image.tmdb.org/t/p/original/"
  var article = ""

  var queryString = location.search
  queryString =new URLSearchParams(location.search)
  var idPeliculas = queryString.get("id")
  console.log(idPeliculas);

// FAVORITOS
// IDEA: localStorage.removeItem("favoritos")
// Obtengo de Local Storage la parte de favoritos
var favoritos = localStorage.getItem("favoritos")

// Si hay favoritos...
if (favoritos != null) {
  // Si hay los proceso y obtengo SOLO el array que me interesa
  favoritos = JSON.parse(favoritos).listadoFavoritos
} else {
  // Si no hay creo una lista vacia porque... no ten es favoritos
  favoritos = []
}


  //
  fetch("https://api.themoviedb.org/3/movie/" + idPeliculas + "?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

        var arrayDeLanguage=informacion.spoken_languages
        var language = ""
        var titulo = informacion.title
        var url =  informacion.poster_path
        var arrayDeGeneros = informacion.genres
        var generos = ""
        var idDeGeneros = ""

        for (var i=0; i < arrayDeLanguage.length; i++) {
              language += arrayDeLanguage[i].name + ","
        }

        // IDEA: var language = informacion.original_language
        var sinopsis = informacion.overview
        var fecha = informacion.release_date
        var trailer = informacion.video

                              article = "<article>"
                              article +=  " <h1>" + titulo+ "</h1> "
                             article += "<li> <img src= " + urlFija + url + " width='30%'  > </li>"
                            // IDEA: rticle +=    "<a href=PeliculasPorGenero.html?id=" + idDeGeneros +   ">"
                             article +=   " <section class='informacion'> <ul class='generos'>" + "Los generos a los que pertenece"
                             for (var i = 0; i < arrayDeGeneros.length; i++) {
                                 article += "<li>  <a href='PeliculasPorGenero.html?id=" + arrayDeGeneros[i].id +  "'>" +  arrayDeGeneros[i].name +  "</a> </li>"
                             }
                            article +=  "</ul>"

                             article += "Sinopsis" + "<p class='sinopsis'>" + sinopsis + "</p>"
                             article += "Idiomas" + "<p>" + language + "</p>"
                             article += "Fecha de estreno" + "<h4>" + fecha + "</h4>"

                             // IDEA: rticle +=  "<div>" + trailer + "<div>"

                             article += " </section>  </article>"
                             document.querySelector("section.detalle ").innerHTML += article

                             if (favoritos.indexOf(idPeliculas) >= 0) {

                           document.querySelector("section.detalle").innerHTML += "<button class='favorito' idPeli=" + idPeliculas + ">Quitar de Favoritos</button><br>"
                           } else {
                           document.querySelector("section.detalle").innerHTML += "<button class='favorito' idPeli=" + idPeliculas + ">Agregar a Favoritos</button><br>"
                           }
                           console.log("hola");
                           // IDEA: document.querySelector("section.detalle").innerHTML += "<img src=" + url + ">"
                           // Bien! Ya cree todos los botones (Ojo que igual ustedes van a tener uno solo). Entonces los obtengo con querySelectorAll
                           var boton = document.querySelector("button.favorito")

                              // A CADA BOTON le pongo un evento onclick

                             boton.onclick = function(event) {

                // Obtengo en que GIF se clickeo
                               var idPeli = this.getAttribute("idPeli")
                               // Si no lo tenia ya como preferido
                               if (favoritos.indexOf(idPeli) == -1) {
                                 //Agrego el gif nuevo!
                                 favoritos.push(idPeli)
                                 //Y cambio el texto del boton
                                 this.innerHTML = "Quitar de Favoritos"
                               } else {
                                 // Lo tengo que quitar!!!
                                 var index = favoritos.indexOf(idPeli);
                                 favoritos.splice(index, 1);
                                 // Y cambio el texto del boton
                                 this.innerHTML = "Agregar a Favoritos"
                               }
                               // Aca transformo el array en un obj literal para poder guardarlo
                               favoritos = {
                                 "listadoFavoritos" : favoritos
                               }
                               // Y lo transformo en string para poder guardarlos
                               favoritos = JSON.stringify(favoritos)
                               // Y aca guardo en localStorage
                               localStorage.setItem("favoritos", favoritos)
                               // Y devuelvo en la variable el array real
                               favoritos = JSON.parse(favoritos).listadoFavoritos
                             }


console.log("holaaaaaaa");

    })
    .catch(function(error) {
    console.log("Error: " + error);
    })


// video

fetch("https://api.themoviedb.org/3/movie/"   + idPeliculas +   "/videos?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var arrayDeVideos = informacion.results
    console.log(arrayDeVideos);
var key = arrayDeVideos[0].key
console.log(key);
document.querySelector("iframe").src = "https://www.youtube.com/embed/" + key + ""


  })
  .catch (function(error){
    consologe.log("The error was: " + error)
  })
  // var iframe = document.querySelector("iframe")
  // var video = document.querySelector (".video")
  // video.onclick = function (event) {
  //   iframe.style.display = "block"; }

//
//
//
//
//
//
//
//
//
//
// //recomendadas
var urlFija = " https://image.tmdb.org/t/p/original/"
var limite = 5

// IDEA: https://api.themoviedb.org/3/movie/550/recommendations?api_key=72c0f0e3c6590f5af907c8bd0778da1d&page=1
// IDEA: "https://api.themoviedb.org/3/movie/" + idPeliculas + "/recommendations?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1"

fetch("https://api.themoviedb.org/3/movie/" + idPeliculas + "/recommendations?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var arrayDePeliculas = informacion.results
    console.log(arrayDePeliculas);

    for (var i = 0; i < limite; i++) {

         var id = arrayDePeliculas[i].id

        var titulo = arrayDePeliculas[i].title

        var url =  arrayDePeliculas[i].poster_path

              article = "<article class='mySlides fade'> "
              article +=    "<a href=detallePelicula.html?id=" + id +   ">"
              article +=      "<p>" + titulo + "</p> "
              article +=      "<img src= " + urlFija + url + " width='30%'  >"
              article +=      "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
              article +=  "</a>"
              article += " </article>"

                                  document.querySelector("section.recomendadas ").innerHTML += article
    }
        showSlides(slideIndex);
      })



  .catch(function(error) {
  console.log("Error: " + error);
  })


              var recomendadas = document.querySelector("section.recomendadas")
              var botonsito = document.querySelector (".botonsito")

              botonsito.onclick = function (event) {
                recomendadas.style.display = "block";



    }}
