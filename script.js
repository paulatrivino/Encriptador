const txtArea = document.querySelector(".txt-encriptado");
const mensaje = document.querySelector(".mensaje");



function validarTexto(){
    let texto = document.querySelector(".txt-encriptado").value;
    let validador = texto.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        alert("Recuerda que no se permiten letras mayúsculas ni caracteres especiales!");
        location.reload();
        return true;
    }
}

function encriptar(encriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptado = encriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (encriptado.includes(matrizCodigo[i][0])) {
            encriptado = encriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return encriptado;

};

function btnEncriptar() {
    if(!validarTexto()){
    const textoEncriptado = encriptar(txtArea.value);
    mensaje.value = textoEncriptado;
    txtArea.value = "";

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("nomessage").style.display = "none";
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "initial";
    }
}



function desencriptar(desencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptado = desencriptado.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
        if (desencriptado.includes(matrizCodigo[i][1])) {
            desencriptado = desencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return desencriptado;
};

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(txtArea.value);
    mensaje.value = textoDesencriptado;
    txtArea.value = "";

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("nomessage").style.display = "none";
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "initial";
}

function  btnCopiar() {
    let copiarTexto = document.querySelector(".mensaje");
    copiarTexto.select();
    document.execCommand("copy");
    alert("Texto copiado!")
}



  
  

