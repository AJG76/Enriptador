function validarTexto() {
    var texto = document.getElementById("inputText").value;
    var mensajeError = document.getElementById("mensajeError");
    // Expresión regular para validar letras minúsculas
    var expresion = /^[a-z\s]+$/;
    if (!expresion.test(texto)) {
        mensajeError.textContent = "Por favor, ingresa solo letras minúsculas.";
        document.getElementById("inputText").value = '';
    } else {
        mensajeError.textContent = "";
    }
}


var textoOriginal='';
function encriptar() {
    
    textoOriginal = document.getElementById("inputText").value;

    //Limpia imagen
    var outputText = document.getElementById("outputText");
    outputText.style.backgroundImage = 'none';

    var inputText = document.getElementById("inputText").value;
    var outputText = "";    
    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText[i];        
        // Si es una letra minúscula, encripta cambiando a la siguiente letra
        if (charCode === 'e'){            
            charCode += 'nter';           
        }
        else if (charCode === 'i'){
            charCode += 'mes';
        }
        else if (charCode === 'a'){
            charCode += 'i';
        }
        else if (charCode === 'o'){
            charCode += 'ber';
        }
        else if (charCode === 'u'){
            charCode += 'fat';
        }
        outputText += charCode;
    }
    document.getElementById("outputText").value = outputText;
}


function desEncriptar() { 
    document.getElementById("outputText").value = textoOriginal; 
}
function reset(){    
    location.reload();
}

function copy(){        
    document.getElementById("inputText").value = ''; 
    document.getElementById("inputText").value = document.getElementById("outputText").value;
    document.getElementById("outputText").value = ''; 
}