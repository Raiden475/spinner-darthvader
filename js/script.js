document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.getElementById('spinner');
    const spinnerButton = document.getElementById('spinnerButton');

    spinnerButton.addEventListener('click', () => {
        // Muestra el spinner y oculta el botón
        spinner.style.display = 'block';
        spinnerButton.classList.add('hidden');
        
        // Después de que el spinner haya terminado de girar, muestra el botón nuevamente
        setTimeout(() => {
            spinner.style.display = 'none';
            spinnerButton.classList.remove('hidden');
        }, 6000); // 6000 ms = 6 segundos (la duración de la animación)
    });
});
