document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = document.getElementById("selected-language");
  const languageOptions = document.querySelectorAll(".dropdown li");

  languageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      selectedLanguage.textContent = this.textContent.split(" ")[1];
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navone li");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");

      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Selezioniamo tutti gli elementi da animare
  const headerElements = document.querySelectorAll(
    "#home h1, #home p, #home button"
  );
  const leftElements = document.querySelectorAll(
    ".center .left h1, .center .left p, .center .left .stat-box, .projectimg .leftone .left-section, .projectimg .leftone .right-section, .navthree p, .navfour .writeline h2, .description .contenitore:nth-child(3)"
  );
  const rightElements = document.querySelectorAll(
    ".center .right .writeline, .center .right .calendar, .navthree .writelineone h2, .projectimg .rightone, .description .contenitore:nth-child(1)"
  );
  const bottomElements = document.querySelectorAll(
    ".description .contenitore:nth-child(2)"
  );

  // Creiamo un IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Interrompi l'osservazione dopo l'animazione
        }
      });
    },
    { threshold: 0.3 }
  );

  // Osserviamo tutti gli elementi selezionati
  headerElements.forEach((el) => observer.observe(el));
  leftElements.forEach((el) => observer.observe(el));
  rightElements.forEach((el) => observer.observe(el));
  bottomElements.forEach((el) => observer.observe(el));
});
