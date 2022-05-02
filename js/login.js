//constantes
const bodyLogin =document.querySelector('#bodyLogin')
bodyLogin.classList.remove('opacity0')
bodyLogin.classList.add('opacity1')

//inicio del layout
function layoutIni(){
    const divEmail = document.querySelector('#divEmail')
    divEmail.classList.add('layoutActvie')
}

//Animacion de entrada
setTimeout(layoutIni,500)

//Funciones para pasar de un layout a otro :

//crear cuenta
document.querySelector('#registro').onclick = function(e){
    e.preventDefault();
    nextLayout("#divEmail",'#divRegister')
}

//botones registro:
// Volver
document.querySelector('#btnNextEmail').onclick = function(e){
    prevLayout('#divRegister',"#divEmail")
}
//Registrar
document.querySelector('#btnRegister').onclick = function(e){
    const nameUser = document.querySelector('#nameUser').value
    const emailNewUser =document.querySelector('#emailNewUser').value;
    const passNewUsser =document.querySelector('#passNewUser').value;
    const alertRegister =document.querySelector('#alertRegister');
    const validEmail = validarEmail(emailNewUser)
    if(nameUser =="" || emailNewUser =="" || passNewUsser == ""){
        alertRegister.innerHTML='<p style="color: red;">Debe Rellenar todos los campos</p>'
        alertRegister.style.display="block";
    }else{
        if(!validEmail){
            alertRegister.innerHTML = '<p style="color:red;">Escribe una dirección de correo electronico valido</p>';
            alertRegister.style.display = "block"
        }else{
            alertRegister.style.display = "none"
            alert("Usuario Registrado: "+nameUser+" Email Registrado: "+emailNewUser+" Contraseña Registrada: "+passNewUsser)
        }
    
    }
}
//validacion correo registro keyup
document.querySelector('#emailNewUser').onkeyup = function(){
    const emailNewUser =document.querySelector('#emailNewUser').value;
    const alertRegister =document.querySelector('#alertRegister');
    const validEmail = validarEmail(emailNewUser)
    if(!validEmail){
        alertRegister.innerHTML = '<p style="color:red;">Escribe una dirección de correo electronico valido</p>';
        alertRegister.style.display = "block"
    }else{
        alertRegister.style.display = "none"
    }
}

//Recuperar Contraseña 
document.querySelector('#linkRecoveryPass').onclick = function(e){
    e.preventDefault();
    nextLayout('#divPassword','#divRecoveryPass')
}
//Botones recuperar contraseña
//Volver
document.querySelector('#btnCancelar').onclick = function(){
    prevLayout('#divRecoveryPass',"#divPassword")
}
//Enviar 
document.querySelector('#btnSendEmail').onclick = function(){
    const email =document.querySelector('#sendEmail').value
    const validEmail = validarEmail(email)
    const alertaEmail = document.querySelector('#alertSendEmail')

    if(!validEmail){
        alertaEmail.innerHTML='<p style="color: red;">Ingrese un correo electronico valido</p>'
        alertaEmail.style.display ="Block"
    }else{
        alertaEmail.style.display ="none"
        alert("Se Envío un Correo A: "+ email)
    }
}
//Enviar keyup
document.querySelector('#sendEmail').onkeyup = function(){
    const email =document.querySelector('#sendEmail').value
    const validEmail = validarEmail(email)
    const alertaEmail = document.querySelector('#alertSendEmail')

    if(!validEmail){
        alertaEmail.innerHTML='<p style="color: red;">Ingrese un correo electronico valido</p>'
        alertaEmail.style.display ="Block"
    }else{
        alertaEmail.style.display ="none"
    }
}

//Layout siguiente
function nextLayout(parent,next){
    const divParent = document.querySelector(parent);
    const divNext = document.querySelector(next);
    divParent.classList.remove ('layoutActvie','layoutLeft','layoutRight');
    divNext.classList.remove ('layoutActvie','layoutLeft','layoutRight');
    divParent.classList.toggle('layoutLeft');
    divNext.classList.toggle('layoutActvie');
}
//layout anterior
function prevLayout(parent,prev){
    const divParent = document.querySelector(parent);
    const divPrev = document.querySelector(prev);
    divParent.classList.remove  ('layoutActvie','layoutLeft','layoutRight');
    divPrev.classList.remove  ('layoutActvie','layoutLeft','layoutRight');
    divParent.classList.toggle('layoutRight');
    divPrev.classList.toggle('layoutActvie');
}

//Boton: Siguiente + Validacion de email + NextLayout
document.querySelector('#btnSiguiente').onclick = function(){
    const emailUsuario= document.querySelector('#emailUsuario').value;
    const alertaEmai= document.querySelector('#alertaEmai');
    const spanEmail= document.querySelector('#spanEmail');
    const emailValid = validarEmail(emailUsuario)
    
    if(!emailValid){
        alertaEmai.innerHTML = '<p style="color:red;">Escribe una dirección de correo electronico</p>';
        alertaEmai.style.display = "block"
    }else{
        alertaEmai.style.display = "none"
        spanEmail.innerHTML =emailUsuario;
        nextLayout('#divEmail','#divPassword');
    }

}

//validar email
function validarEmail(email){
    const StrEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if (StrEmail.test(email)== false){
        return false;
    }else{
        return true;
    }
}

//Validacion keyup
document.querySelector('#emailUsuario').onkeyup = function(){
    const emailUsuario = document.querySelector('#emailUsuario').value;
    const alertaEmai= document.querySelector('#alertaEmai');
    const emailValid = validarEmail(emailUsuario)
    
    if(!emailValid){
        alertaEmai.innerHTML = '<p style="color:red;">Escribe una dirección de correo electronico</p>';
        alertaEmai.style.display = "block"
    }else{
        alertaEmai.style.display = "none"
    }
}
//Validacion keyup
document.querySelector('#passUser').onkeyup = function(){
    const passUser = document.querySelector('#passUser').value;
    const alertPass =  document.querySelector('#allertPass');
 
    //alerta que informa el correcto guardado de los datos ingresados, en este caso simplemente es una alerta
    if(passUser == ""){
        alertPass.innerHTML='<p style="color: red">Escriba su contraseña</p>'
        alertPass.style.display="block";
     }else{
         alertPass.style.display="none";
         alert("Usuario: "+strEmailUser+" Contraseña: "+strPassUser)
     }
}
//Flecha retroceso <i>
document.querySelector('#btnPrev').onclick = function(){
    prevLayout('#divPassword','#divEmail');
}
//boton de loging
document.querySelector('#btnLogin').onclick = function(){
   const strEmailUser = document.querySelector('#emailUsuario').value;
   const strPassUser =  document.querySelector('#passUser').value;

   const alertPass =  document.querySelector('#allertPass');

   //alerta que informa el correcto guardado de los datos ingresados, en este caso simplemente es una alerta
   if(strPassUser == ""|| strEmailUser =="" ){
       alertPass.innerHTML='<p style="color: red">Escriba su contraseña</p>'
       alertPass.style.display="block";
    }else{
        alertPass.style.display="none";
        alert("Usuario: "+strEmailUser+" Contraseña: "+strPassUser)
    }
}
