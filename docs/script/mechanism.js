$(document).ready(function () {
    /**
     * CSS VARIABLES
     */
    const blue = getComputedStyle(document.documentElement).getPropertyValue('--blue');
    const dark = getComputedStyle(document.documentElement).getPropertyValue('--dark');

    // Input checkbox
    const navTrigger = $('#navbar-trigger')
    // Navigation Bar
    const navBar = $('#nav-bar')
    // Visible button
    const butTrigger = $('.menu')
    // Bar top
    const barTop = $('.menu > :nth-child(1)')
    // Bar bottom
    const barBot = $('.menu > :nth-child(2)')

    navTrigger.change(function () { 
        if (navTrigger.is(':checked')) {
            navBar.css('right', '0')
            butTrigger.css('background-color', blue)
            barTop.css('opacity', '1')
            barTop.css('transform', 'translateY(5px) rotate(45deg)')
            barBot.css('transform', 'translateY(-5px) rotate(-45deg)')
        } else {
            navBar.css('right', '-100%')
            butTrigger.css('background-color', dark)
            barTop.css('opacity', '.5')
            barBot.css('opacity', '1')
            barTop.css('transform', '')
            barBot.css('transform', '')
        }
    });
})