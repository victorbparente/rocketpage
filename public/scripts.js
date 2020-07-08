const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function(){
        const courseId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `http://rocketseat.com.br/${courseId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", function() {
    const maximize = modal.classList.contains("maximize")
    
    if (maximize) {
        modal.classList.remove("maximize")
        modal.querySelector("#max-icon").textContent = "check_box_outline_blank"
    } else {
        modal.classList.add("maximize")
        modal.querySelector("#max-icon").textContent = "maximize"
    }
})