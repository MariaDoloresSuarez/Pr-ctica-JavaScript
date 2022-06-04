const entrar=document.querySelector('button');

entrar.onclick= function validarFormulario(){
var usuario=document.getElementById('inputEmail3').value;
var contraseña=document.getElementById('inputPassword3').value;
if (usuario.length==0){

    alert('Debes ingresar el usuario');
    return;
}
else {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     var validar= regex.test(usuario) ? true : false;
if (!validar){
    
alert('Debes ingresar el @ en al usuario');
}

}

if (contraseña.length==0){

    alert('Debes ingresar la contraseña');
    return;
}


}