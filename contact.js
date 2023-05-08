
let basket = JSON.parse(localStorage.getItem("data")) || []
console.log(basket)

let updateCounter = () =>{
    let basketQuantity = basket.map(x=>{
        return x.item
    })
    
    const counter = document.querySelector(".counter")
    const total =basketQuantity.reduce((a,b)=>a+b,0)
    counter.innerHTML = total
}

updateCounter()