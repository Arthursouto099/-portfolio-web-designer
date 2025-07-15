

const nav = document.querySelectorAll("li")
const body = document.querySelector("body")
const lineBar = document.querySelectorAll(".line-bar")
const mobile = document.querySelector(".menu-mobile")
const menuMobile = document.querySelector(".float-nav")


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



mobile.addEventListener("click", () =>{


  if(menuMobile.classList.contains("active-menu")) {
    menuMobile.classList.remove("active-menu")
    return
  }

  menuMobile.classList.add("active-menu")
  
})