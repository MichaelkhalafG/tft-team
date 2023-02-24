/** ===================================================
Author: Michael khalaf
=================================================== **/

$(document).ready(function () {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })
    /** =============== header =============== */
    $(window).scroll(function () {

        var height = ($('.header-container').height());
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 50) {
            $('.nav-container').addClass('solid-nav');
            $('.adress-div').removeClass('d-none');
        } if (scrollTop <= height + 50) {
            $('.nav-container').removeClass('solid-nav');
            $('.adress-div').addClass('d-none');
        }

    });
    /** =============== header =============== */
    /** =============== fixed-logo =============== */
    $('.fixed-logo').hover(function () {
        $('.fixed-logo').addClass('arrow-class');
    });
    $('.fixed-logo').mouseleave(function () {
        $('.fixed-logo').removeClass('arrow-class');
    });
    /** =============== fixed-logo =============== */

});