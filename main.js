


$(document).ready(function () {
    $('button, #f1').click(function () {
        $('.mainbox p').show();
        $('#f1').css('display', 'none');
        $('#f2').css('display', 'inline-block');
    });

    $('#f2').click(function () {
        $('.mainbox p').hide();
        $('#f2').css('display', 'none');
        $('#f1').css('display', 'inline-block');
    });

});