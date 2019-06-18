 window.onload = function() {

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
  var article = ""
 fetch( "https://api.themoviedb.org/3/movie/" + favoritos + "?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=en-US")
        .then(function(respuesta) {
        return respuesta.json()
        })
        .then(function(informacion) {
          console.log(informacion);



var limite= 5
          for (var i = 0; i < favoritos.length; i++) {

               var id = informacion.id
               console.log(id);


              var titulo = informacion.title

              var url =  informacion.poster_path

                    article = "<article class='mySlides fade'> "
                    article +=    "<a href=detallePelicula.html?id=" + id +   ">"
                    article +=      "<p>" + titulo + "</p> "
                    article +=      "<img src= " + urlFija + url + " width='30%'  >"
                    article +=      "<div class='numbertext'>" + (i+1) + " / "+limite+"</div>"
                    article +=  "</a>"
                    article += " </article>"

                                        document.querySelector("div.preferidas ").innerHTML += article
          }
              showSlides(slideIndex);
            })




        .catch(function(error) {
        console.log("Error: " + error);
          })

}
