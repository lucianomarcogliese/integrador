window.onload = function() {



    var urlFija = " https://image.tmdb.org/t/p/original/"
    var article = ""
    var limite = 5

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
      var header = document.querySelector(".permitido")
      var bloqueado = document.querySelector (".formulario")
      var btn =document.querySelector(".boton2")
      btn.onclick = function (event) {
        bloqueado.style.display = "block";
        header.style.display ="none";  }
        var header1 = document.querySelector(".permitido")
        var bloqueado1 = document.querySelector (".formulario")
        var btn1 =document.querySelector(".loguin")
        btn1.onclick = function (event) {
          bloqueado1.style.display = "block";
          header1.style.display ="none";  }
        //Login

         // var encabezado = document.querySelector(".permitido")
         // var blocked = document.querySelector (".iniciaSesion")
         // var loguea =document.querySelector(".loguiate")
         // loguea.onclick = function (event) {
         //   blocked.style.display = "block";
         //  encabezado.style.display ="none"; }


// IDEA: https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US&page=1" )
          .then(function(respuesta) {
          return respuesta.json()
          })
          .then(function(informacion) {

          var arrayDePeliculas = informacion.results


          for (var i = 0; i < limite; i++) {
              var id = arrayDePeliculas[i].id

              var title = arrayDePeliculas[i].title
              var url =  arrayDePeliculas[i].poster_path




               // IDEA: document.querySelector(".populares").innerHTML += ' <article class= "mySlides fade"> <a href=detallePelicula.html <p>  '+ title +  "</p> "  +   "<img src= " + urlFija + url + " width= 100px  </a> </article>"
                // IDEA: <a href=detalleGif.html?id=" + id + ">"

              article = "<article class='mySlides fade'> "
              article +=    "<a href=detallePelicula.html?id=" + id +   ">"
              article +=    " <p>" + title + "</p> "
              article +=      "<img src= " + urlFija + url + " width='30%'  >"
              article +=    "</a>"
              article +=    "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
              article += "</article>"
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


                  var arrayDePuntuadas = informacion.results


                  for (var i = 0; i < 5; i++) {
                  var id = arrayDePuntuadas[i].id
                  var title2 = arrayDePuntuadas[i].title
                  var url2 =  arrayDePuntuadas[i].poster_path
                      // IDEA: console.log(url);

                      article2 = "<article class='mySlidesPuntuadas fade'> "
                      article2 +=  "<a href=detallePelicula.html?id=" + id +   ">"
                      article2 +=  "<p> " + title2 + "</p> "
                     article2 +=        "<img src= " + urlFija + url2 + " width='30%'  >"
                     article2 +=    "</a>"
                     article2 +=    "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
                     article2 +=  "</article>"
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


                  var arrayDeEstrenos = informacion.results


                  var title3
                  var url3
                  var id
                  for (var i = 0; i < 5; i++) {
                     id= arrayDeEstrenos[i].id
                  title3 = arrayDeEstrenos[i].title
                  url3 =  arrayDeEstrenos[i].poster_path


                    article = "<article class='mySlidesEstrenos fade'> "
                    article +="<a href=detallePelicula.html?id=" + id+   ">"
                    article +=  " <p>" + title3 + "</p> "
                    article += "<img src= " + urlFija + url3 + " width='30%'  >"
                    article +="<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
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
