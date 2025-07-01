function mostrarHistoria() {
  document.querySelector('.inicio').classList.add('oculto');
  document.querySelector('.historia').classList.remove('oculto');
}

function mostrarPropuesta() {
  document.querySelector('.historia').classList.add('oculto');
  document.querySelector('.propuesta').classList.remove('oculto');
}

function responder(respuesta) {
  document.querySelector('.propuesta').classList.add('oculto');
  document.querySelector('.final').classList.remove('oculto');
  alert(respuesta); // agrega emoción 🥹
}

