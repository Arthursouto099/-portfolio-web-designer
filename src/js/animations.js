const projectCard = document.querySelector(".area-projects")



const myObserver = new  IntersectionObserver((entries, observer) => {
    const card = document.querySelectorAll(".project-card")
    entries.forEach((value) => {
     if(value.isIntersecting)  {


        card.forEach((item) => {
            if(item.classList.contains("project-card-r")) {
                item.classList.add("project-card-active-r")
                return
            }



            item.classList.add("project-card-active")

        })


     }



     else {
        card.forEach((item) => {
            if(item.classList.contains("project-card-r")) {
                item.classList.remove("project-card-active-r")
                return
            }

            item.classList.remove("project-card-active")

        })

     }

    })
})



// const observerCards = new IntersectionObserver((entries, observer) => {
//     entries.forEach((v) => {
//         if (v.isIntersecting) {

//             document.querySelectorAll(".project-card").forEach((card) => {
//                 card.classList.add("project-card-active")
//             })


//         }

//         else {
//             document.querySelectorAll((item) => {
//                 item.classList.remove("project-card-active")

//             })
//         }
//     })
// })


// document.querySelectorAll(".project-card").forEach((i) => {
//     observerCards.observe(i)
// })


// observerCards.observe(document.querySelector(".project-card"))

myObserver.observe(projectCard)