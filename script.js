class Invitado {
    constructor(nombre, apellido, nroMesa) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroMesa = nroMesa;
    }
}

const invitados = [
    new Invitado('Juan', 'Perez', 5),
    new Invitado('Ana', 'Gómez', 3),
    new Invitado('Carlos', 'Fernández', 8),
    new Invitado('María', 'Rodríguez', 12),
    new Invitado('Luis', 'Hernández', 7),
    new Invitado('Sara', 'Martínez', 1),
    new Invitado('Pedro', 'García', 9),
    new Invitado('Lucía', 'Gutiérrez', 4),
    new Invitado('Manuel', 'Torres', 10),
    new Invitado('Elena', 'Jiménez', 2),
    new Invitado('Gabriel', 'Krawiec', 6),
    new Invitado('Karina', 'Auday', 11)
];

function buscarMesa() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const resultado = document.getElementById('resultado');
    
    // Limpia el resultado anterior
    resultado.classList.remove('error');
    
    const invitadoEncontrado = invitados.find(inv => 
        inv.nombre.toLowerCase() === nombre.toLowerCase() &&
        inv.apellido.toLowerCase() === apellido.toLowerCase()
    );

    if (invitadoEncontrado) {
        resultado.textContent = `Ud. está en la mesa número ${invitadoEncontrado.nroMesa}`;
    } else {
        resultado.classList.add('error'); // Agrega clase de error
        resultado.textContent = 'No se encontró a este invitado.';
    }
}
