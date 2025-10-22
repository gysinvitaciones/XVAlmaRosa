document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        const familyName = document.getElementById('family-name').value;
        const guests = document.getElementById('guests').value;

        // URL de WhatsApp con el mensaje predefinido
    
    });



    // Configuración del contador regresivo para el evento
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


const maxInvitadosPorAsistente = {
    'Milk leyva': 2,
    'Alma Perroni Palma': 4,
    'Erika Torres Perroni': 3,
    'Carmela Perroni Plama': 2,
    'Berenice Torres Perroni': 4,
    'Jose Eduardo Torres Perroni': 4,
    'Dora Perroni Palma': 4,
    'David Perroni Palma': 2,
    'Dolores Perroni Palma': 2,
    'Miguel Angel Leyva Perroni': 5,
    'Helrich Darve Cristopher Vazquez Balderas': 3,
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
    'María del consuelo Carrillo Torres': 2,
    'Anahi Gomez Carrillo': 1,
    'Flor de Maria Gomez Carrillo': 2,
    'Yazmin Santos Carrillo': 3,
    'Gerardo Santos Carrillo': 2,
    'Abigail Carrillo Moreno': 5,
    'Gabriela Carrillo Torres': 4,
    'Victor Carrillo Torres': 2,
    'Zunny Torres Santos': 2,
    'Andres Carrillo Torres': 2,
    'Pablo cesar Carrillo Santos': 2,
    'Miguel carballo': 4,
    'Heriberto Bartolo': 5,
    'Erika de la Fuente': 4,
    'Guadalupe Carrillo': 2,
    'Claudia Aquino': 3,
    'Esmeralda Gomez': 4,
    'Pablo ordaz': 2,
    'Claudia Sanchez': 8,
    'Mayra Alor': 3,
    'Sr. Salvador': 2,
    'Pedro Alpuche': 3,
    'Katia': 1,
    'Nizza': 1,
    'Edward': 1,
    'Kristell': 1,
    'Jocelyn': 2,
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
};

function mostrarOpciones() {
    var nombreSeleccionado = document.getElementById('nombre').value;
    var opciones = document.getElementById('opciones');
    var invitados = document.getElementById('invitados');
    var inputInvitados = document.getElementById('num_invitados');
    var mensajePase = document.getElementById('mensajePase');
    var botonConfirmar = document.getElementById('confirmar-btn');
    
    if (nombreSeleccionado !== "Selecciona") {
        opciones.classList.remove('hidden');
    } else {
        opciones.classList.add('hidden');
    }
    
    invitados.classList.add('hidden');
    inputInvitados.value = '';
    mensajePase.textContent = '';
    botonConfirmar.classList.add('hidden');
}

function mostrarInvitados(asistira) {
    var invitados = document.getElementById('invitados');
    var nombreSeleccionado = document.getElementById('nombre').value;
    var maxInvitados = maxInvitadosPorAsistente[nombreSeleccionado] || 0;
    var inputInvitados = document.getElementById('num_invitados');
    var mensajePase = document.getElementById('mensajePase');
    var botonConfirmar = document.getElementById('confirmar-btn');
    
    if (asistira) {
        invitados.classList.remove('hidden');
        inputInvitados.max = maxInvitados;
        inputInvitados.placeholder = `Máximo ${maxInvitados} invitados`;
        mensajePase.textContent = `Tu pase es para ${maxInvitados} personas.`;
        botonConfirmar.classList.remove('hidden');
    } else {
        invitados.classList.add('hidden');
        inputInvitados.value = '';
        mensajePase.textContent = '';
        botonConfirmar.classList.remove('hidden');
    }
}

function enviarWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var asistira = document.getElementById('invitados').classList.contains('hidden') ? "No" : "Sí";
    var numInvitados = document.getElementById('num_invitados').value || 0;

    if (nombre === "" || (asistira === "Sí" && numInvitados <= 0)) {
        alert("Por favor, completa toda la información antes de confirmar.");
        return;
    }

    var mensaje = `Hola, soy ${nombre}. ${asistira === "Sí" ? `Asistiremos ${numInvitados} persona(s).` : `No podré asistir.`}`;
    var numero  = "+529211172337"
    var url     = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}


// ==== Reproductor de música ====
const playBtn = document.getElementById('play-btn');
const music = document.getElementById('background-music');

playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    music.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// ==== Autocompletado de invitados ====
function buscarInvitadoAuto(valor) {
  const input = valor.toLowerCase().trim();
  const datalist = document.getElementById('sugerencias');
  const resultado = document.getElementById('resultado-busqueda');
  const opciones = document.getElementById('opciones');

  datalist.innerHTML = ''; // limpiar opciones previas
  opciones.classList.add('hidden');

  if (input.length < 2) {
    resultado.textContent = '';
    resultado.classList.add('hidden');
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
        reiniciarFormulario(); // 🔄 limpiar antes de mostrar nuevo pase
        resultado.textContent = "Invitado reconocido ✔️";
        resultado.classList.remove('hidden');
        opciones.classList.remove('hidden');
    } else {
        resultado.textContent = "Escribe tu nombre completo para confirmar";
        resultado.classList.remove('hidden');
    }
}


// ==== Reiniciar formulario al cambiar de invitado ====
function reiniciarFormulario() {
    const opciones = document.getElementById('opciones');
    const invitados = document.getElementById('invitados');
    const inputInvitados = document.getElementById('num_invitados');
    const mensajePase = document.getElementById('mensajePase');
    const botonConfirmar = document.getElementById('confirmar-btn');
    const resultado = document.getElementById('resultado-busqueda');

    // Ocultar y limpiar todo
    opciones.classList.add('hidden');
    invitados.classList.add('hidden');
    botonConfirmar.classList.add('hidden');
    mensajePase.textContent = '';
    inputInvitados.value = '';
    resultado.textContent = '';
}

// Vincular evento de reinicio al input de nombre
const inputNombre = document.getElementById('nombre');
if (inputNombre) {
    inputNombre.addEventListener('input', reiniciarFormulario);
}
