

const nav = document.querySelectorAll("li")
const lineBar = document.querySelectorAll(".line-bar")


nav.forEach((el) => {
    
    el.addEventListener("mouseover", () => {
       const line= el.querySelector(".line-bar")
       line.classList.add("a-active")
       
    })
})


nav.forEach((el) => {
    el.addEventListener("mouseout", () => {
        const line= el.querySelector(".line-bar")
        line.classList.remove("a-active")
        
     })
})
