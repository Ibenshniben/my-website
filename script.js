document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 800);
    });

    gsap.ticker.lagSmoothing(0);
});

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector
('.off-screen-menu');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})