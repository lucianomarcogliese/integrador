window.onload = function() {

    console.log(localStorage);

  var buscador = document.querySelector ("form.Buscador");
  console.log(buscador);
  var inputBusqueda= document.querySelector ("input.Busqueda")
  console.log(inputBusqueda);

  buscador.onsubmit = function () {
    if (inputBusqueda.value.length < 3 ) {
      event.preventDefault ();
      inputBusqueda.classList.add ("error");
      inputBusqueda.parentElement.querySelector("p.errorBuscador").innerText = "Minimo 3 caracteres";
      alert ("Minimo 3 caracteres")
    } }



      

      var header = document.querySelector(".permitido")
      var bloqueado = document.querySelector (".formulario")
      var btn =document.querySelector(".boton2")
      btn.onclick = function (event) {
        bloqueado.style.display = "block";
        header.style.display ="none";
      }
      var urlFija = " https://image.tmdb.org/t/p/original/"

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1" )
          .then(function(respuesta) {
          return respuesta.json()
          })
          .then(function(informacion) {
          console.log(informacion);

          var arrayDePeliculas = informacion.results
          console.log(arrayDePeliculas);
          var article = ""
          var limite = 5
          for (var i = 0; i < limite; i++) {
              // IDEA: var id = arrayDeGifs[i].id
              var title = arrayDePeliculas[i].title
              var url =  arrayDePeliculas[i].poster_path
              console.log(url);



               // IDEA: document.querySelector(".populares").innerHTML += ' <article class= "mySlides fade"> <a href=detallePelicula.html <p>  '+ title +  "</p> "  +   "<img src= " + urlFija + url + " width= 100px  </a> </article>"


               article = "<article class='mySlides fade'> "
              article += "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
              article += "<a href='detallePelicula.html'> <p>" + title + "</p> "
              article += "<img src= " + urlFija + url + " width='30%'  >"
              article += "  </a> </article>"
              document.querySelector("section.populares ").innerHTML += article
          }
              showSlides(slideIndex);
            })
          .catch(function(error) {
          console.log("Error: " + error);
            })



            fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1" )
                  .then(function(respuesta) {
                  return respuesta.json()
            })
                  .then(function(informacion) {
                  console.log(informacion);

                  var arrayDePuntuadas = informacion.results
                  console.log(arrayDePuntuadas);

                  for (var i = 0; i < 5; i++) {
                  // IDEA: var id = arrayDeGifs[i].id
                  var title2 = arrayDePuntuadas[i].title
                  var url2 =  arrayDePuntuadas[i].poster_path
                      // IDEA: console.log(url);

                      article2 = "<article class='mySlidesPuntuadas fade'> "
                     article2 += "<div class='numbertext'>" + i + " / 5</div>"
                     article2 += " <a href='detallePelicula.html'> <p> " + title2 + "</p> "
                     article2 += "<img src= " + urlFija + url2 + " width='30%'  >"
                     article2 += "  </a> </article>"
                     document.querySelector("section.puntuadas ").innerHTML += article2


                 // IDEA: document.querySelector(".puntuadas").innerHTML += ' <article> <a href=detallePelicula.html <p>  '+ title2 +  "</p> "  +   "<img src= " + urlFija + url2 + " width= 100px  </a> </article>"

                  }
                    showSlides1(slideIndex1);
                  })
                  .catch(function(error) {
                  console.log("Error: " + error);
                  })


                  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1" )
                        .then(function(respuesta) {
                        return respuesta.json()
                  })
                        .then(function(informacion) {
                        console.log(informacion);

                  var arrayDeEstrenos = informacion.results
                  console.log(arrayDeEstrenos);

                  for (var i = 0; i < 5; i++) {
                  // IDEA: var id = arrayDeGifs[i].id
                  var title3 = arrayDeEstrenos[i].title
                  var url3 =  arrayDeEstrenos[i].poster_path
                    console.log(url3);

                    article = "<article class='mySlidesEstrenos fade'> "
                    article += "<div class='numbertext'>" + i + " / 5</div>"
                    article += "<a href='detallePelicula.html'> <p>" + title3 + "</p> "
                    article += "<img src= " + urlFija + url3 + " width='30%'  >"
                    article += "  </a> </article>"
                    document.querySelector("section.estrenos ").innerHTML += article


                  // IDEA: document.querySelector(".estrenos").innerHTML +=' <article> <a href=detallePelicula.html <p> '+ title3 +  "</p> "  +   "<img src= " + urlFija + url3 + " width= 100px  </a> </article>"

                  }
                 showSlides2(slideIndex2);
                  })
                    .catch(function(error) {
                    console.log("Error: " + error);
                })











}
