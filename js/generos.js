window.addEventListener("load",function() {
  //
  // fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=489728903a2b25dc358b98664c14a627")
  //
  // .then(function(response) {
  //   return response.json()
  // })
  // .then(function(information) {
  // console.log(information)
  //
  // var arrayDeGeneros = information.genres
  // console.log(arrayDeGeneros);
  // // IDEA: ?id=" + id + ">"
  //
  //   for(var i = 0; i < 19; i++) {
  //     var id = arrayDeGeneros[i].id
  //     console.log(id);
  //     var genero = information.genres[i].name
  //     document.querySelector("section").innerHTML += " <ul> <a href=PeliculasPorGenero.html?id=" + id + ">" + "<li>"  + genero +  "</li> </a> </ul> "
  //     //console.log(genero);
  //   }
  //
  // })
  // .catch(function(error) {
  //   console.log("Error: " + error);
  // })

    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=489728903a2b25dc358b98664c14a627")

    .then(function(response) {
      return response.json()
    })
    .then(function(information) {


    var arrayDeGeneros = information.genres

    // IDEA: ?id=" + id + ">"

      for(var i = 0; i < 19; i++) {
        var id = arrayDeGeneros[i].id

        var genero = information.genres[i].name

        document.querySelector("select").innerHTML += " <option value='PeliculasPorGenero.html?id=" + id+"'> " + genero +  "  </option> "
        //console.log(genero);
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })






})
