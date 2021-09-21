// Efecto Fade_up
window.addEventListener('scroll', function(){

  function fade(direction){

    var seccion = document.querySelectorAll('.fade_' + direction);

    for (var i = 0; i < seccion.length; i++){

      var altura = window.innerHeight/1.3;
      var distancia = seccion[i].getBoundingClientRect().top;

      console.log(altura)
      console.log(distancia)

        seccion[i].classList.add('transform_' + direction)

      if(distancia <= altura){

          seccion[i].classList.add('aparecer');
      }
      else{

        seccion[i].classList.remove('aparecer');

      }

    }
  }

  fade('left')
  fade('up')
  fade('down')
  fade('right')

})

function sendEmail(){

  (function() {
    // User Id
    emailjs.init("user_HnWRbPDEMzu2Hqay0Cj1I"); //please encrypted user id for malicious attacks
  })();

  let nombre = document.querySelector('#nombre').value;
  let email = document.querySelector('#email').value;
  let cuestion = document.querySelector('#asunto').value;
  let mensaje = document.querySelector('#mensaje').value;

  if (nombre.length == 0 || email.length == 0 || cuestion.length == 0 || mensaje.length == 0){

    Swal.fire('<p>Hay campos vacios! Compruebe antes de enviar.</p>');
  }
  else{

      var templateParams = {
        from_name: nombre,
        fromEmail: email,
        issue: cuestion,
        message: mensaje
      };
      // Service and template
      emailjs.send('service_khle7ls', 'template_d9n61gb', templateParams)
        .then(function(response) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          document.getElementById('formulario').reset()

          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Fallo al enviar el mensaje',
            })
          console.log('FAILED...', error);
        });
    }

}