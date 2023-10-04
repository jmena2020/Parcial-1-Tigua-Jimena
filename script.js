const toggleButton = document.getElementById ('toggleButton');
const menu = document.getElementById ('menu');

toggleButton.addEventListener('click',() => {
    if (menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var sexo = document.getElementById("sexo").value;
    var correo = document.getElementById("correo").value;
    
    // Expresión regular para validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de campos
    if (nombre === "" || apellido === "" || sexo === "" || correo === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    } else if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Si todos los campos son válidos, el formulario se enviará
    return true;
}