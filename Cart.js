let Cart = JSON.parse(localStorage.getItem("CartItems"));
Cart.map((ele) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = ele.name;
    let p = document.createElement("p");
    p.innerText = "Rs:" + ele.price;
    div.append(h3, p,)
    document.querySelector("#Cart").append(div);
})