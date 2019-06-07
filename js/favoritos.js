/* window.onload = function() {
  var favoritos = localStorage.getItem("favoritos")

  favoritos = JSON.parse(favoritos).listadoFavoritos

  for (var i = 0; i < favoritos.length; i++) {
    fetch("https://api.giphy.com/v1/gifs/" + favoritos[i] + "?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(gif) {
        gif = gif.data

        var id = gif.id
        var title = gif.title
        var url = gif.images.original.url

        document.querySelector("div").innerHTML += "<p><a href=detalleGif.html?id=" + id + ">" + title + "</a></p>"
        document.querySelector("div").innerHTML += "<img src=" + url + ">"
      })
  }
}
*/
