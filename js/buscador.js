window.onload = function() {

      var header = document.querySelector(".permitido")
      var bloqueado = document.querySelector (".formulario")
      var btn =document.querySelector(".boton2")
          btn.onclick = function (event) {
              bloqueado.style.display = "block";
              header.style.display ="none";  }
    var header = document.querySelector(".permitido")
    var bloqueado = document.querySelector (".formulario")
    var btn =document.querySelector(".loguiate")
          btn.onclick = function (event) {
              bloqueado.style.display = "block";
              header.style.display ="none";  }

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

      var buscador1 = document.querySelector ("form.Buscador5");
      var inputBusqueda1= document.querySelector ("input.busqueda2")
          buscador1.onsubmit = function () {
              if (inputBusqueda1.value.length < 3 ) {
                  event.preventDefault ();
                    inputBusqueda1.classList.add ("error");
                    inputBusqueda1.parentElement.querySelector("p.errorBuscador1").innerText = "Minimo 3 caracteres";
        setTimeout(function() {
              inputBusqueda1.parentElement.querySelector("p.errorBuscador1").style.display = "none";
        }, 3000)

      } }

  var urlFija = " https://image.tmdb.org/t/p/original/"
  var article = ""
  var limite = 10

  var queryString = new URLSearchParams(location.search)
  var buscador = queryString.get("q")

var search1 = document.querySelector("input.Busqueda")
  document.querySelector("input.Busqueda").value= buscador
  document.querySelector ("input.busqueda2").value = buscador


  fetch("https://api.themoviedb.org/3/search/movie?api_key=489728903a2b25dc358b98664c14a627&query="  + buscador +  "&page=1&include_adult=true")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var arrayDeBuscador = informacion.results
      console.log(arrayDeBuscador);

      for (var i = 0; i < limite; i++) {
        // IDEA: var id = arrayDeBuscador[i].id
        var title = arrayDeBuscador[i].title
        var url =  arrayDeBuscador[i].poster_path


        article = "<article class='mySlides fade busqueti'> "
        article +=    "<a href='detallePelicula.html'> <p>" + title + "</p> "
        article +=      "<img src= " + urlFija + url + " width='30%'  >"
        article +=    "</a>"
        article +=    "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
        article += "</article>"
        document.querySelector("section ").innerHTML += article

      }
        showSlides(slideIndex);
    })
    .catch(function(error) {
      console.log("Error: " + error);
        document.querySelector(".sinResultados").innerHTML = "No hay resultados para la busqueda"
      console.log(error);
    })
  }
