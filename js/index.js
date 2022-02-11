//Method to close Alert
function closeAlert(elem){
    elem.parentNode.classList.add('alert-hide');
    setTimeout(()=>{
        elem.parentNode.style.display = 'none';
    elem.parentNode.classList.remove('alert-hide');
    
    
    },300)
    }
//Slider
const slider = document.querySelector("#slider");
const output = document.querySelector("#slider-value");
output.textContent = slider.value; 

slider.oninput = function() {
  output.textContent = this.value;
}



//Modal
const modal = document.querySelector("#modal");

var openModal = document.querySelector("#open-modal");

var close = document.querySelector("#close");

openModal.onclick = function() {
//   modal.style.display = "block";
  modal.classList.add('modal-open')

}

close.onclick = function() {
//   modal.style.display = "none";
  modal.classList.remove('modal-open')


 
}

window.onclick = function(event) {
  if (event.target == modal) {
    // modal.style.display = "none";
  modal.classList.remove('modal-open')

  }
}