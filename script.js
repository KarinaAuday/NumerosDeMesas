// Lista de invitados con nombre y apellido
const invitados = {
    "Juan Pérez": 5,
    "María Gómez": 10,
    "Carlos Rodríguez": 3,
    "Ana Martínez": 7,
    "Karina Auday": 2,
    // Agrega más invitados aquí
};

function buscarMesa() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const resultado = document.getElementById('resultado');
    
    const clave = `${nombre} ${apellido}`;  // Concatenamos nombre y apellido

    // Verifica si el nombre y apellido están en la lista de invitados
    if (invitados[clave]) {
        resultado.textContent = `Tu número de mesa es: ${invitados[clave]}`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = 'Nombre y apellido no encontrados. Verifica e intenta nuevamente.';
        resultado.style.color = "red";
    }
}
