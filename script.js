function mostrarRecuerdo() {
  document.querySelector('.inicio').classList.add('oculto');
  document.querySelector('.recuerdo').classList.remove('oculto');
}

function mostrarFotos() {
  document.querySelector('.recuerdo').classList.add('oculto');
  document.querySelector('.fotos').classList.remove('oculto');
}

function mostrarPropuesta() {
  document.querySelector('.fotos').classList.add('oculto');
  document.querySelector('.propuesta').classList.remove('oculto');
}

function responder(respuesta) {
  document.querySelector('.propuesta').classList.add('oculto');
  document.querySelector('.final').classList.remove('oculto');
  alert(respuesta);
}


