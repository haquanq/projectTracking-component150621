const ham_btn = document.querySelector(".head__nav__ham")
const menu_bg = document.querySelector(".navmenu")
const menu = document.querySelector(".navmenu__container")
let openState = false

ham_btn.addEventListener("click", () => {
    if (openState == false) {
        ham_btn.classList.add("open")
        menu_bg.style.display = "flex"
        setTimeout(() => menu_bg.style.width = "100%", 30)
        setTimeout(() => menu.style.display = "initial", 300)
        setTimeout(() => menu.style.opacity = 1, 330)
        openState = true
    } else {
        setTimeout(() => menu.style.opacity = null, 0)
        setTimeout(() => menu.style.display = null, 300)
        setTimeout(() => menu_bg.style.width = null, 300)
        setTimeout(() => menu_bg.style.display = null, 800)
        ham_btn.classList.remove("open")
        openState = false
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        setTimeout(() => menu.style.opacity = null, 0)
        setTimeout(() => menu.style.display = null, 300)
        setTimeout(() => menu_bg.style.width = null, 300)
        setTimeout(() => menu_bg.style.display = null, 800)
        ham_btn.classList.remove("open")
        openState = false
    }
})