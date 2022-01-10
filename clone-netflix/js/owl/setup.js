$('.owl-carousel').owlCarousel({
    loop:true, //faz o carrossel não parar de rodar
    margin:10, //margem entre os quadrados/filmes
    nav:false,  //botões de navegação
    responsive:{
        0:{
            items:1 //mostra 1 item com a tela pequena
        },
        600:{
            items:3 //mostra 3 itens com a tela até 600px
        },
        1000:{
            items:5 //mostra 5 itens com a tela até 1000px
        }
    }
})