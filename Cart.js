let Cart = JSON.parse(localStorage.getItem("CartItems"));
function display() {
    let Cart = JSON.parse(localStorage.getItem("CartItems"));
    let Qan = Cart.reduce((acc, val) => {
        acc = acc + val.qan;
        return acc;

    }, 0)
    let Price = Cart.reduce((acc, val) => {
        acc = acc + +(val.price) * +(val.qan);
        return acc;
    }, 0)
    document.querySelector("#cartitems").innerText = "";
    document.querySelector("#cartprice").innerText = "";
    document.querySelector("#cartitems").append(Qan);
    document.querySelector("#cartprice").append(Price);
    if (Cart.length == 0) {
        document.querySelector("#Order").setAttribute('class', 'Order1')
    }
    if (Cart.length > 0) {
        document.querySelector("#Order").removeAttribute("class");
        // Placeorder();
    }

}
display();
Cart.map((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "items")
    div.setAttribute("key", `${ele.id}`)
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.img;
    div1.appendChild(img)
    let div2 = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = "Item: " + ele.name;
    div2.appendChild(name);
    let div3 = document.createElement("div");
    let price = document.createElement("p");
    price.innerText = "Rs: " + ele.price;
    div3.appendChild(price);
    //--------------------------------------------
    let div4 = document.createElement("div");
    let mbtn = document.createElement("button");
    mbtn.setAttribute("class", "minusBtn");
    mbtn.innerText = "-";
    let pbtn = document.createElement("button");
    pbtn.setAttribute("class", "plusBtn");
    pbtn.innerText = "+";
    let btn = document.createElement("button");
    btn.setAttribute("class", "mainBtn");
    btn.innerText = ele.qan;
    if (btn.innerText >= 5) {
        pbtn.style.display = "none";
    }
    mbtn.addEventListener("click", () => {
        btn.innerText = +(btn.innerText) - 1;
        if (btn.innerText < 5) {
            pbtn.style.display = "inline-block";
        }
        if (btn.innerText < 1) {
            let demo = JSON.parse(localStorage.getItem("CartItems"));
            Cart = demo.filter((item) => item.id !== ele.id);
            localStorage.setItem("CartItems", JSON.stringify(Cart));
            btn.style.display = "none";
            mbtn.style.display = "none";
            pbtn.style.display = "none";
            window.location.href = "/Cart.html";
        }
        else {
            let demo = JSON.parse(localStorage.getItem("CartItems"));
            for (let i in demo) {
                if (demo[i].id === ele.id) {
                    demo[i] = { ...demo[i], qan: +(btn.innerText) }
                    break;
                }
            }
            localStorage.setItem("CartItems", JSON.stringify(demo));
        }
        display();
    })
    pbtn.addEventListener("click", () => {
        let demo = JSON.parse(localStorage.getItem("CartItems"));
        for (let i in demo) {
            if (demo[i].id === ele.id) {
                demo[i] = { ...demo[i], qan: +(btn.innerText) + 1 }
                break;
            }
        }
        localStorage.setItem("CartItems", JSON.stringify(demo));
        btn.innerText = +(btn.innerText) + 1;
        if (btn.innerText >= 5) {
            pbtn.style.display = "none";
        }
        display();
    })
    div4.append(mbtn, btn, pbtn)
    div.append(div2, div1, div3, div4)
    document.querySelector("#Cart").append(div);

})
function Placeorder(event) {
    event.preventDefault();
    //----for removing the cart item visually
    document.querySelector("#Cart").remove();
    //----for removing the order button
    document.querySelector("#Order").setAttribute('class', 'Order1')

    let Cart = JSON.parse(localStorage.getItem("CartItems"));
    let Qan = Cart.reduce((acc, val) => {
        acc = acc + val.qan;
        return acc;

    }, 0)
    let Price = Cart.reduce((acc, val) => {
        acc = acc + +(val.price) * +(val.qan);
        return acc;
    }, 0)
    alert("soniiiii");
    let box = document.createElement("div");
    box.setAttribute("id", "OrderDisplay");
    let img = document.createElement("img");
    img.src = "https://cdn.dribbble.com/users/539024/screenshots/6142362/burger-dribble.gif";
    let msg = document.createElement("p");
    msg.innerText = "Your order is Preparing";
    let orderid = document.createElement("p");
    let id = Math.floor(Math.random() * (99999 - 999 + 1) + 999);
    orderid.innerText = "Your order no is " + id;
    box.append(img, msg, orderid);
    document.querySelector("#display").appendChild(box);
    let time = Math.floor(Math.random() * (10 - 4 + 1) + 4);
    time = time * 1000;
    console.log(time)
    setTimeout(() => {
        document.querySelector("#display").removeChild(box);
        let orderitem = document.createElement("p");
        orderitem.innerText = "Total-item: " + Qan;
        let orderprice = document.createElement("p");
        orderprice.innerText = "Total price to paid: ₹" + Price;
        let boxnew = document.createElement("div");
        boxnew.setAttribute("id", "OrderDisplay");
        let msg = document.createElement("p");
        msg.innerText = "thanks for wating. 🙏 please visit again";
        boxnew.append(orderitem, orderprice, msg);
        document.querySelector("#display").appendChild(boxnew);
        setTimeout(() => {
            Cart = [];
            localStorage.setItem("CartItems", JSON.stringify(Cart));
            window.location.href = "/index.html";
        }, 3000)

        // --------
    }, time);
}