// Array de mesas

  const mesas = [
    // Mesa 1
    { nombre: 'Sara', apellido: 'Saadia', mesa: 1 },
    { nombre: 'Yael', apellido: 'Levy', mesa: 1 },
    { nombre: 'Luli', apellido: 'Wolf', mesa: 1 },
    { nombre: 'Tamar', apellido: 'Boim', mesa: 1 },
    { nombre: 'Chanty', apellido: 'Iskandarani', mesa: 1 },
    { nombre: 'Maia', apellido: 'Sued', mesa: 1 },
    { nombre: 'Nao', apellido: 'Sued', mesa: 1 },
    { nombre: 'Valen', apellido: 'Fuks', mesa: 1 },
    { nombre: 'Male', apellido: 'Nisenbaum', mesa: 1 },
    { nombre: 'Dana', apellido: 'Kaleka', mesa: 1 },

    // Mesa 3
    { nombre: 'Marce', apellido: 'Imach', mesa: 3 },
    { nombre: 'Noemí', apellido: 'Imach', mesa: 3 },
    { nombre: 'Judy', apellido: 'Imach', mesa: 3 },
    { nombre: 'Emi', apellido: 'Imach', mesa: 3 },
    { nombre: 'Roxana', apellido: 'Waisberg', mesa: 3 },
    { nombre: 'Priscila', apellido: 'Cuan Imach', mesa: 3 },
    { nombre: 'Vicky', apellido: 'Imach', mesa: 3 },
    { nombre: 'Miri', apellido: 'Imach', mesa: 3 },
    { nombre: 'Ari', apellido: 'Segalis', mesa: 3 },
    { nombre: 'Flor', apellido: 'Segalis', mesa: 3 },

    // Mesa 5
    { nombre: 'Karina', apellido: 'Auday', mesa: 5 },
    { nombre: 'Shirel', apellido: 'Krawiec', mesa: 5 },
    { nombre: 'Esther', apellido: 'Auday', mesa: 5 },
    { nombre: 'Esty', apellido: 'Auday', mesa: 5 },
    { nombre: 'Vanina', apellido: 'Auday', mesa: 5 },
    { nombre: 'Rosalinda', apellido: 'Salama', mesa: 5 },
    { nombre: 'Magali', apellido: 'Rensin', mesa: 5 },
    { nombre: 'Ingrid', apellido: 'Bornztein', mesa: 5 },
    { nombre: 'Daniela', apellido: 'Drucaroff', mesa: 5 },

    // Mesa 7
    { nombre: 'Orly', apellido: 'Amiga Melisa', mesa: 7 },
    { nombre: 'Shirel', apellido: 'Cohen Sabban', mesa: 7 },
    { nombre: 'Shirel', apellido: '', mesa: 7 },
    { nombre: 'Shifri', apellido: '', mesa: 7 },
    { nombre: 'Sara', apellido: '', mesa: 7 },
    { nombre: 'Mijal', apellido: '', mesa: 7 },
    { nombre: 'Yael', apellido: 'Imach', mesa: 7 },
    { nombre: 'Mijal', apellido: 'Imach', mesa: 7 },
    { nombre: 'Nati', apellido: 'Saal', mesa: 7 },
    { nombre: 'Mica', apellido: 'Paredes', mesa: 7 },
    { nombre: 'Nicole', apellido: 'Saal', mesa: 7 },

    // Mesa 9
    { nombre: 'Lara', apellido: 'Ajami', mesa: 9 },
    { nombre: 'Vanina', apellido: 'Cassin', mesa: 9 },
    { nombre: 'Mariela', apellido: 'Cohen Imach', mesa: 9 },
    { nombre: 'Claudia', apellido: 'Mesri', mesa: 9 },
    { nombre: 'Elisa', apellido: 'Daye', mesa: 9 },
    { nombre: 'Valeria', apellido: 'Museyri', mesa: 9 },
    { nombre: 'Romi', apellido: 'Salem', mesa: 9 },
    { nombre: 'Romi', apellido: 'Atar', mesa: 9 },
    { nombre: 'Caro', apellido: 'Safdie', mesa: 9 },

    // Mesa 11
    { nombre: 'Kari', apellido: 'Yemal', mesa: 11 },
    { nombre: 'Jaz', apellido: 'Stolovisky', mesa: 11 },
    { nombre: 'Romi', apellido: 'Maleh', mesa: 11 },
    { nombre: 'Nati', apellido: 'Entebi', mesa: 11 },
    { nombre: 'Daniela', apellido: 'Entebi', mesa: 11 },
    { nombre: 'Ruti', apellido: 'Juacin', mesa: 11 },
    { nombre: 'Lore', apellido: 'Kibudi', mesa: 11 },

    // Mesa 4 (Varones)
    { nombre: 'Guille', apellido: 'Imach', mesa: 4 },
    { nombre: 'Ricky', apellido: 'Saal', mesa: 4 },
    { nombre: 'Diego', apellido: 'Segalis', mesa: 4 },
    { nombre: 'Kevin', apellido: 'Imach', mesa: 4 },
    { nombre: 'Ari', apellido: 'Imach', mesa: 4 },
    { nombre: 'Mati', apellido: 'Hamra', mesa: 4 },
    { nombre: 'Dani', apellido: 'Saal', mesa: 4 },
    { nombre: 'Ezi', apellido: 'Cuan', mesa: 4 },
    { nombre: 'Ari', apellido: 'Saal', mesa: 4 },
    { nombre: 'Andy', apellido: 'Cuan', mesa: 4 },

      // Mesa 10 (Varones)

      { nombre: 'Diego', apellido: 'Ajami', mesa: 10 },
      { nombre: 'Marcelo', apellido: 'Cassin', mesa: 10 },
      { nombre: 'Fernando', apellido: 'Atar', mesa: 10 },
      { nombre: 'Ariel', apellido: 'Cohen Imach', mesa: 10 },
      { nombre: 'Beto', apellido: 'Mesri', mesa: 10 },
      { nombre: 'Ale', apellido: 'Daye', mesa: 10 },
      { nombre: 'Dani', apellido: 'Museyri', mesa: 10 },
      { nombre: 'Kaleka', apellido: '', mesa: 10 },
      { nombre: 'Gaby', apellido: 'Hallak', mesa: 10 },

      // Mesa 2 (Varones)  agrega 7 mejores amigos

      { nombre: 'David', apellido: 'Entebi', mesa: 2 },
      { nombre: 'Mati', apellido: 'Milstein', mesa: 2 },
      { nombre: 'Nacho', apellido: 'Segalis', mesa: 2 },
      { nombre: 'Matias', apellido: 'Auday', mesa: 2 },
      { nombre: 'Elias', apellido: 'Auday', mesa: 2 },
      { nombre: 'Tobias', apellido: 'Auday', mesa: 2 },
      { nombre: 'David', apellido: 'Krawiec', mesa: 2 }

     //mesa 6 , 8 y 12 a disposicion de los amigos
    
      
];



