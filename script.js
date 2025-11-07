document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar envío por defecto
    });

    // ==== Configuración del contador regresivo ====
    const eventDate = new Date('2025-11-15T20:00:00');

    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            document.getElementById('countdown-timer').innerHTML = 'El evento ha terminado.';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// ==== Lista de invitados y pases ====
const maxInvitadosPorAsistente = {
    'Milka Leyva': 2,
    'Alma Perroni Palma': 4,
    'Erika Torres Perroni': 3,
    'Carmela Perroni Palma': 2,
    'Berenice Torres Perroni': 4,
    'Jose Eduardo Torres Perroni': 4,
    'Dora Perroni Palma': 4,
    'David Perroni Palma': 2,
    'Dolores Perroni Palma': 2,
    'Miguel Angel Leyva Perroni': 5,
    'Helrich Darve Cristopher Vazquez': 3,
    'Cruz Tirado Lopez': 4,
    'Javier Torres': 4,
    'Juan Alberto Peña': 2,
    'Génesis Aquino Cruz': 2,
    'Teresa Santos': 4,
    'Juana Mayti': 2,
    'Jose Carlos Mendoza Mayti': 1,
    'Vicente Mendoza Mayti': 4,
    'Olga Gonzalez Marquez': 2,
    'Sra. Alma': 2,
    'Luis Zarate': 2,
    'Fabian Bartolo': 2,
    'Gerardo Santos Morales': 2,
    'Mario Uscanga': 4,
    'Martha Carrillo Torres': 1,
    'Flor Areli Gonzalez Carrillo': 2,
    'Elisea Carrillo Torres': 2,
    'Maria del Consuelo Carrillo Torres': 2,
    'Anahi Gomez Carrillo': 1,
    'Flor de Maria Gomez Carrillo': 2,
    'Yazmin Santos Carrillo': 3,
    'Gerardo Santos Carrillo': 2,
    'Abigail Carrillo Moreno': 5,
    'Gabriela Carrillo Torres': 4,
    'Victor Carrillo Torres': 2,
    'Zunny Torres Santos': 2,
    'Andres Carrillo Torres': 2,
    'Pablo Cesar Carrillo Santos': 2,
    'Miguel Carballo': 4,
    'Heriberto Bartolo': 5,
    'Erika de la Fuente': 4,
    'Guadalupe Carrillo': 2,
    'Claudia Aquino': 3,
    'Esmeralda Gomez': 4,
    'Pablo Ordaz': 2,
    'Claudia Sanchez': 8,
    'Mayra Alor': 3,
    'Sr. Salvador': 2,
    'Pedro Alpuche': 3,
    'Katia': 1,
    'Nizza': 1,
    'Edward': 1,
    'Kristell': 1,
    'Joselyn': 2,
    'Amy': 1,
    'Emmanuel': 1,
    'Denisse': 1,
    'Katalina': 1,
    'Ashley': 1,
    'Ana': 1,
    'Karime': 1,
    'Tavo': 1,
    'Isaac': 1,
    'Silvana': 1,
    'Naomi Zuricanday': 1,
    'Naomi Camila': 1,
    'Sharon': 1,
    'Yani': 1,
    'Sara': 1,
    'Daniela': 1,
    'Camila': 1,
    'Kennet': 1,
    'Vanessa': 2,
    'Kayla': 1,
    'Vanessa Toledo': 1,
    'Vanessa Domínguez': 1,
    'Damaris': 1,
    'Elvis Ventura': 2,
    'Anabel Ortiz Torres': 3,
    'Rosario Ortiz Torres': 4,
    'Dulce Ortiz Torres': 3,
    'Clara Campos Torres': 2,
    'Maria Ortiz Torres': 2,
    'Laura Campos Torres': 2,
    'Diego Rafael Hernandez': 2,
    'Jared': 3,
    'Nancy Vicencio': 3,
    'Abigail Muñoz Marquez': 2,
    'Jose Luis Perez Salinas': 2,
    'Rosendo Sánchez': 5,
    'Jacinto Sánchez': 4,
    'Adolfo de la Cruz': 1,
    'Deysi': 3,
    'Luciano Carrera': 2,
    'Elizabeth  Carrera': 2,
    'Carlos Carrera':2,
    'Diomar Gomez': 2,
    'Victor Serrano': 2,
    'Rosendo Sánchez': 5,
    'Jacinto Sánchez': 4,
    'Adolfo de la Cruz': 1,
    'Deysi': 3,
    'Luciano Carrera': 2,
    'Elizabeth  Carrera': 2,
    'Carlos Carrera':2,
    'Diomar Gomez': 2,
    'Victor Serrano': 2,
    'Joselyn Bravo': 2,
    'Lourdes Cabrera': 2,
};

