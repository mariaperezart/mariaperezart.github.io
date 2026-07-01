// FARO — comportamiento de interfaz compartido

document.addEventListener('DOMContentLoaded', function () {
  // Menú móvil
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('is-open');
    });
  }

  // Calculadora de ROI (página /diagnostico)
  var roiForm = document.getElementById('roi-form');
  if (roiForm) {
    roiForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var gabinetes = parseInt(document.getElementById('roi-gabinetes').value, 10) || 4;
      var mensajesDia = parseInt(document.getElementById('roi-mensajes').value, 10) || 30;

      // Misma lógica de cálculo que FARO_TESIS_MVP_60DIAS.md, sección 1.4
      var mensajesFueraHorarioMes = mensajesDia * 0.15 * 30;
      var contactosPerdidosMes = mensajesFueraHorarioMes * 0.20;
      var recuperadosBajo = contactosPerdidosMes * 0.10;
      var recuperadosAlto = contactosPerdidosMes * 0.15;
      var valorMedioBajo = 150;
      var valorMedioAlto = 250;

      var ingresoBajo = Math.round(recuperadosBajo * valorMedioBajo);
      var ingresoAlto = Math.round(recuperadosAlto * valorMedioAlto);

      document.getElementById('roi-rango').textContent =
        ingresoBajo.toLocaleString('es-ES') + '€ – ' + ingresoAlto.toLocaleString('es-ES') + '€ / mes';

      var resultBox = document.getElementById('roi-result');
      resultBox.classList.add('is-visible');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Formularios de contacto/diagnóstico: no hay backend en este sitio estático.
  // TODO (acción del usuario): conectar a un servicio de formularios (Formspree,
  // Getform, o un endpoint propio) sustituyendo el atributo action/data-endpoint
  // de cada <form data-faro-form> y quitando este aviso.
  document.querySelectorAll('form[data-faro-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      if (!form.dataset.endpointReady) {
        e.preventDefault();
        var notice = form.querySelector('.form-pending-notice');
        if (notice) {
          notice.style.display = 'block';
        }
      }
    });
  });
});
