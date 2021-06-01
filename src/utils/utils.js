import Swal from 'sweetalert2'

const BASE_URL = 'http://md-coronal-api/api';

export const apiLogin = (datosEnvio) => {
  let url = BASE_URL + '/login';
  
  datosEnvio = { ... datosEnvio, name: 'web'}

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(datosEnvio)
  })
  .then(response => {   
    if(response.status === 200) {
      return response.json()
    } else {
      return 'error'
    }
  })
  .catch(err => {
    console.log(err);
  });
}

export const apiPaciente = (identificacion, token) => {
  
  const url = BASE_URL + '/v1/paciente';
  const data = new FormData();
  data.append('identificacion', identificacion) 

  let envio = {};
  data.forEach((value, key) => envio[key] = value);

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    body: JSON.stringify(envio)
  })
  .then(response => {    
    if(response.ok) {
      return response.json()
    } else {
      return "Error en la llamada Ajax -> " + response.status;
    }
  })
  .catch(err => {
    console.log(err);
  });
}

export const apiUsuarios = (id, token) => {
  
  let url = BASE_URL + '/v1/usuarios';
  if (id !== undefined) {
    url = url + '/' + id  
  }

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    method: 'GET'
  })
  .then(response => {    
    if(response.ok) {
      return response.json()
    } else {
      return "Error en la llamada Ajax -> " + response.status;
    }
  })
  .catch(err => {
    console.log(err);
  });
}

export const apiCrearUsuario = (datosEnvio, token) => {
  let url = BASE_URL + '/v1/usuarios';
  
  const data = new FormData();
  for (let key in datosEnvio) {
    data.append(key, datosEnvio[key])
  }
  if (datosEnvio.id > 0) {
    url = url + '/' + datosEnvio.id
    data.append('_method', 'PUT')
  }

  let envio = {};
  data.forEach((value, key) => envio[key] = value);

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    body: JSON.stringify(envio)
  })
  .then(response => {    
    if(response.ok) {
      return response.json()
    } else {
      return "Error en la llamada Ajax -> " + response.status;
    }
  })
  .catch(err => {
    console.log(err);
  });
}

export const apiGuardar = (endpoint, datosEnvio, responsable, identificacion, token) => {
  
  const url = BASE_URL + endpoint;

  const data = new FormData();
  for (let key in datosEnvio) {
    data.append(key, datosEnvio[key]);
  }
  if (identificacion) { //deben cambiarse TODO
    data.append('identificacion', identificacion) 
  }
  data.append('responsable', responsable)

  let envio = {};
  data.forEach((value, key) => envio[key] = value);

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    body: JSON.stringify(envio)
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
    title: 'Lo sentimos',
    text: 'Se presentó el siguiente error: ' + err,
    icon: 'error',
    button: "Ok",
    confirmButtonColor: '#14b8a6'
  })
}

export const cerrarSwal = () => {
  Swal.close()
}

export const limpiaOtros = (set, menu) => {
  //ingreso
  if (menu === 'ingreso') {
    if (set.identifica.substring(0,4) !== 'Otro') { set.identifica_otro = '' }
  }
  
  //Tac
  if (menu === 'tac') {
    if (set.tac.substring(0,4) !== 'Otro') { set.tac_otro = '' }
  }
  
  //Cirugia
  if (menu === 'cirugia') {
    if (set.fijacion.substring(0,4) !== 'Otro') { set.fijacion_otro = '' }
    if (set.maniobras.substring(0,4) !== 'Otro') { set.maniobras_otro = '' }
    if (set.complicacion.substring(0,4) !== 'Si, ') { set.complicacion_otro = '' }
  }
  
  //semanas2
  if (menu === 'semanas2' || menu === 'semanas6' || menu === 'meses6') {
    if (set.herida.substring(0,4) !== 'Otro') { set.herida_otro = '' }
  }
  
  //semana6 y mese 6
  if (menu === 'semanas6' || menu === 'meses6') {
    if (set.perdida.substring(0,4) !== 'Si, ') { set.perdida_otro = '' }
  }

  return set
}