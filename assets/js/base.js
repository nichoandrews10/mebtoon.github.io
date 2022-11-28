$(document).ready(function() {
    document.addEventListener("DOMContentLoaded", function(event) {
        var scrollpos = localStorage.getItem('scrollpos-' + window.title);
        if (scrollpos) window.scrollTo(0, scrollpos);
    });

    window.onbeforeunload = function(e) {
        localStorage.setItem('scrollpos-' + document.title, window.scrollY);
    };

    // mobile navbar
    var navbar_nav_btn = document.getElementById('nav-check');
    var nav_items = document.getElementById('nav-items');

    navbar_nav_btn.addEventListener('click', function() {
        nav_items.classList.toggle('collapsed');
    });

});