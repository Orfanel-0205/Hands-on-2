document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector('.hero');

    
    let colors = ['#1b1b1b', '#4e4e4e', '#303030', '#595959'];
    let currentColor = 0;

    function changeBackground() {
        currentColor = (currentColor + 1) % colors.length;
        hero.style.background = `linear-gradient(to bottom right, ${colors[currentColor]}, ${colors[(currentColor + 1) % colors.length]})`;
    }

    setInterval(changeBackground, 5000);
});
