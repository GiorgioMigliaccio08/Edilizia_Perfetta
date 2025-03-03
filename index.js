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

  const feedbackHeader = document.querySelector(".feedback-section h2");
  const feedbackCards = document.querySelectorAll(
    ".feedback-section .feedback-card"
  );

  const blogTitle = document.querySelector(".down h2");
  const blogText = document.querySelector(".down p");
  const blogCEO = document.querySelector(".down .text");

  const logos = document.querySelectorAll(".loghi img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  headerElements.forEach((el) => observer.observe(el));
  leftElements.forEach((el) => observer.observe(el));
  rightElements.forEach((el) => observer.observe(el));
  bottomElements.forEach((el) => observer.observe(el));

  observer.observe(feedbackHeader);
  feedbackCards.forEach((el) => observer.observe(el));

  observer.observe(blogTitle);
  observer.observe(blogText);
  observer.observe(blogCEO);

  logos.forEach((el) => observer.observe(el));
});