// ==== Mostrar campo de invitados según asistencia ====
function mostrarInvitados(asistira) {
    const invitados = document.getElementById('invitados');
    const nombreSeleccionado = document.getElementById('nombre').value.trim();
    const maxInvitados = maxInvitadosPorAsistente[nombreSeleccionado] || 0;
    const inputInvitados = document.getElementById('num_invitados');
    const mensajePase = document.getElementById('mensajePase');
    const botonConfirmar = document.getElementById('confirmar-btn');
    
    if (asistira) {
        invitados.classList.remove('hidden');
        inputInvitados.max = maxInvitados;
        inputInvitados.placeholder = `Máximo ${maxInvitados} invitados`;
        mensajePase.textContent = `Tu pase es para ${maxInvitados} persona${maxInvitados > 1 ? 's' : ''}.`;
        botonConfirmar.classList.remove('hidden');
    } else {
        invitados.classList.add('hidden');
        inputInvitados.value = '';
        mensajePase.textContent = '';
        botonConfirmar.classList.remove('hidden');
    }
}

// ==== Enviar confirmación por WhatsApp ====
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const asistira = document.getElementById('invitados').classList.contains('hidden') ? "No" : "Sí";
    const numInvitados = document.getElementById('num_invitados').value || 0;

    if (nombre === "" || (asistira === "Sí" && numInvitados <= 0)) {
        alert("Por favor, completa toda la información antes de confirmar.");
        return;
    }

    const mensaje = `Hola, soy ${nombre}. ${asistira === "Sí" ? `Asistiremos ${numInvitados} persona(s).` : `No podré asistir.`}`;
    const numero  = "+529211172337";
    const url     = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}

// ==== Reproductor de música ====
const playBtn = document.getElementById('play-btn');
const music = document.getElementById('background-music');

if (playBtn && music) {
    playBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            music.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
}

// ==== Autocompletado de invitados + control ====
let ultimoNombreValido = '';

function buscarInvitadoAuto(valor) {
    const input = valor.toLowerCase().trim();
    const datalist = document.getElementById('sugerencias');
    const resultado = document.getElementById('resultado-busqueda');
    const opciones = document.getElementById('opciones');

    datalist.innerHTML = ''; // limpiar opciones previas

    if (input.length < 2) {
        resultado.textContent = '';
        resultado.classList.add('hidden');
        opciones.classList.add('hidden');
        return;
    }

    const nombres = Object.keys(maxInvitadosPorAsistente);
    const coincidencias = nombres.filter(n => n.toLowerCase().includes(input));

    if (coincidencias.length > 0) {
        coincidencias.forEach(nombre => {
            const option = document.createElement('option');
            option.value = nombre;
            datalist.appendChild(option);
        });
    }

    const nombreValido = nombres.find(n => n.toLowerCase() === input);

    if (nombreValido) {
        // Solo reiniciar si se cambió de invitado
        if (nombreValido !== ultimoNombreValido) {
            reiniciarFormulario();
            ultimoNombreValido = nombreValido;
        }

        resultado.textContent = "Invitado reconocido ✔️";
        resultado.classList.remove('hidden');
        opciones.classList.remove('hidden');
    } else {
        resultado.textContent = "Escribe tu nombre completo para confirmar";
        resultado.classList.remove('hidden');
        opciones.classList.add('hidden');
        ultimoNombreValido = '';
    }
}

// ==== Reiniciar formulario al cambiar de invitado ====
function reiniciarFormulario() {
    const opciones = document.getElementById('opciones');
    const invitados = document.getElementById('invitados');
    const inputInvitados = document.getElementById('num_invitados');
    const mensajePase = document.getElementById('mensajePase');
    const botonConfirmar = document.getElementById('confirmar-btn');

    opciones.classList.add('hidden');
    invitados.classList.add('hidden');
    botonConfirmar.classList.add('hidden');
    mensajePase.textContent = '';
    inputInvitados.value = '';
}
