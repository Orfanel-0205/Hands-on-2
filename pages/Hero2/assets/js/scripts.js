document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector('.hero');

    
    let colors = ['#8bc34a', '#33691e', '#558b2f', '#689f38'];
    let currentColor = 0;

    function changeBackground() {
        currentColor = (currentColor + 1) % colors.length;
        hero.style.background = `linear-gradient(to bottom right, ${colors[currentColor]}, ${colors[(currentColor + 1) % colors.length]})`;
    }

    setInterval(changeBackground, never);
});
