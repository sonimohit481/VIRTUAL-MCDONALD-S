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
    console.log(Qan)
    document.querySelector("#cartitems").innerText = "";
    document.querySelector("#cartprice").innerText = "";
    document.querySelector("#cartitems").append(Qan);
    document.querySelector("#cartprice").append(Price);
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
    //-------------------------------------------- 
    div.append(div2, div1, div3, div4)
    document.querySelector("#Cart").append(div);

})