document.getElementById('formGanado').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const identificacion = document.getElementById('identificacion').value;
    const raza = document.getElementById('raza').value;
    const edad = document.getElementById('edad').value;
    const peso = document.getElementById('peso').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    
    const li = document.createElement('li');
    li.textContent = `Identificación: ${identificacion}, Raza: ${raza}, Edad: ${edad} años, Peso: ${peso} kg, Fecha de Nacimiento: ${fechaNacimiento}`;
  
    document.getElementById('ganadoList').appendChild(li);
  
   
    document.getElementById('formGanado').reset();
  });