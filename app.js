function encriptar() {
    let texto = document.getElementById('texto').value;

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    // Ocultar la imagen y mostrar el texto encriptado
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('resultado').innerText = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById('texto').value;

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    // Ocultar la imagen y mostrar el texto desencriptado
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('resultado').innerText = textoDesencriptado;
}

function copiarTexto() {
    let resultado = document.getElementById('resultado').innerText;
    let temporal = document.createElement('textarea');
    temporal.value = resultado;
    document.body.appendChild(temporal);
    temporal.select();
    document.execCommand('copy');
    document.body.removeChild(temporal);
    alert("Texto copiado al portapapeles");
}
