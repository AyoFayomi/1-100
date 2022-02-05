const sideBar = document.querySelector('.sidebar');
const toggleBTN = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');

toggleBTN.addEventListener("click", () => {
    sideBar.classList.toggle('show-sidebar')
})
closeButton.addEventListener("click", () => {
    sideBar.classList.remove('show-sidebar')
})