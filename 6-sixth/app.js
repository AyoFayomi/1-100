const modal = document.querySelector('.modal-overlay');
const btn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

const modalContent = btn.addEventListener('click', () =>{
    return modal.classList.add("open-modal");
})

const closeModal = closeBtn.addEventListener('click', () =>{
    return modal.classList.remove("open-modal");
})