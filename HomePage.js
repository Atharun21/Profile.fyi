let namee=document.getElementById("name")
let username=localStorage.getItem("username")
console.log(username)
namee.innerText=username

let usericon=document.getElementById("usericon-div")
usericon.addEventListener("click",(e)=>{
    e.preventDefault()
    open("\Profile.html", "_self")
})


let fetchData= async() =>{
    let data = await fetch("https://fakestoreapi.com/products")
    let fianlData = await data.json()
    let container = document.getElementById("card_container")
    fianlData.forEach((ele) => {
        
        container.innerHTML +=`
        <main class="card">
        <img src=${ele.image}
        <b><span>${ele.title}</span></b>
        <p>${ele.description.slice(0,100)}</p>
        <b>Rs : ${ele.price}</b>
        <button onclick="addToCart('${ele.title}',${ele.price})">Add To Cart</button>
        </main>
        `
    });
}

fetchData()

let cart_val = document.getElementById("cart_val")
let count=0;
let cart=[]
let addToCart=(productTitle, productPrice)=>{

    count++;
    cart_val.innerText=count

    let finalObj = {
        "name":productTitle,
        "price":productPrice
    }
    cart.push(finalObj)

}


let mainContaner =  document.getElementById("main")
cart.forEach((ele)=>{
    mainContaner+=`
    <main class="cart-card">
    <h1>${ele.name}</h1>
    <h1>${ele.price}</h1>
    </main>
    
    `
    console.log(ele.name)
    console.log(mainContaner)
})




// let fetchData = async () => {
//     let data = await fetch("https://fakestoreapi.com/products")
//     let finalData = await data.json()
//     let container = document.getElementById("card_container")
//     finalData.forEach((ele) => {

//         container.innerHTML += `
//         <main class="card">
//         <img src=${ele.image}> 
//         <h1>${ele.title}</h1>
//         <p>${ele.description.slice(0, 100)}</p>
//         <b>${ele.price}</b>
//         <button onclick='addToCart("${ele.title}", ${ele.price})'>ADD TO CART</button>
//         </main>
//         `
//     })
// }
// fetchData()
// let count = 0;
// let cart = []
// let cartPrice = []
// let cart_value = document.getElementById("cart_val")
// let addToCart = (productTitle, productPrice) => {
//     // console.log(productPrice)
//     // console.log(productTitle)
//     count++
//     cart_value.innerText = count
//     let finalObj = {
//         name: productTitle,
//         price: productPrice
//     }
//     cart.push(finalObj)
//     let cartItems = document.getElementById("cart_items")
//     cartPrice.push(cart[cart.length - 1].price)
//     let finalPrice = cartPrice.reduce((storage, ele) => {
//         return storage += ele
//     })
//     cartItems.innerHTML += `
//     <h1>${cart[cart.length - 1].name} <span>${cart[cart.length - 1].price}</span></h1>
//     `
//     let priceContainer = document.querySelector("#price_container")
//      priceContainer.innerHTML=`
//      <p>Your Total Price is:${finalPrice}</p>
//     `
//     cartItems.style.display = "block"
// }