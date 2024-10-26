const tooth = document.getElementById('tooth18');

tooth.addEventListener('click', () => {
        showImageCarousel();
});

function showImageCarousel() {
    const carrusel = document.getElementById('carrusel');
    carrusel.innerHTML = `
        <img src="../Img/1.png" alt="Imagen 1">
        <img src="../Img/2.png" alt="Imagen 2" style="display: none;">
        <img src="../Img/3.png" alt="Imagen 3" style="display: none;">
        <img src="../Img/4.png" alt="Imagen 4" style="display: none;">
        <img src="../Img/5.png" alt="Imagen 5" style="display: none;">
        </div>
        <div class="button-container">
        <button id="prev">Anterior</button>
        <button id="next">Siguiente</button>
        <button id="atras">Atras</button>
    `;

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const backButton = document.getElementById('atras');

    let currentImageIndex = 0;
    const images = carrusel.querySelectorAll('img');

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'inline' : 'none';
        });
    }

    prevButton.addEventListener('click', () => {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
        showImage(currentImageIndex);
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'parteSupDentadura.html';
    });

    showImage(currentImageIndex);

    modal.appendChild(carrusel);

    document.body.appendChild(modal);
}
const numeros = document.getElementById('numero');

tooth.addEventListener('mouseover', (event) => {
  numeros.style.display = 'block';
  numeros.style.left = `${event.pageX + 10}px`; 
  numeros.style.top = `${event.pageY + 10}px`;
});

tooth.addEventListener('mouseout', () => {
  numero.style.display = 'none';
});
