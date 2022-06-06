function submit() {

obj = {

name : document.getElementById("name").value,
email : document.getElementById("email").value,
address : document.getElementById("address").value,
amount : document.getElementById("amount").value,    

}

localStorage.setItem("user",JSON.stringify(obj))
console.log(obj)


document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("address").value = "";
document.getElementById("amount").value = "";

}