/* window.onload = function() {

 // Registrate
 // var encabezado = document.querySelector(".permitido")
 // var blocked = document.querySelector (".iniciaSesion")
 // var loguea =document.querySelector(".loguiate")
 // loguea.onclick = function (event) {
 //   blocked.style.display = "block";
 //  encabezado.style.display ="none"; }


var theForm = document.querySelector ("form.sesion");

var inputName= document.querySelector ("input.name")


var inputEmail= document.querySelector ("input.email")

theForm.onsubmit = function () {
  var error = 0

  if (inputName.value == "" ) {
    error = 1
    event.preventDefault ();
    inputName.classList.add ("error");
    inputName.parentElement.querySelector("p.loginNombre").innerText = "obligatorio";
  }
  if (inputEmail.value == "") {
    error = 1
    event.preventDefault ();
    inputEmail.classList.add ("error");
    inputEmail.parentElement.querySelector("p.loginEmail").innerText = "obligatorio";
  }


  if (error == 0) {
    // event.preventDefault ();
    var nombre = document.querySelector ("input.name").value

    var email = document.querySelector ("input.email").value
    console.log(email);

    sessionStorage.setItem("name", nombre)
    localStorage.setItem("email", email)
  }
}

  if(sessionStorage.getItem("name") != null) {
    // IDEA: esta logueado

    var btnLogin = document.querySelector(".boton2")
     var btnLogin = document.querySelector(".login").innerHTML =  sessionStorage.getItem("name")

    var registrate = document.querySelector (".register").style.display = "none"
    var btnOut = document.querySelector (".logOut").style.display = "block"
    var out = document.querySelector(".logOut")
    out.onclick = function (event) {
      sessionStorage.removeItem("name")
      window.location.href = "home.html"


   }
    // IDEA: btnLogin.style.display = "none"
    // IDEA: document.querySelector(".bienvenida").style.display = "block"
    // IDEA: document.querySelector(".bienvenida").innerHTML = "Hola " + localStorage.getItem("name") + "!"
    document.getElementById("myList").style.display = "block"


  } else {
     // IDEA: no.
     }
   }
   */
