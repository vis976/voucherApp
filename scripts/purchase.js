let user = JSON.parse(localStorage.getItem("user"))
console.log(user)

let wallet = document.getElementById("balance")
wallet.innerText = user.amount;