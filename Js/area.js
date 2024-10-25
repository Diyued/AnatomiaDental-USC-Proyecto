const dientes = document.querySelectorAll('area');
const superior = document.getElementById('parteSupDentadura');
const inferior = document.getElementById('parteInfDentadura');

superior.addEventListener('click', function() {
    window.location.href = 'parteSupDentadura.html';  // Redirige a la parte superior de la dentadura
    })
    
inferior.addEventListener('click', function() {
    window.location.href = 'parteInfDentadura.html';  // Redirige a la parte superior de la dentadura
    })
    

dientes.forEach(diente => {
    diente.addEventListener('mouseover', () => {
        window.location.href= 'parteInfDentadura.html'
        console.log("Diente 1");
        
    });
});