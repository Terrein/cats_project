
const boxForCards = document.querySelector('main')

const addCard = (cat) => {
    const card = document.createElement('div')
    card.className = `${cat.favourite ? 'card like' : 'card disLike'}`
    card.innerHTML = `<span>${cat.name}</span>`
    boxForCards.appendChild(card)
    const width = card.offsetWidth
    card.style.height = width * 0.6 + "px";
    card.style.backgroundImage = `url(${cat.img_link})`
}

const renderCards = () => cats.forEach(addCard)

renderCards()

let addBtn = document.querySelector("#add");
let popupForm = document.querySelector("#popup-form");
let closePopupForm = popupForm.querySelector(".popup-close");
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!popupForm.classList.contains("active")) {
        popupForm.classList.add("active");
        popupForm.parentElement.classList.add("active");
    }
});
closePopupForm.addEventListener("click", () => {
    popupForm.classList.remove("active");
    popupForm.parentElement.classList.remove("active");
})

const form = document.querySelector('form')
const getFormValue = (event) => {
    event.preventDefault()
    const id = form.querySelector('[name = "id"]')
    const age = form.querySelector('[name = "age"]')
    const name = form.querySelector('[name = "name"]')
    const rate = form.querySelector('[name = "rate"]')
    const description = form.querySelector('[name = "description"]')
    const favorite = form.querySelector('[name = "favourite"]')
    const img_link = form.querySelector('[name = "img_link"]')
    const data = {
        "name": name.value,
        "img_link": img_link.value,
        "age": age.value,
        "rate": rate.value,
        "favourite": favorite.checked,
        "description": description.value,
        "id": id.value
    }
    cats.push(data)
    addCard(data)
    popupForm.classList.remove("active");
    popupForm.parentElement.classList.remove("active");
    form.reset()
}
form.addEventListener('submit', getFormValue)
