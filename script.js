// Mostrar la primera sección del viaje
function mostrarRecuerdo() {
  document.querySelector('.inicio').classList.add('oculto');
  document.querySelector('.recuerdo').classList.remove('oculto');
}

// Mostrar las fotos
function mostrarFotos() {
  document.querySelector('.recuerdo').classList.add('oculto');
  let fotos = document.querySelector('.fotos-juntos');
  fotos.classList.remove('oculto');
  fotos.classList.add('activa');
}

// Mostrar la primera cita
function mostrarPrimeraCita() {
  document.querySelector('.fotos-juntos').classList.add('oculto');
  let primeraCita = document.querySelector('.primera-cita');
  primeraCita.classList.remove('oculto');
  primeraCita.classList.add('activa');
}

// Mostrar viaje a los museos
function mostrarViajeMuseos() {
  document.querySelector('.primera-cita').classList.add('oculto');
  let viajeMuseos = document.querySelector('.viaje-museos');
  viajeMuseos.classList.remove('oculto');
  viajeMuseos.classList.add('activa');
}

// Mostrar las siguientes secciones después de "viaje-museos"
function mostrarChurros() {
  document.querySelector('.viaje-museos').classList.add('oculto'); // Ocultar viaje-museos
  let churros = document.querySelector('.churros');
  churros.classList.remove('oculto');
  churros.classList.add('activa');
}

function mostrarParqueUrbano() {
  document.querySelector('.churros').classList.add('oculto'); // Ocultar churros
  let parqueUrbano = document.querySelector('.parque-urbano');
  parqueUrbano.classList.remove('oculto');
  parqueUrbano.classList.add('activa');
}

function mostrarBonita() {
  document.querySelector('.parque-urbano').classList.add('oculto'); // Ocultar parque-urbano
  let bonita = document.querySelector('.bonita');
  bonita.classList.remove('oculto');
  bonita.classList.add('activa');
}

function mostrarEmma() {
  document.querySelector('.bonita').classList.add('oculto'); // Ocultar bonita
  let emma = document.querySelector('.emma');
  emma.classList.remove('oculto');
  emma.classList.add('activa');
}

function mostrarCorral() {
  document.querySelector('.emma').classList.add('oculto'); // Ocultar emma
  let corral = document.querySelector('.corral');
  corral.classList.remove('oculto');
  corral.classList.add('activa');
}

function mostrarPlaza() {
  document.querySelector('.corral').classList.add('oculto'); // Ocultar corral
  let plaza = document.querySelector('.plaza');
  plaza.classList.remove('oculto');
  plaza.classList.add('activa');
}

function mostrarFantasilandia() {
  document.querySelector('.plaza').classList.add('oculto'); // Ocultar plaza
  let fantasilandia = document.querySelector('.fantasilandia');
  fantasilandia.classList.remove('oculto');
  fantasilandia.classList.add('activa');
}

// Mostrar la última sección antes de la propuesta
function mostrarDiaNormal() {
  document.querySelector('.fantasilandia').classList.add('oculto'); // Ocultar Fantasilandia
  let diaNormal = document.querySelector('.dia-normal');
  diaNormal.classList.remove('oculto');
  diaNormal.classList.add('activa');
}



//function mostrarPropuesta() {
  //document.querySelector('.dia-normal').classList.add('oculto'); // Ocultar "día normal"
  //document.querySelector('.propuesta').classList.remove('oculto');
  //document.querySelector('.propuesta').classList.add('activa');
//}

// Función para mostrar la primera propuesta con la frase "Tengo algo que quisiera preguntarte..."
function mostrarPropuestaInicial() {
  document.querySelector('.dia-normal').classList.add('oculto'); // Ocultar "día normal"
  document.querySelector('.inicio').classList.add('oculto');
  document.querySelector('.propuesta-inicial').classList.remove('oculto');
}

// Función para pasar a la pregunta de "Sí/No"
function mostrarPregunta() {
  // Ocultamos la sección de la propuesta inicial
  document.querySelector('.propuesta-inicial').classList.add('oculto');
  
  // Mostramos la pregunta de "Sí/No"
  document.querySelector('.propuesta-pregunta').classList.remove('oculto');
}

function responder(respuesta) {
  document.querySelector('.propuesta-pregunta').classList.add('oculto');
  document.querySelector('.final').classList.remove('oculto');
  alert(respuesta);
}

// Mostrar la imagen de broma y el mensaje "Es broma amor" cuando se presiona "No"
function mostrarBroma() {
  // Ocultamos la propuesta
  document.querySelector('.propuesta-pregunta').classList.add('oculto');
  
  // Mostramos la imagen y mensaje de broma
  document.querySelector('.broma').classList.remove('oculto');
}
// Volver a mostrar la propuesta después de hacer la broma
function volverAPropuesta() {
  // Ocultar la sección de broma
  document.querySelector('.broma').classList.add('oculto');
  
  // Mostrar la propuesta nuevamente
  document.querySelector('.propuesta-pregunta').classList.remove('oculto');
}












