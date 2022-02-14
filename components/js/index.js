const page = document.querySelector('#iframe');
const openPage = (pageName)=>{
    page.src=`${pageName.textContent.toLowerCase()}.html`;
}