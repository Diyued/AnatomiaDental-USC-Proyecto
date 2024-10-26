const tooth = document.getElementById('tooth18');
tooth.addEventListener('click', () => {
    Swal.fire({
        title: "Diente 18",
        text: "Modal with a custom image.",
        imageUrl: "https://i.pinimg.com/736x/8b/84/72/8b847293e8b8c3e4b4340f5dd6a09dc0.jpg",
        imageWidth: 1000,
        imageHeight: 500,
        imageAlt: "Custom image"
    });
});
const numeros = document.getElementById('numero');

tooth.addEventListener('mouseover', (event) => {
  numeros.style.display = 'block';
  numeros.style.left = `${event.pageX + 10}px`; 
  numeros.style.top = `${event.pageY + 10}px`;
});

tooth.addEventListener('mouseout', () => {
  numero.style.display = 'none';
});
