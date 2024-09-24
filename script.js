const mesas = [
    { nombre: 'Juan', apellido: 'Pérez', mesa: 5 },
    { nombre: 'Ana', apellido: 'Gómez', mesa: 3 },
    { nombre: 'Carlos', apellido: 'Fernández', mesa: 8 },
    { nombre: 'María', apellido: 'Rodríguez', mesa: 12 } ,
    { nombre: 'Luis', apellido: 'Hernández', mesa: 7 },
    { nombre: 'Sara', apellido: 'Martínez', mesa: 1 },
    { nombre: 'Pedro', apellido: 'García', mesa: 9 },
    { nombre: 'Lucía', apellido: 'Gutiérrez', mesa: 4 },
    { nombre: 'Manuel', apellido: 'Torres', mesa: 10 },
    { nombre: 'Elena', apellido: 'Jiménez', mesa: 2 },
    { nombre: 'Gabriel', apellido: 'Krawiec', mesa: 6 },
    { nombre: 'Karina', apellido: 'Auday', mesa: 11 }
];

document.getElementById('mesaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombreInput = document.getElementById('nombre').value.toLowerCase().trim();
    const apellidoInput = document.getElementById('apellido').value.toLowerCase().trim();
    
    // Validar si los campos están vacíos
    if (!nombreInput || !apellidoInput) {
        document.getElementById('resultado').textContent = 'Por favor, complete ambos campos.';
        return;
    }

    const resultado = mesas.find(mesa => 
        mesa.nombre.toLowerCase() === nombreInput && mesa.apellido.toLowerCase() === apellidoInput
    );

    const resultadoDiv = document.getElementById('resultado');

    if (resultado) {
        resultadoDiv.textContent = `Mesa asignada: ${resultado.mesa}`;
    } else {
        resultadoDiv.textContent = 'No se encontró mesa asignada para ese nombre y apellido.';
    }
});
