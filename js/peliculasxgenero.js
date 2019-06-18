window.onload = function() {



  var queryString = location.search
  queryString =new URLSearchParams(location.search)
  var idGenero = queryString.get("id")
  console.log(idGenero);


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
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=72c0f0e3c6590f5af907c8bd0778da1d&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres="  + idGenero   )
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      // IDEA: console.log(informacion);

      var arrayDePeliculas = informacion.results

      var article = ""
      var limite = 5
      for (var i = 0; i < 5; i++) {
         var id = arrayDePeliculas[i].id
        var title = arrayDePeliculas[i].title

        var url = arrayDePeliculas[i].poster_path


        article = "<article class='mySlides fade'> "
       article += "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
     article +=    "<a href=detallePelicula.html?id=" + id +   ">"
       article += "<p>" + title + "</p> "
       article += "<img src= " + urlFija + url + " width='30%'  >"
       article += "  </a> </article>"
       document.querySelector("section ").innerHTML += article

      }
      showSlides(slideIndex);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
  }
