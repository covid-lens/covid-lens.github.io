/*jslint browser: true */
/*global window, $, alert*/

$(document).ready(function () {
    'use strict';

    // For a higher usability we do some scripting
    if (navigator.bluetooth === undefined) {
        document.getElementById('list-devices-btn').disabled = true;
        document.getElementById('list-devices-btn').classList.remove("btn-primary");
        document.getElementById('list-devices-btn').classList.add("btn-secondary");
        document.getElementById('list-devices-btn').innerHTML = '😞 Does not work with your browser!';
        document.getElementById('helptext').classList.remove("text-muted");
        document.getElementById('helptext').classList.add("text-danger");
        document.getElementById('helptext').innerHTML = 'Sorry, this website does not work with your browser. Try <i class="fab fa-chrome"></i>&nbsp;Google Chrome on Android, Windows, or macOS! 🤔';
    }
    if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) {
        document.getElementById('list-devices-btn').disabled = true;
        document.getElementById('list-devices-btn').classList.remove("btn-primary");
        document.getElementById('list-devices-btn').classList.add("btn-secondary");
        document.getElementById('list-devices-btn').innerHTML = '😞 Does not work on iPhones!';
        document.getElementById('helptext').classList.remove("text-muted");
        document.getElementById('helptext').classList.add("text-danger");
        document.getElementById('helptext').innerHTML = 'Sorry, this website does not work on <i class="fab fa-apple"></i> Apple iPhones/iPads/iPods, but it might work on your computer! 🤔';
    }

    $(".smooth-scroll").on('click', 'a', function (e) {
        // Iterate over all and remove active class
        $.each($(".nav-item"), function () {
            $(this).removeClass('active');
        });
        // Add active class on clicked <li>
        $(this).closest(".nav-item").addClass('active');
        // Below is smoothscrolling
        var link = $(this).attr('href');
        // Is there an HTML anchor in the hyperlink?
        if (link.indexOf("#") >= 0) {
            e.preventDefault();
            var hash = link.split('#')[1];
            $('body,html').animate({
                scrollTop: $(link).offset().top - 70
            }, 700);
            window.location.hash = hash;
        }
    });

});