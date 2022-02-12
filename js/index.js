//Method to close Alert
function closeAlert(elem) {
  elem.parentNode.classList.add("alert-hide");
  setTimeout(() => {
    elem.parentNode.style.display = "none";
    elem.parentNode.classList.remove("alert-hide");
  }, 300);
}
//Slider
const slider = document.querySelector("#slider");
const output = document.querySelector("#slider-value");
output.textContent = slider.value;

slider.oninput = function () {
  output.textContent = this.value;
};