// Función para generar la tabla de mesas
function generarTablaMesas() {
    // Ordenar las mesas alfabéticamente por apellido y luego por nombre
    mesas.sort((a, b) => {
        if (a.apellido.toLowerCase() < b.apellido.toLowerCase()) return -1;
        if (a.apellido.toLowerCase() > b.apellido.toLowerCase()) return 1;
        return a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1 : 1;
    });

    const tablaMesas = document.getElementById('tablaMesas');
    // Limpiar la tabla antes de agregar los datos
    tablaMesas.innerHTML = '';

    mesas.forEach(mesa => {
        const fila = document.createElement('tr');

        const celdaApellido = document.createElement('td');
        celdaApellido.textContent = mesa.apellido;
        fila.appendChild(celdaApellido);

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = mesa.nombre;
        fila.appendChild(celdaNombre);

        const celdaMesa = document.createElement('td');
        celdaMesa.textContent = mesa.mesa;
        fila.appendChild(celdaMesa);

        tablaMesas.appendChild(fila);
    });
}

// Función de búsqueda para la página index.html
document.getElementById('mesaForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreInput = document.getElementById('nombre').value.toLowerCase().trim();
    const apellidoInput = document.getElementById('apellido').value.toLowerCase().trim();

    // Validar si al menos uno de los campos está completo
    if (!nombreInput && !apellidoInput) {
        document.getElementById('resultado').textContent = 'Por favor, complete al menos uno de los campos (nombre o apellido).';
        return;
    }

    // Filtrar las mesas por nombre, apellido o nombre completo
    const resultados = mesas.filter(mesa => {
        // Crear la cadena concatenada de nombre y apellido
        const nombreCompleto = (mesa.nombre + " " + mesa.apellido).toLowerCase();

        // Verificar si el nombre, apellido o nombre completo coincide con la entrada
        if (nombreInput && apellidoInput) {
            // Buscar por nombre y apellido concatenados
            return nombreCompleto === (nombreInput + " " + apellidoInput);
        } else {
            // Buscar por nombre o apellido por separado
            return (nombreInput && mesa.nombre.toLowerCase() === nombreInput) ||
                (apellidoInput && mesa.apellido.toLowerCase() === apellidoInput);
        }
    });

    const resultadoDiv = document.getElementById('resultado');

    if (resultados.length > 0) {
        // Mostrar los resultados encontrados
        resultadoDiv.innerHTML = resultados.map(mesa =>
            `<p>${mesa.nombre} ${mesa.apellido} - Mesa ${mesa.mesa}</p>`
        ).join('');
    } else {
        // Si no se encontró ningún resultado
        resultadoDiv.textContent = 'Por favor Consultar a los Novios';
    }
});
window.addEventListener('DOMContentLoaded', function () {
    generarTablaMesas();
});
