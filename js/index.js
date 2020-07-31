$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 2000
    });

    /* No funcionó como esperaba*/
    /* $('#contactoBtn').on('show.bs.modal', function (e) {
        console.log('El modal se esta mostrando 1');
    }); */
    /* Estos si funcionaron */
    $('#contacto').on('show.bs.modal', function(e){
        console.log('El modal se muestra');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function(e){
        console.log('El modal se mostró');
    });
    $('#contacto').on('hide.bs.modal', function(e){
        console.log('El modal se oculta');
    });
    $('#contacto').on('hidden.bs.modal', function(e){
        console.log('El modal se ocultó');
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').addClass('btn-outline-success');
        $('#contactoBtn').prop('disabled', false);
    });
});