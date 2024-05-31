
//ventana emergente
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const article = document.getElementById('art');
    const closePopupButton = document.querySelector('.close');

    article.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});