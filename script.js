window.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.querySelector('#main');
    

    function loaded() {
        mainElement.style.display = 'block';
    }
    window.onload = loaded();

})