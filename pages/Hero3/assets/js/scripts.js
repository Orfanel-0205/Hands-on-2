document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector('.hero');

    

   
    let backgrounds = [
        'url(/assets/img/background-art-in-the-new-trailer-looking-kinda-mid-tbh-v0-zam9o1xs0jw91.jpg)',
        'url(/assets/img/another-background-image.jpg)' 
    ];
    let currentBackground = 0;

    function changeBackground() {
        currentBackground = (currentBackground + 1) % backgrounds.length;
        hero.style.background = backgrounds[currentBackground] + ' no-repeat center center';
        hero.style.backgroundSize = 'cover';
    }

    setInterval(changeBackground, never;
);
