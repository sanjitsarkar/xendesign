//Method to close Alert
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function closeAlert(elem){
=======
function closeAlert(elem) {
>>>>>>> feature/button
    elem.parentNode.classList.add('alert-hide');
    setTimeout(() => {
        elem.parentNode.style.display = 'none';
<<<<<<< HEAD
    elem.parentNode.classList.remove('alert-hide');
    
    
    },300)
    }
=======
=======
>>>>>>> feature/card
>>>>>>> feature/image
function closeAlert(elem) {
  elem.parentNode.classList.add("alert-hide");
  setTimeout(() => {
    elem.parentNode.style.display = "none";
    elem.parentNode.classList.remove("alert-hide");
  }, 300);
}
<<<<<<< HEAD
//Slider
const slider = document.querySelector("#slider");
const output = document.querySelector("#slider-value");
output.textContent = slider.value;

slider.oninput = function () {
  output.textContent = this.value;
};

=======
<<<<<<< HEAD
>>>>>>> feature/button
=======
        elem.parentNode.classList.remove('alert-hide');
    }, 300)
}
>>>>>>> feature/button
=======
>>>>>>> feature/card
>>>>>>> feature/image
