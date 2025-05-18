document.addEventListener("DOMContentLoaded", function () {
  const surpriseBtn = document.querySelector(".surprise");

  const flavors = [
    "Caramel Crunch",
    "Tropical Mango",
    "Bubblegum Blast",
    "Pistachio Almond",
    "Raspberry Ripple",
    "Rainbow Sherbet",
    "Cookies & Cream",
    "Strawberry Dream",
    "Pistachio Almond",
    "Cotton Candy Crackle"
  ];

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", function (e) {
      e.preventDefault(); 
      const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
      alert(` Your surprise flavor is: ${randomFlavor}!`);
    });
  }
});
