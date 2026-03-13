const prices={
"Ao":150000,
"Quan":200000,
"Giay":500000
}

const product=document.getElementById("product")
const qty=document.getElementById("qty")
const total=document.getElementById("total")

product.addEventListener("change",updateTotal)
qty.addEventListener("input",updateTotal)

function updateTotal(){

let p=product.value
let q=Number(qty.value)

if(prices[p]){

let money=prices[p]*q

total.textContent=money.toLocaleString("vi-VN")+" VND"

}

}