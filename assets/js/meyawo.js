/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all portfolio card elements
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    // Add click event listener to each portfolio card
    portfolioCards.forEach(function(card) {
        card.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Toggle visibility of subtitle for the clicked card
            const subtitle = card.querySelector('.subtitle');
            subtitle.classList.toggle('show');
        });
    });
});
