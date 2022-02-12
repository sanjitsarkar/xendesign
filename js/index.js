//Method to close Alert
function closeAlert(elem){
    elem.parentNode.classList.add('alert-hide');
    setTimeout(()=>{
        elem.parentNode.style.display = 'none';
    elem.parentNode.classList.remove('alert-hide');
    
    
    },300)
    }