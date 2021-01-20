// mostramos la ventana
function showModal() {
    let nodeModalWindow = document.querySelector(".modal-window");
    nodeModalWindow.classList.add("modal-window--show");
    nodeModalWindow.classList.remove("modal-window--hide");

    // difuminamos el botón
    let nodeWindow = document.querySelector("#modal-open");
    nodeWindow.classList.add("modal-open--hide");
    nodeWindow.classList.remove("modal-open--show");
}

// ocultamos la ventana
function closeModal() {
    let nodeModalWindow = document.querySelector(".modal-window");
    nodeModalWindow.classList.add("modal-window--hide");
    nodeModalWindow.classList.remove("modal-window--show");

    // mostramos el botón
    let nodeWindow = document.querySelector("#modal-open");
    nodeWindow.classList.add("modal-open--show");
    nodeWindow.classList.remove("modal-open--hide");
}