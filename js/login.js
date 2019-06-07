window.addEventListener("load",function() {

var theForm = document.querySelector ("form.informacion");
console.log(theForm);
var inputName= document.querySelector ("input.name")
console.log(inputName);
var inputEmail= document.querySelector ("input.email")

theForm.onsubmit = function () {
  var error = 0

  if (inputName.value == "" ) {
    error = 1
    event.preventDefault ();
    inputName.classList.add ("error");
    inputName.parentElement.querySelector("p.errorNombre").innerText = "obligatorio";
  }
  if (inputEmail.value == "") {
    error = 1
    event.preventDefault ();
    inputEmail.classList.add ("error");
    inputEmail.parentElement.querySelector("p.errorEmail").innerText = "obligatorio";
  }

  if (error == 0) {
    var nombre = document.querySelector ("input.name").value

    localStorage.setItem("name", nombre)
  }
}
  console.log("ESTOY ACA");
  if(localStorage.getItem("name") != null) {
    // IDEA: esta logueado
    console.log("Y ACA");
    var btnLogin = document.querySelector(".boton2")
    console.log(btnLogin);
    btnLogin.style.display = "none"

    document.querySelector(".bienvenida").style.display = "block"
    document.querySelector(".bienvenida").innerHTML = "Hola " + localStorage.getItem("name") + "!"

    document.getElementById("myList").style.display = "block"

  } else {
     // IDEA: no.
  }
})
