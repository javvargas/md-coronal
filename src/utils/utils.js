import Swal from 'sweetalert2'

export const apiGuardar = (endpoint, datosEnvio, responsable, identificacion) => {

  const BASE_URL = 'http://md-coronal-api/api';
  const url = BASE_URL + endpoint;

  const data = new FormData();
  for (let key in datosEnvio) {
    data.append(key, datosEnvio[key]);
  }
  if (identificacion) { //deben cambiarse TODO
    data.append('identificacion', identificacion) 
  }
  data.append('responsable', responsable)

  return fetch(url, {
    method: 'POST',
    body: data
  })
  .then(response => {
    if(response.ok) {
      return 'OK'
    } else {
      return "Error en la llamada Ajax -> " + response.status;
    }
  })
  .catch(err => {
    console.log(err);
  });
}

export const cargando = () => {
  Swal.fire({
    title: 'Enviando Información',
    text: 'Por favor espere...',
    icon: 'warning',
    toast: 'true',
    showConfirmButton: false
  })
}

export const confirmacion = () => {
  Swal.fire({
    title: 'Perfecto',
    text: 'Se adicionó correctamente la información.',
    icon: 'success',
    button: "Ok",
    confirmButtonColor: '#14b8a6'
  })
}

export const error = (err) => {
  Swal.fire({
    title: 'Opps...',
    text: 'Se presentó el siguiente error: ' + err,
    icon: 'error',
    button: "Ok",
    confirmButtonColor: '#14b8a6'
  })

  
}
