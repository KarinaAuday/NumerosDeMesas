// Lista de invitados con nombre y apellido
const invitados = {
    "Juan Pérez": 5,
    "María Gómez": 10,
    "Carlos Rodríguez": 3,
    "Ana Martínez": 7,
    "Karina Auday": 2,
    "Gabriel Krawiec": 1,
    "Marcela Imach": 4,
    "Melisa Cuan": 6,
    // Agrega más invitados aquí
};

function buscarMesa() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const resultado = document.getElementById('resultado');
    
    const claveUsuario = `${nombre} ${apellido}`.toLowerCase();  // Convertimos la entrada del usuario a minúsculas

    // Convertimos las claves del objeto a minúsculas para la comparación
    const clavesInvitados = Object.keys(invitados).map(invitado => invitado.toLowerCase());

    // Buscamos el índice de la clave que coincide (ignorar mayúsculas y minúsculas)
    const indice = clavesInvitados.indexOf(claveUsuario);

    // Si el índice es válido, significa que encontramos una coincidencia
    if (indice !== -1) {
        const claveOriginal = Object.keys(invitados)[indice];  // Recuperamos la clave original con mayúsculas y minúsculas
        resultado.textContent = `Tu número de mesa es: ${invitados[claveOriginal]}`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = 'Nombre y apellido no encontrados. Verifica e intenta nuevamente.';
        resultado.style.color = "red";
    }
}
