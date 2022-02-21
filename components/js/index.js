const page = document.querySelector('#iframe');
const topList = document.querySelector('ul#top-list');
const bottomList = document.querySelector('ul#bottom-list');

//Method to open component page
const openPage = (e)=>{
    let page = e.target.textContent.toLowerCase()
    if(page==="installation")
        page="index";
    window.location.href=`${page}.html`;
}

topList.addEventListener("click",openPage);
bottomList.addEventListener("click",openPage);

const menu = document.querySelector("button.menu");
const sideBar = document.querySelector("aside.sidebar");
//Method to toogle sidebar
menu.addEventListener("click",()=>{
sideBar.classList.toggle("show");
})
