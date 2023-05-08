let basket = JSON.parse(localStorage.getItem("data")) || []

let updateCounter = () =>{
    let basketQuantity = basket.map(x=>{
        return x.item
    })
    
    const counter = document.querySelector(".counter")
    const total =basketQuantity.reduce((a,b)=>a+b,0)
    counter.innerHTML = total
}
updateCounter()

const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", function(){
    const navbarRight = document.querySelector(".navbar-right")
    navbarRight.classList.toggle("active")
})


const faqsList = [
    {question: "How to contact us?",
     id:1,
     answer: "Do look into our contact page for more information"
    },
    {question: "When should you expect to receive your delivery?",
     answer: "Usually it will take you 2-3 business working days for the order(s) to be delivered.",
     id:2,
    },
    {question: "How long is the product's warranty?",
     answer: "Certain products' warranty last for a month and some last for a year. Do contact us to clarify your enquiries",
     id:3,
    },

]

window.addEventListener("DOMContentLoaded", function(){
    displayQuestions()
})

const displayQuestions = () =>{
    let showQuestions = faqsList.map(item=>{
        return `
        <article class="question-container" id=${item.id}>
            <div class="question-line">
                <h3>${item.question}</h3>
                <div class="question-button">
                    <span class="plus" onclick=toDisplay(${item.id})><i class="fa fa-plus-square" aria-hidden="true"></i>
                    </span>
                    <span class="minus" onclick=toHide(${item.id})><i class="fa fa-minus-square" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="answer" >
            ${item.answer}
            </div>
        </article>
        `
    })

    showQuestions = showQuestions.join("")
    faqSection.innerHTML = showQuestions
}

const faqSection = document.querySelector(".faq-section")
const questionContainer = document.querySelectorAll(".question-container")


let toDisplay = (e) =>{
    console.log(e)
    console.log(faqsList)

    const abc = faqsList.filter(item=>{
        return item.id === e
    })

    console.log(abc[0].id)

    // const questionContainer = document.getElementById(e)
    // questionContainer.classList.add("active")

    faqsList.forEach(item=>{
        if(e === item.id){
            const questionContainer = document.getElementById(item.id)
            questionContainer.classList.add("active")
            console.log("work")

        } else {
            const questionContainer = document.getElementById(item.id)
            questionContainer.classList.remove("active")
            console.log("work")

        }
    })

}

let toHide = (e) =>{
    console.log(e)
    console.log(faqsList)

    const abc = faqsList.filter(item=>{
        return item.id === e
    })

    console.log(abc)

    const questionContainer = document.getElementById(e)
    questionContainer.classList.remove("active")


}