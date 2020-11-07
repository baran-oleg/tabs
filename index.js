$(document).ready(function () {

    $('ul.container__tabs').on('click', 'li:not(.container__tab_active)', function () {
        $(this)
            .addClass('container__tab_active').siblings().removeClass('container__tab_active')
            .closest('div.container').find('div.container__content').removeClass('container__content_active').eq($(this).index()).addClass('container__content_active');
    });
});