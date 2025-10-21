
// YOUTUBE SUBSCRIBE BUTTON
const subBtnElement = document.querySelector("#btn-sub");

subBtnElement.addEventListener('click', () => {
    subBtnElement.classList.toggle('is-subscribed');
    if (subBtnElement.classList.contains('is-subscribed')) {
        subBtnElement.innerHTML = "Subscribed"
    } else {
        subBtnElement.innerHTML = "Subscribe"
    }
})



// AMAZON SHIPPING

const btnCalculate = document.querySelector(".btn-calculate");
const orderCost = document.querySelector(".order-cost")
const orderTotal = document.querySelector(".order-total")

btnCalculate.addEventListener('click', () => {
    calculateTotal()
})

orderCost.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateTotal()
    }
});

function calculateTotal() {
    cost = Number(orderCost.value)
    if (cost < 40) {
        cost += 10;
    }
    orderTotal.innerHTML = `Total with shipping: $${cost}`;
}









// Button class toggles, adding, etc with classList

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")


btn1.addEventListener('click', () => {
    btn1.classList.toggle("is-active");
    btn1.classList.toggle("btn-primary");
})

btn2.addEventListener('click', () => {
    btn2.classList.remove("btn-primary");
})

btn3.addEventListener('click', () => {
    btn3.classList.toggle("squared")
})