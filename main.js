document
  .querySelector(".navbar__mobile")
  .addEventListener("change", function () {
    let target = this.value;
    if (target) {
      window.location.hash = target;
    }
  });
