function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select the div container
    var animationContainer = document.getElementById('lottie-animation');

    // Specify the path to your JSON file
    var animationData = {
        container: animationContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './assets/Animation - 1726490770555.json' // the path to the animation json
    };

    // Load the animation
    var anim = bodymovin.loadAnimation(animationData);
});

