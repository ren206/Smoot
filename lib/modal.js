const modal = document.getElementById('instructions');
const spanToCloseModal = document.getElementsByClassName('close-modal')[0];

const closeModal = () => {
  modal.style.display = "none";
}
spanToCloseModal.onclick = closeModal;

window.onclick = event => {
    if (event.target === modal) {
      closeModal();
    };
};
window.keypress = event => {
    if (event.target === modal) {
      closeModal();
    };
};
