window.onload = function() {



  var queryString = location.search
  queryString =new URLSearchParams(location.search)
  var idGenero = queryString.get("id")
  console.log(idGenero);


  fetch("https://api.themoviedb.org/3/discover/movie?api_key=72c0f0e3c6590f5af907c8bd0778da1d&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres= + "   )
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      // IDEA: console.log(informacion);

      var arrayDePeliculas = informacion.results
      console.log(arrayDePeliculas);

      for (var i = 0; i < arrayDePeliculas.length; i++) {
        var id = arrayDeGifs[i].id
        var title = arrayDeGifs[i].title
        var url = arrayDeGifs[i].images.original.url

        document.querySelector("div").innerHTML += "<p><a href=detalleGif.html?id=" + id + ">" + title + "</a></p>"
        document.querySelector("div").innerHTML += "<img src=" + url + ">"
      }
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
  }
