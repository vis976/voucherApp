
let user = JSON.parse(localStorage.getItem("user"))
// console.log(user)

let wallet = document.getElementById("wallet_balance")
wallet.innerText = user.amount;

let data = JSON.parse(localStorage.getItem("purchase")) || []


const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
async function getData() {
    try{
        let res = await fetch(url)
        let data = await res.json()
        append(data[0].vouchers)

    }
    catch(err){
        console.log(err)
    }
}
    getData()

    function append(data) {
        let container = document.createElement("div")
        container.setAttribute("class","voucher_list")
        
        data.map(function(ele){
       
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
    


// fetch(url).then (function (res){
//     return res.json()
// }).then(function(res){
//        console.log(res)
//       append(res[0].vouchers)
// }).catch(function(err){
//     console.log(err)
// })



// function addPurchase(ele){

// }

