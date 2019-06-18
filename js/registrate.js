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
  console.log(localStorage);
  if (localStorage.getItem("email") == email ) {

    theForm.onsubmit
  } else {
    event.preventDefault
  }
}
