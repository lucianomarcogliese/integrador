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
   var urlFija = " https://image.tmdb.org/t/p/original/"
   var article = ""

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


  var favoritos = localStorage.getItem("favoritos")
  favoritos = JSON.parse(favoritos).listadoFavoritos

  console.log(favoritos.length);


  var article = ""

  if (favoritos.length == 0 ) {
    document.querySelector("h5").innerHTML = "No hay ninguna pelicula en tu lista"

  }
for (var i = 0; i < favoritos.length; i++) {
console.log(favoritos);


fetch( "https://api.themoviedb.org/3/movie/" + favoritos[i] + "?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US")
.then(function(respuesta) {
  return respuesta.json()
})
.then(function(informacion) {
  console.log(informacion);


var limite= 5

               var id = informacion.id
              var titulo = informacion.title
              var url =  informacion.poster_path

                    article = "<article class='mySlides fade misFavoritas'> "
                    article +=    "<a href=detallePelicula.html?id=" + id +   ">"
                    article +=      "<p>" + titulo + "</p> "
                    article +=      "<img src= " + urlFija + url + " width='30%'  >"

                    // article +=      "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
                    article +=  "</a>"
                    article += " </article>"

                                        document.querySelector(".preferidas ").innerHTML += article

              showSlides(slideIndex);
            })




        .catch(function(error) {
        console.log("Error: " + error);
          })

          // if (favoritos.length = 0) {
          //   document.querySelector(".preferidas").innerHTML += "No hay ninguna pelicula en tu lista"
          //
          // }


} }
