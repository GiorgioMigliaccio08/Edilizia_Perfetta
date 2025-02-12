document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = document.getElementById("selected-language");
  const languageOptions = document.querySelectorAll(".dropdown li");

  languageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      selectedLanguage.textContent = this.textContent.split(" ")[1];
    });
  });
});
