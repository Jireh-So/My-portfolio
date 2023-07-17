function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.onload = function () {
  Particles.init({
    selector: "Canvas"
  });
};

// var particles = Particles.init({
//   selector: "Canvas",
//   color: ["#F6358A", "#000000", "#00ffff"],
//   connectParticles: true,
//   responsive: [
//     {
//       breakpoint: 675,
//       options: {
//         color: ["#F6358A", "#000000", "#00ffff"],
//         maxParticles: 43,
//         connectParticles: false
//       }
//     }
//   ]
// });