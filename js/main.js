// Quando o documento estiver pronto, executa os comandos
jQuery(document).ready(function ($) {

    // FIXED HEADER
    window.onscroll = function () {
        // Se o quanto que a página foi rolada for maior que 140px
        if (window.pageYOffset > 140) {
            $('#header').addClass("active")
        } else {
            $('#header').removeClass("active")
        }
    }

    // ISOTOPE
    // Add os botões dos serviços recentes
    let btns = $("#experiencias .button-group button");

    // Quando clicar, executar a função
    btns.click(function (e) {
        // Remove a classe active
        $("#experiencias .button-group button").removeClass("active");
        // Add a classe active no botão selecionado
        e.target.classList.add("active");

        // Passar via JQuery o alvo selecionado (e.target) e pegar seu atributo (.attr)
        let selector = $(e.target).attr("data-filter");
        // Em servicos, onde tiver a grid
        $("#experiencias .grid").isotope({
            // Vai fazer um filtro usando o selector
            filter: selector,
        });
    });

    // Quando a página estiver carregando, chama a função para aplicar um Isotope passando Todos (*)
    $(window).on("load", function(){
        $("#experiencias .grid").isotope({
            filter: "*",
        });
    });

});