window.addEventListener("load",function() {

 // Registrate

var theForm = document.querySelector ("form.informacion");

var inputName= document.querySelector ("input.name")


var inputEmail= document.querySelector ("input.email")

theForm.onsubmit = function () {
  var error = 0

  if (inputName.value == "" ) {
    error = 1
    event.preventDefault ();
    inputName.classList.add ("error");
    inputName.parentElement.querySelector("p.errorNombre").innerText = "Obligatorio";
  }
  if (inputEmail.value == "") {
    error = 1
    event.preventDefault ();
    inputEmail.classList.add ("error");
    // IDEA: inputEmail.parentElement.querySelector("p.errorEmail").innerText = "obligatorio";
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
      // IDEA: document.querySelector(".register").style.display="block";
      // IDEA: document.querySelector(".logOut").style.display="none";
      // IDEA: document.querySelector(".login").style.display="block";
      // IDEA: console.log(btnLogin);

   }
    // IDEA: btnLogin.style.display = "none"
    // IDEA: document.querySelector(".bienvenida").style.display = "block"
    // IDEA: document.querySelector(".bienvenida").innerHTML = "Hola " + localStorage.getItem("name") + "!"
    document.getElementById("myList").style.display = "block"


  } else {
     // IDEA: no.
  }

// IDEA: // var login = document.querySelector ("button.loguin")
// var formulario = document.querySelector ("form.login")
// var inputNombre = document.querySelector ("input.loginNombre")
// var inputEmail = document.querySelector ("input.loginEmail")
// formulario.onsubmit = function () {
//   if (inputEmail != localStorage.getItem("email"))
//   event.preventDefault ();
//   inputEmail.classList.add ("error");
//   inputEmail.parenElement.querySelector("p.errorLogin").innerText = "El email";
// }

//login
// var info = document.querySelector ("form.informacion");
//
// var inputNombre= document.querySelector ("input.name")
//
// var inputMail= document.querySelector ("input.email")
//
//   info.onsubmit = function () {
//   var error = 0
//
//   if (inputName.value == "" ) {
//     error = 1
//     event.preventDefault ();
//     inputName.classList.add ("error");
//     inputName.parentElement.querySelector("p.errorNombre").innerText = "obligatorio";
//   }
//   if (inputEmail.value == "") {
//     error = 1
//     event.preventDefault ();
//     inputEmail.classList.add ("error");
//     inputEmail.parentElement.querySelector("p.errorEmail").innerText = "obligatorio";
//   }
//
//   if (error == 0) {
//     var nombre = document.querySelector ("input.name").value
//     var email = document.querySelector ("input.email").value
//       console.log(email);
//     sessionStorage.setItem("name", nombre)
//     localStorage.setItem("email", email)
//     console.log(localStorage.getItem("email"));
//   }
// }
//
//   if(sessionStorage.getItem("name") != null) {
//     // IDEA: esta logueado
//
//     var btnLogin = document.querySelector(".boton2")
//      var btnLogin = document.querySelector(".login").innerHTML =  sessionStorage.getItem("name")
//
//     var registrate = document.querySelector (".register").style.display = "none"
//     var btnOut = document.querySelector (".logOut").style.display = "block"
//     var out = document.querySelector(".logOut")
//     out.onclick = function (event) {
//       sessionStorage.removeItem("name")
//    }
//     // IDEA: btnLogin.style.display = "none"
//     // IDEA: document.querySelector(".bienvenida").style.display = "block"
//     // IDEA: document.querySelector(".bienvenida").innerHTML = "Hola " + localStorage.getItem("name") + "!"
//     document.getElementById("myList").style.display = "block"
//
//   } else {
//      // IDEA: no.
//   }





})

// IDEA: Primero veo si el usuario esta loguiado, si no esta loguiado aparece el boton de login. Una vez que llene el formulario, lo remplazo por un saludo y hago aparecer otro boton con log out.
