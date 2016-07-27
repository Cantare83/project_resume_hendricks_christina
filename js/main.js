$(document).ready(function () {

//jQuery to change the h1 color on click

    $('h1').click(function () {
        $('h1').addClass('name');
    });

//jQuery plugin to make the sub heading rotate

    $('.rotate').textrotator({
        animation: 'dissolve',
        separator: ',',
        speed: 2000
    });

});
