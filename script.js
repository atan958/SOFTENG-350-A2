const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const openModal = () => {
    modal.style.transition= "0.5s ease";
    modal.style.zIndex = "5";
    modal.style.opacity = "1";
    modalContent.style.opacity = "1";
    modalContent.style.margin = "10vh auto auto auto";
}

const closeModal = () => {
    modal.style.transition= "1s ease";
    modal.style.zIndex = "-5";
    modal.style.opacity = "0";
    modalContent.style.opacity = "0";
    modalContent.style.margin = "0vh auto auto auto";
}


const formSubmit = document.getElementById("form-submit");

formSubmit.onSubmit = (e) => {
    e.preventDefault();
}