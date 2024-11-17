// Array de mesas

const mesas = [

    { apellido: "Auday", nombre: "Ester", mesa: 1 },
    { apellido: "Benmaman", nombre: "Esther", mesa: 1 },
    { apellido: "Delfina", nombre: "Mazer", mesa: 1 },
    { apellido: "Hilu", nombre: "Vanina", mesa: 1 },
    { apellido: "Krawiec", nombre: "Shirel", mesa: 1 },
    { apellido: "Mazer", nombre: "Claudia", mesa: 1 },
    { apellido: "Nagelberg", nombre: "Rosita", mesa: 1 },
    { apellido: "Salama", nombre: "Rosalinda", mesa: 1 },
    { apellido: "Tati", nombre: "Mazer", mesa: 1 },
    { apellido: "Abadi", nombre: "Victor", mesa: 2 },
    { apellido: "Auday", nombre: "Chomi", mesa: 2 },
    { apellido: "Auday", nombre: "Tobias", mesa: 2 },
    { apellido: "Chamha", nombre: "Gaby (Rab)", mesa: 2 },
    { apellido: "Entebi", nombre: "Raul", mesa: 2 },
    { apellido: "Kaufman", nombre: "Richard", mesa: 2 },
    { apellido: "Kibudi", nombre: "Alberto", mesa: 2 },
    { apellido: "Krawiec", nombre: "David", mesa: 2 },
    { apellido: "Krawiec", nombre: "Mariano", mesa: 2 },
    { apellido: "Menayed", nombre: "Marcelo", mesa: 2 },
    { apellido: "Neuaj", nombre: "Uriel (Rab)", mesa: 2 },
    { apellido: "Soae", nombre: "Iedidia (Rab)", mesa: 2 },
    { apellido: "Fallas", nombre: "Yael", mesa: 3 },
    { apellido: "Hambra", nombre: "Naty", mesa: 3 },
    { apellido: "Imach", nombre: "Delfina", mesa: 3 },
    { apellido: "Imach", nombre: "Emi", mesa: 3 },
    { apellido: "Imach", nombre: "Judy", mesa: 3 },
    { apellido: "Imach", nombre: "Mica", mesa: 3 },
    { apellido: "Imach", nombre: "Noemi", mesa: 3 },
    { apellido: "Maleh", nombre: "Mijal", mesa: 3 },
    { apellido: "Saal", nombre: "Nicole", mesa: 3 },
    { apellido: "Chami", nombre: "Shaul", mesa: 4 },
    { apellido: "Cuan", nombre: "Ezequiel", mesa: 4 },
    { apellido: "Entebi", nombre: "Moshi", mesa: 4 },
    { apellido: "Entebi", nombre: "Uri", mesa: 4 },
    { apellido: "Entebii", nombre: "David", mesa: 4 },
    { apellido: "Maleh", nombre: "Víctor", mesa: 4 },
    { apellido: "Milstein", nombre: "Matías", mesa: 4 },
    { apellido: "Runiski", nombre: "Julián", mesa: 4 },
    { apellido: "Saal", nombre: "Ari", mesa: 4 },
    { apellido: "Saed", nombre: "Ezequiel", mesa: 4 },
    { apellido: "Cohen Imach", nombre: "Maian", mesa: 5 },
    { apellido: "Cuan", nombre: "Priscila", mesa: 5 },
    { apellido: "Fuks", nombre: "Valentina", mesa: 5 },
    { apellido: "Imach", nombre: "Miriam", mesa: 5 },
    { apellido: "Imach", nombre: "Victoria", mesa: 5 },
    { apellido: "Iskandarani", nombre: "Chantal", mesa: 5 },
    { apellido: "Nisembaum", nombre: "Malena", mesa: 5 },
    { apellido: "Segalis", nombre: "Ariana", mesa: 5 },
    { apellido: "Segalis", nombre: "Florencia", mesa: 5 },
    { apellido: "Sued", nombre: "Naomi", mesa: 5 },
    { apellido: "Fallas", nombre: "Elias", mesa: 6 },
    { apellido: "Hambra", nombre: "Matías", mesa: 6 },
    { apellido: "Imach", nombre: "Ariel", mesa: 6 },
    { apellido: "Imach", nombre: "Axel", mesa: 6 },
    { apellido: "Imach", nombre: "Guille", mesa: 6 },
    { apellido: "Saal", nombre: "Dany", mesa: 6 },
    { apellido: "Saal", nombre: "Ricky", mesa: 6 },
    { apellido: "Segalis", nombre: "Diego", mesa: 6 },
    { apellido: "Boim", nombre: "Tamar", mesa: 7 },
    { apellido: "Cohen Saban", nombre: "Shirel", mesa: 7 },
    { apellido: "Fridrij", nombre: "Orly", mesa: 7 },
    { apellido: "Levy", nombre: "Sarah", mesa: 7 },
    { apellido: "Levy", nombre: "Yael", mesa: 7 },
    { apellido: "Massre", nombre: "Gloria", mesa: 7 },
    { apellido: "Nagar", nombre: "Juliette", mesa: 7 },
    { apellido: "Saadia", nombre: "Sarah", mesa: 7 },
    { apellido: "Wolff", nombre: "Luana", mesa: 7 },
    { apellido: "Zonana", nombre: "Esther", mesa: 7 },
    { apellido: "Cabizon", nombre: "Dan", mesa: 8 },
    { apellido: "Chisty", nombre: "Sebi", mesa: 8 },
    { apellido: "Hodara", nombre: "Ioni", mesa: 8 },
    { apellido: "Kibudi", nombre: "Ado", mesa: 8 },
    { apellido: "Kibudi", nombre: "David", mesa: 8 },
    { apellido: "Kibudi", nombre: "Zaki", mesa: 8 },
    { apellido: "Lem", nombre: "Mati", mesa: 8 },
    { apellido: "Maleh", nombre: "Abru", mesa: 8 },
    { apellido: "Saieg", nombre: "Abi", mesa: 8 },
    { apellido: "Salem", nombre: "Eze", mesa: 8 },
    { apellido: "Shamha", nombre: "Gaby", mesa: 8 },
    { apellido: "Suery", nombre: "Netu", mesa: 8 },
    { apellido: "Alfie", nombre: "Lili", mesa: 9 },
    { apellido: "Blainstein", nombre: "Laura", mesa: 9 },
    { apellido: "Camjalli", nombre: "Ani", mesa: 9 },
    { apellido: "Dahhab", nombre: "Betina", mesa: 9 },
    { apellido: "Fuks", nombre: "Yamila", mesa: 9 },
    { apellido: "Hasbani", nombre: "Karina", mesa: 9 },
    { apellido: "Joaquin", nombre: "Amelia", mesa: 9 },
    { apellido: "Maleh", nombre: "Romina", mesa: 9 },
    { apellido: "Saal", nombre: "Daniela", mesa: 9 },
    { apellido: "Sued", nombre: "Lorena", mesa: 9 },
    { apellido: "Sued", nombre: "Roxana", mesa: 9 },
    { apellido: "Zeituni", nombre: "Silvina", mesa: 9 },
    { apellido: "Baredes", nombre: "Demian", mesa: 10 },
    { apellido: "Chaio", nombre: "Maxi", mesa: 10 },
    { apellido: "Cobe", nombre: "Meir", mesa: 10 },
    { apellido: "Hambra", nombre: "Josi", mesa: 10 },
    { apellido: "Levy", nombre: "Dan", mesa: 10 },
    { apellido: "Michanie", nombre: "Matías", mesa: 10 },
    { apellido: "Paredes", nombre: "Martin", mesa: 10 },
    { apellido: "Roth", nombre: "David", mesa: 10 },
    { apellido: "Sadrinas", nombre: "Moshi", mesa: 10 },
    { apellido: "Segalis", nombre: "Nacho", mesa: 10 },
    { apellido: "Umansky", nombre: "Ilan", mesa: 10 },
    { apellido: "Zeitune", nombre: "Ioel", mesa: 10 },
    { apellido: "Attar", nombre: "Romina", mesa: 11 },
    { apellido: "Cassin", nombre: "Vanina", mesa: 11 },
    { apellido: "Cohen Imach", nombre: "Mariela", mesa: 11 },
    { apellido: "Daye", nombre: "Elisa", mesa: 11 },
    { apellido: "Hallak", nombre: "Karina", mesa: 11 },
    { apellido: "Mesri", nombre: "Claudia", mesa: 11 },
    { apellido: "Museiry", nombre: "Valeria", mesa: 11 },
    { apellido: "Saban", nombre: "Dalia", mesa: 11 },
    { apellido: "Salem", nombre: "Romina", mesa: 11 },
    { apellido: "Shejman", nombre: "Giselle", mesa: 11 },
    { apellido: "Siddig", nombre: "Elena", mesa: 11 },
    { apellido: "Zayat", nombre: "Sarita", mesa: 11 },
    { apellido: "Chehebar", nombre: "Josi", mesa: 12 },
    { apellido: "Ermel", nombre: "Gabi", mesa: 12 },
    { apellido: "Joli", nombre: "Dan", mesa: 12 },
    { apellido: "Levy", nombre: "Eitan", mesa: 12 },
    { apellido: "Moncarz", nombre: "Jaim", mesa: 12 },
    { apellido: "Ohana", nombre: "Ari", mesa: 12 },
    { apellido: "Ohana", nombre: "Iair", mesa: 12 },
    { apellido: "Sacca", nombre: "Iaacov", mesa: 12 },
    { apellido: "Salem", nombre: "Brian", mesa: 12 },
    { apellido: "Salem", nombre: "Nico", mesa: 12 },
    { apellido: "Salem", nombre: "Yoshua", mesa: 12 },
    { apellido: "Yemal", nombre: "Kiko", mesa: 12 },
    { apellido: "Allami", nombre: "Shantal", mesa: 13 },
    { apellido: "Atar", nombre: "Maia", mesa: 13 },
    { apellido: "Atar", nombre: "Sharon", mesa: 13 },
    { apellido: "Brukel", nombre: "Uli", mesa: 13 },
    { apellido: "Hakim", nombre: "Melu", mesa: 13 },
    { apellido: "Levy", nombre: "Jaya", mesa: 13 },
    { apellido: "Levy", nombre: "Mia", mesa: 13 },
    { apellido: "Melman", nombre: "Juli", mesa: 13 },
    { apellido: "Salem", nombre: "Delfi", mesa: 13 },
    { apellido: "Sued", nombre: "Maia", mesa: 13 },
    { apellido: "Yemal", nombre: "Raqui", mesa: 13 },
    { apellido: "Balosen", nombre: "José", mesa: 14 },
    { apellido: "Cassin", nombre: "Marcelo", mesa: 14 },
    { apellido: "Daab", nombre: "Ruben", mesa: 14 },
    { apellido: "Halak", nombre: "Beto", mesa: 14 },
    { apellido: "Halak", nombre: "Gaby", mesa: 14 },
    { apellido: "Joli", nombre: "Claudio", mesa: 14 },
    { apellido: "Saal", nombre: "Javier", mesa: 14 },
    { apellido: "Saban", nombre: "Ale", mesa: 14 },
    { apellido: "Said", nombre: "Julio", mesa: 14 },
    { apellido: "Salem", nombre: "Diego Emilio", mesa: 14 },
    { apellido: "Siddig", nombre: "Adrian", mesa: 14 },
    { apellido: "Zayat", nombre: "Gustavo", mesa: 14 },
    { apellido: "Buya", nombre: "Ioji", mesa: 15 },
    { apellido: "Camjali", nombre: "Cindy", mesa: 15 },
    { apellido: "Camjali", nombre: "Melu", mesa: 15 },
    { apellido: "Chame", nombre: "Yael", mesa: 15 },
    { apellido: "Cohen", nombre: "Juli", mesa: 15 },
    { apellido: "Daye", nombre: "Sofía", mesa: 15 },
    { apellido: "Jasin", nombre: "Delfi", mesa: 15 },
    { apellido: "Laniado", nombre: "Shirel", mesa: 15 },
    { apellido: "Massri", nombre: "Delfi", mesa: 15 },
    { apellido: "Salem", nombre: "Sarah", mesa: 15 },
    { apellido: "Ulaner", nombre: "Yael", mesa: 15 },
    { apellido: "Zaed", nombre: "Debby", mesa: 15 },
    { apellido: "Cohen Imach", nombre: "Ariel", mesa: 16 },
    { apellido: "Daye", nombre: "Alejandro", mesa: 16 },
    { apellido: "Fucks", nombre: "Cesar", mesa: 16 },
    { apellido: "Gutiérrez", nombre: "Javier", mesa: 16 },
    { apellido: "Hasbani", nombre: "Gaston", mesa: 16 },
    { apellido: "Joaquín", nombre: "Sergio", mesa: 16 },
    { apellido: "Klimoski", nombre: "Ezequiel", mesa: 16 },
    { apellido: "Mesri", nombre: "Beto", mesa: 16 },
    { apellido: "Museiry", nombre: "Dang", mesa: 16 },
    { apellido: "Penjasoff", nombre: "Rami", mesa: 16 },
    { apellido: "Roth", nombre: "Martín", mesa: 16 },
    { apellido: "Schejtman", nombre: "Martin", mesa: 16 },
    { apellido: "Cohen", nombre: "Lindy", mesa: 17 },
    { apellido: "Dayan", nombre: "Marina", mesa: 17 },
    { apellido: "Dayan", nombre: "Silvia", mesa: 17 },
    { apellido: "Hodara", nombre: "Mijal", mesa: 17 },
    { apellido: "Juacin", nombre: "Rut", mesa: 17 },
    { apellido: "Kibudi", nombre: "Lorena", mesa: 17 },
    { apellido: "Neuaj", nombre: "Nomi", mesa: 17 },
    { apellido: "Abadi", nombre: "Abraham", mesa: 18 },
    { apellido: "Cataife", nombre: "Iaacob", mesa: 18 },
    { apellido: "Entebi", nombre: "David", mesa: 18 },
    { apellido: "Entebi", nombre: "Jimmy", mesa: 18 },
    { apellido: "Entebi", nombre: "Jony", mesa: 18 },
    { apellido: "Entebi", nombre: "Zaqui", mesa: 18 },
    { apellido: "Fail", nombre: "Netu", mesa: 18 },
    { apellido: "Falac", nombre: "Zaki", mesa: 18 },
    { apellido: "Insem", nombre: "David", mesa: 18 },
    { apellido: "Mauas", nombre: "Dan", mesa: 18 },
    { apellido: "Mauas", nombre: "Dani", mesa: 18 },
    { apellido: "Sayat", nombre: "Eze", mesa: 18 },
    { apellido: "Suerikly", nombre: "Mija", mesa: 18 },
    { apellido: "Betesh", nombre: "Mary", mesa: 19 },
    { apellido: "Entebi", nombre: "Daniela", mesa: 19 },
    { apellido: "Entebi", nombre: "July", mesa: 19 },
    { apellido: "Entebi", nombre: "Naty", mesa: 19 },
    { apellido: "Galante", nombre: "Marcela", mesa: 19 },
    { apellido: "Joly", nombre: "Ali", mesa: 19 },
    { apellido: "Roth", nombre: "Vero", mesa: 19 },
    { apellido: "Saed", nombre: "Leah", mesa: 19 },
    { apellido: "Said", nombre: "Marina", mesa: 19 },
    { apellido: "Salem", nombre: "Caro", mesa: 19 },
    { apellido: "Seruya", nombre: "Frida", mesa: 19 },
    { apellido: "Abramovichi", nombre: "Baruj", mesa: 20 },
    { apellido: "Antebi", nombre: "Natan", mesa: 20 },
    { apellido: "Auday", nombre: "Matias", mesa: 20 },
    { apellido: "Chueke", nombre: "Iaacob", mesa: 20 },
    { apellido: "Cohen Saban", nombre: "Ittay", mesa: 20 },
    { apellido: "Elabos", nombre: "Roman", mesa: 20 },
    { apellido: "Faham", nombre: "David", mesa: 20 },
    { apellido: "Fail", nombre: "Ishay", mesa: 20 },
    { apellido: "Jabbaz", nombre: "Gaby", mesa: 20 },
    { apellido: "Sambra", nombre: "Iosi", mesa: 20 },
    { apellido: "Sisro", nombre: "Itzi", mesa: 20 },
    { apellido: "Srugo", nombre: "Fede", mesa: 20 },
    { apellido: "Sutton", nombre: "David", mesa: 20 },
    { apellido: "Babor", nombre: "Ester", mesa: 21 },
    { apellido: "Busso", nombre: "Sofía", mesa: 21 },
    { apellido: "Cohen", nombre: "Sofi", mesa: 21 },
    { apellido: "Entebi", nombre: "Sarah", mesa: 21 },
    { apellido: "Fallas", nombre: "Nao", mesa: 21 },
    { apellido: "Faur", nombre: "Mijal", mesa: 21 },
    { apellido: "Iskandarani", nombre: "Shifri", mesa: 21 },
    { apellido: "Kaleka", nombre: "Dana", mesa: 21 },
    { apellido: "Katche", nombre: "Abi", mesa: 21 },
    { apellido: "Levy", nombre: "Lara", mesa: 21 },
    { apellido: "Mizrahi", nombre: "Galia", mesa: 21 },
    { apellido: "Navia", nombre: "Valen", mesa: 21 },
    { apellido: "Said", nombre: "Magui", mesa: 21 },
    { apellido: "Auday", nombre: "Elias", mesa: 22 },
    { apellido: "Chehebar", nombre: "Abru", mesa: 22 },
    { apellido: "Goldstein", nombre: "Tomi", mesa: 22 },
    { apellido: "Hanono", nombre: "Ilan", mesa: 22 },
    { apellido: "Hazan", nombre: "David", mesa: 22 },
    { apellido: "Jarzabek", nombre: "Ioni", mesa: 22 },
    { apellido: "Juaya", nombre: "Uri", mesa: 22 },
    { apellido: "Mandalaui", nombre: "Elio", mesa: 22 },
    { apellido: "Menayed", nombre: "Igal", mesa: 22 },
    { apellido: "Mizrahi", nombre: "Gabi", mesa: 22 },
    { apellido: "Saiegh", nombre: "Moshi", mesa: 22 },
    { apellido: "Salem", nombre: "Ilan", mesa: 22 },
    { apellido: "Silicaro", nombre: "David", mesa: 22 },
    { apellido: "Soirejman", nombre: "Dan", mesa: 22 },
    { apellido: "Abadi", nombre: "Karol", mesa: 23 },
    { apellido: "Bornsztein", nombre: "Ingrid", mesa: 23 },
    { apellido: "Chaia", nombre: "Ruti", mesa: 23 },
    { apellido: "Churba", nombre: "Mariela", mesa: 23 },
    { apellido: "Craien", nombre: "Flor", mesa: 23 },
    { apellido: "Drucaroff", nombre: "Daniela", mesa: 23 },
    { apellido: "Leibovich", nombre: "Adriana", mesa: 23 },
    { apellido: "Leibovich", nombre: "Pamela", mesa: 23 },
    { apellido: "Rensin", nombre: "Magali", mesa: 23 },
    { apellido: "Acks", nombre: "Eliel", mesa: 24 },
    { apellido: "Buenos", nombre: "Natan", mesa: 24 },
    { apellido: "Chloca", nombre: "Gaby", mesa: 24 },
    { apellido: "Cohen", nombre: "Yaco", mesa: 24 },
    { apellido: "Douer", nombre: "Natan", mesa: 24 },
    { apellido: "Melamed", nombre: "Ieji", mesa: 24 },
    { apellido: "Menayed", nombre: "Itamar", mesa: 24 },
    { apellido: "Menayed", nombre: "Yoel", mesa: 24 },
    { apellido: "Salem", nombre: "Moshi", mesa: 24 },
    { apellido: "Soultani", nombre: "Kevin", mesa: 24 },
    { apellido: "Sutton", nombre: "Salo", mesa: 24 },
    { apellido: "Tarica", nombre: "Mati", mesa: 24 },
    { apellido: "Chaia", nombre: "Alan", mesa: 26 },
    { apellido: "Chaia", nombre: "Ariel", mesa: 26 },
    { apellido: "Chaia", nombre: "Quique", mesa: 26 },
    { apellido: "Cheber", nombre: "Bentzion", mesa: 26 },
    { apellido: "Klin", nombre: "Fede", mesa: 26 },
    { apellido: "Leibovich", nombre: "Andy", mesa: 26 },
    { apellido: "Leibovich", nombre: "Hugo", mesa: 26 },
    { apellido: "Leibovich", nombre: "Martin", mesa: 26 },
    { apellido: "Lloroff", nombre: "Mishael", mesa: 26 },
    { apellido: "Sanado", nombre: "Ilan", mesa: 26 },
    { apellido: "Wainstein", nombre: "Diego", mesa: 26 },
    { apellido: "Azzan", nombre: "Uriel", mesa: 28 },
    { apellido: "Dorra", nombre: "Brian", mesa: 28 },
    { apellido: "Fraiman", nombre: "Eitan", mesa: 28 },
    { apellido: "Frydman", nombre: "Agus", mesa: 28 },
    { apellido: "Hilu", nombre: "David", mesa: 28 },
    { apellido: "Kan", nombre: "Hilel", mesa: 28 },
    { apellido: "Laniado", nombre: "Kevin", mesa: 28 },
    { apellido: "Levi", nombre: "Eli", mesa: 28 },
    { apellido: "Saal", nombre: "Tomas", mesa: 28 },
    { apellido: "Saied", nombre: "Shimon", mesa: 28 },
    { apellido: "Zaed", nombre: "Dani", mesa: 28 },
    { apellido: "Buenos", nombre: "Aaron", mesa: 30 },
    { apellido: "Chemi", nombre: "Jair", mesa: 30 },
    { apellido: "Duek", nombre: "Eli", mesa: 30 },
    { apellido: "Iskandarani", nombre: "David", mesa: 30 },
    { apellido: "Juaya", nombre: "Hilel", mesa: 30 },
    { apellido: "Jumberg", nombre: "Ioni", mesa: 30 },
    { apellido: "Kandin", nombre: "Dani", mesa: 30 },
    { apellido: "Levy", nombre: "Shimon", mesa: 30 },
    { apellido: "Mizrahi", nombre: "Shelo", mesa: 30 },
    { apellido: "Selem", nombre: "Leo", mesa: 30 },
    { apellido: "Serur", nombre: "Nissim", mesa: 30 },
    { apellido: "Skeff", nombre: "David", mesa: 30 }
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
        resultadoDiv.textContent = 'Por favor Consultar con personal de organización';
    }
});
window.addEventListener('DOMContentLoaded', function () {
    generarTablaMesas();
});
