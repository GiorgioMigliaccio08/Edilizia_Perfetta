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
