let cart = JSON.parse(localStorage.getItem("food"));
let p = cart.reduce((pre, curr) => pre + Number(curr.price), 0);
alert(p);
// localStorage.clear();
cart.map((ele) => {
    var div = document.createElement("div");
    div.setAttribute("key", `${ele.id}`)
    var h3 = document.createElement("h3");
    h3.innerText = ele.name;
    var p = document.createElement("p");
    p.innerText = "Rs:" + ele.price;
    var button = document.createElement("button");
    button.innerText = "Place Order";
    button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Order placed successfully");
    });
    div.append(h3, p, button)
    document.querySelector("#Cart").append(div);
})