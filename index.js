import $ from 'jquery';
import 'jquery-circle-progress';

$('ul.container__tabs').on('click', 'li:not(.container__tab_active)', function () {
    $(this)
        .addClass('container__tab_active').siblings().removeClass('container__tab_active')
        .closest('div.container').find('div.container__content').removeClass('container__content_active').eq($(this).index()).addClass('container__content_active');
});

const progressBarOptions = {
    startAngle: -1.55,
    size: 70,
    value: 0.78,
    fill: {
        gradient: [
            '#00d4be',
            '#1ae77f'
        ]
    }
};
$('#circle').circleProgress(progressBarOptions).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)));
});