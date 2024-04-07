const checkboxes = document.querySelectorAll(".checkbox-rounded");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const label = this.parentElement;
    if (this.checked) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  });
});
