
// CommonJS


// CommonJS


function expreionRegularPassword(password) {
    let regex=/^[A-Z]{1}(\d|[a-z]){5}/
    return regex.test(password)
}
function combrobarCorreo(mail) {
    let regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(mail)
}

function comprobar() {
  

// CommonJS

   
    var correo=document.getElementById("correo").value;
    const error=document.querySelector(".error");
    const error2=document.querySelector(".errorgmail");
    let password=document.getElementById("password").value;
  if(correo==""&&password==""){
    const div = document.querySelector(".error");  // <div></div>

    div.textContent = "No ha ingresado un correo"; // <div>Hola a todos</div>
   div.textContent; 
   const div2=document.querySelector(".errorgmail")
    div2.textContent="tiene que ingresar un password";

  }else if(!expreionRegularPassword(password)&&!combrobarCorreo(correo)){
//    error.textContent("ingrese un correo valido")
//    error.textContent;
//   error2.innerHTML("ingrese un password que empiece con Mayuculas y que sea de 6 caracteres")
   const div = document.querySelector(".error");  // <div></div>

      div.textContent = "El correo no es valido"; // <div>Hola a todos</div>
     div.textContent; 
     const div2=document.querySelector(".errorgmail")
      div2.textContent="El password debe ser igual a 6 caracteres con una mayuscula al principio";
 
        Swal.fire({
          title: 'Correo y password erroneos',
          text: 'Ingrese un correo valida y un password con 6 digitos',
          icon: 'error',
          confirmButtonText: 'Intentar',
          customClass:{
               content:'content-class'
          }
        })
        
      
   
  } else if(!expreionRegularPassword(password)){
    const div2=document.querySelector(".errorgmail")
    div2.textContent="Ingrese un password con 6 digitos";
    const div = document.querySelector(".error");  // <div></div>

      div.textContent = ""; // <div>Hola a todos</div>
     div.textContent; 
    // error2.innerHTML("ingrese un password que empiece con Mayuculas y que sea de 6 caracteres")
     
    Swal.fire({
      title: ' Password erroneo',
      text: 'Ingrese un password con 6 digitos y una mayuscula al principio',
      icon: 'error',
      confirmButtonText: 'Intentar'
    })
   }else if(!combrobarCorreo(correo)){
    // error.innerHTML("ingrese un correo valido")
    const div = document.querySelector(".error");  // <div></div>
    const div2=document.querySelector(".errorgmail")
    div2.textContent="";
    div.textContent = "El correo no es valido"; // <div>Hola a todos</div>
    div.textContent;
    Swal.fire({
      title: ' Ingrese un correo valido',
      text: 'Ingrese un correo valido',
      icon: 'error',
      confirmButtonText: 'Intentar'
    }) 

   }else{
    if(comprobarusuario(password,correo)){
    window.location="src/vistas/vista1/index.html"

      

    }else{
      const div = document.querySelector(".error");  // <div></div>

      div.textContent = ""; // <div>Hola a todos</div>
     div.textContent; 
     const div2=document.querySelector(".errorgmail")
      div2.textContent="";
 
      const noexiste=document.querySelector(".MensajeDeNoexistencia");
      noexiste.textContent="El usuario no existe"
      noexiste.textContent;
    }

   }

    
}
function comprobarusuario(password,email) {
  if (password=="A23456"&&email=="Upch@gmail.com") {
    return true;
  }else{
    return false;
  }
}
