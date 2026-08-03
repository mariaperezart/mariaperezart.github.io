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

  // Autodiagnóstico de 8 preguntas (página /diagnostico)
  // Se resuelve entero en el navegador: no se envía nada a ningún servidor.
  var checkForm = document.getElementById('check-form');
  if (checkForm) {
    var VEREDICTOS = [
      { hasta: 3, texto: 'Hay bastante que arreglar, y probablemente estés perdiendo contactos sin enterarte. La buena noticia es que las cosas que fallan a este nivel suelen ser las más baratas de resolver: la ficha de Google, el formulario y el certificado de seguridad se arreglan en días, no en meses.' },
      { hasta: 5, texto: 'Lo básico está, pero hay agujeros. Normalmente son el formulario que nadie ha vuelto a probar, la ficha de Google con datos viejos o un gestor de contenidos sin actualizar. Merece la pena mirarlo con calma antes de gastar dinero en nada nuevo.' },
      { hasta: 7, texto: 'Estás mejor que la mayoría de negocios que revisamos. A este nivel lo que suele faltar no es arreglar, es mantener: que alguien mire la web cada pocos meses para que no se degrade sola.' },
      { hasta: 8, texto: 'Ocho de ocho. Si has respondido con sinceridad, ahora mismo no necesitas contratarnos nada — y te lo diríamos igual en persona. Guárdanos para cuando quieras dar el siguiente paso o cuando algo empiece a fallar.' }
    ];

    checkForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var items = checkForm.querySelectorAll('.check-item');
      var total = items.length;
      var marcados = 0;
      items.forEach(function (item) { if (item.checked) { marcados++; } });

      document.getElementById('check-score').textContent = marcados + ' de ' + total;

      var veredicto = VEREDICTOS[VEREDICTOS.length - 1];
      for (var i = 0; i < VEREDICTOS.length; i++) {
        if (marcados <= VEREDICTOS[i].hasta) { veredicto = VEREDICTOS[i]; break; }
      }
      document.getElementById('check-verdict').textContent = veredicto.texto;

      var resultBox = document.getElementById('check-result');
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
