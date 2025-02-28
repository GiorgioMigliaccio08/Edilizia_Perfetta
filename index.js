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
  // Selezioniamo gli elementi dell'header
  const headerElements = document.querySelectorAll(
    "#home h1, #home p, #home button"
  );

  // Selezioniamo tutti gli elementi della parte sinistra e destra
  const leftElements = document.querySelectorAll(
    ".center .left h1, .center .left p, .center .left .stat-box"
  );
  const rightElements = document.querySelectorAll(
    ".center .right .writeline, .center .right .calendar"
  );

  // Creiamo l'IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aggiungiamo la classe "visible" quando l'elemento è visibile
          entry.target.classList.add("visible");

          // Dopo che l'elemento è stato animato, smettiamo di osservare l'elemento
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  ); // L'elemento viene considerato visibile quando il 30% è visibile

  // Osserviamo ogni singolo elemento dell'header
  headerElements.forEach((el) => {
    observer.observe(el);
  });

  // Osserviamo ogni singolo elemento della parte sinistra
  leftElements.forEach((el) => {
    observer.observe(el);
  });

  // Osserviamo ogni singolo elemento della parte destra
  rightElements.forEach((el) => {
    observer.observe(el);
  });
});
