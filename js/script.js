



/* Botón para cambiar de modelo de carta:

$(document).ready(function () {
    // Variantes de cartas organizadas por cada carta
    const variantes = [
        [
            'images/starwars/2024Chrome/001_Ahsoka_Tano_RR.jpeg',
            'images/starwars/2024Chrome/001_Ahsoka_Tano_BBPR.jpeg',
            'images/starwars/2024Chrome/001_Ahsoka_Tano_KGR.jpeg'
        ],
        [
            'images/starwars/2024Chrome/003_Sabine_Wren_RR.jpeg',
            'images/starwars/2024Chrome/003_Sabine_Wren_BBPR.jpeg',
            'images/starwars/2024Chrome/003_Sabine_Wren_KGR.jpeg'
        ],
        [
            'images/starwars/2024Chrome/009_Luthen_Rael_BASE.png',
            'images/starwars/2024Chrome/009_Luthen_Rael_AV.png',
            'images/starwars/2024Chrome/009_Luthen_Rael_GR.png'
        ], 
        [
            'images/starwars/2024Chrome/022_Grogu_BBPR.jpeg',
            'images/starwars/2024Chrome/022_Grogu_GR.jpeg',
            'images/starwars/2024Chrome/022_Grogu_KAR.jpeg'
        ]
    ];

    // Control de índice para las variantes de cada carta
    const indices = [0, 0, 0, 0];

    // Manejo del evento click en los botones
    $('.cambiarTipoCarta').click(function () {
        // Identificamos la carta correspondiente al botón clicado
        const cartaIndex = $(this).parent().index('.cartas > .carta-container'); // Índice de la carta en la lista

        // Actualizamos el índice para mostrar la siguiente variante
        indices[cartaIndex] = (indices[cartaIndex] + 1) % variantes[cartaIndex].length;

        // Aplicamos el cambio de imagen con transición
        const cartaImg = $(this).siblings('.carta');
        cartaImg.fadeOut(150, function () {
            cartaImg.attr('src', variantes[cartaIndex][indices[cartaIndex]]);
            cartaImg.fadeIn(150);
        });
    });
});

*/
