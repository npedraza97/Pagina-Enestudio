document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('booking-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(form);

        // URL del webhook de Google Apps Script
        var scriptURL = 'https://script.google.com/macros/s/AKfycbyy11Hk1H7e9lRO4AjiFetpEWZZChsHKl0j2AaBOgyERYoNqWnAnu19hvM_H3GjXVTDYA/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert('¡Gracias! Hemos recibido tu información.');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar tu información. Por favor, intenta de nuevo.');
        });
    });
});
