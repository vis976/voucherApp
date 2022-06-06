
let user = JSON.parse(localStorage.getItem("user"))
// console.log(user)

let wallet = document.getElementById("wallet_balance")
wallet.innerText = user.amount;

const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`


fetch(url).then (function (res){
    return res.json()
}).then(function(res){
       console.log(res)
      append(res[0].vouchers)
}).catch(function(err){
    console.log(err)
})

 let data = JSON.parse(localStorage.getItem("purchase")) || []

function append(vouchers){
    console.log(vouchers)
vouchers.map(function(ele){

    let container = document.createElement("div")
    container.setAttribute("class","voucher_list")
    let card = document.createElement("div")
    card.setAttribute("class","voucher")
    let img = document.createElement("img")
    img.setAttribute("class","img")
    img.src = ele.image
    let name = document.createElement("p")
    name.innerText = ele.name
    // console.log(name)
    let price = document.createElement("p")
    price.innerText = ele.price
    let btn = document.createElement("button")
    btn.innerText = "Buy"
    btn.setAttribute("class","buy_voucher")
    // btn.addEventListener("click" function(){
    //     addPurchase(ele)
    // })
    
    card.append(img,name,price,btn)
    container.append(card)
})

}

// function addPurchase(ele){

// }

