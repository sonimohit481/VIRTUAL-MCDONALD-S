
const foodItems = [{
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1648698131/Item/6227D.png",
    name: "Classic Burger Meals",
    description: "Make your own classic favourite meal with a choice of 2 burgers; Large Fries and 2 Coke",
    price: 457,
    id: 1,
},
{
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1648534883/Item/6176D.png",
    name: "Indulgent Burger Meals",
    description: "Make your own Gourmet favourite meal with a choice of 2 burgers; Large Fries and 2 Coke",
    price: 590,
    id: 2,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1648624946/Item/65D.png",
    name: "McAloo Tikki Burger",
    description: "The World's favourite Indian burger! Crunchy potato and peas patty with delicious Tom Mayo & crunchy onions; now with Whole Wheat Bun",
    price: 49,
    id: 3,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1618586928/Item/5679.png",
    name: "Masala McEgg Burger",
    description: "Get your protein fix with the Masala McEgg Burger- steamed egg patty, topped with spicy masala seasoning, onions and habanero sauce",
    price: 50,
    id: 4,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1634224871/Item/3191.png",
    name: "Mexican McAloo Tikki Burger",
    description: "A burger with a fusion of international tastes- your favourite aloo tikki patty, layered with shredded onion, jalapeno, served with delicious Chipotle sauce",
    price: 55,
    id: 5,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1627994805/Item/3289.png",
    name: "Chicken Kebab Burger",
    description: "A flavourful burger with a chicken kebab patty combined with tangy rassam sauce and shredded onions",
    price: 81,
    id: 6,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466377/Item/66.png",
    name: "McVeggie Burger",
    description: "An everyday classic burger with a delectable patty filled with potatoes, carrots and tasty Indian spices; topped with crunchy lettuce and mayonaise.",
    price: 115,
    id: 7,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466276/Item/40.png",
    name: "McChicken Burger",
    description: "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite.",
    price: 120,
    id: 8,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466953/Item/3602.png",
    name: "American Cheese Supreme - Chicken Burger",
    description: "A burger with grilled chicken patty covered with a slice of cheese, a dollop of spicy habanero sauce, jalapeños and shredded onions.",
    price: 139,
    id: 9,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589467267/Item/74.png",
    name: "Big Spicy Paneer Wrap",
    description: "Rich & filling paneer patty coated in spicy crispy batter, topped with tom mayo sauce wrapped with lettuce, onions and cheese",
    price: 195,
    id: 10,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466424/Item/48.png",
    name: "Big Spicy Chicken Wrap",
    description: "Tender and juicy chicken patty coated in spicy, crispy batter, topped with a creamy sauce, wrapped with lettuce, onions, seasoning and cheese. A BIG indulgence.",
    price: 205,
    id: 11,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1646116938/Item/5664D.png",
    name: "McSaver Pizza McPuff",
    description: "Enjoy a snacking combo of Pizza McPuff and beverage of your choice, in a new, delivery friendly, reusable bottle.",
    price: 66,
    id: 12,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1646116938/Item/5658D.png",
    name: "McSaver Chicken Nuggets (4 Pc)",
    description: "Enjoy a snacking combo of Chicken McNuggets (4pc) and beverage of your choice, in a new, delivery friendly, reusable bottle.",
    price: 94,
    id: 13,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466859/Item/3144.png",
    name: "Mexican cheesy Fries",
    description: "The worlds best French Fries now served with delicious cheesy and spicy sauces",
    price: 122,
    id: 14,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466973/Item/3708.png",
    name: "Masala Wedges (M)",
    description: "Enjoy the Medium pack of deliciously crispy, 100% natural potatoes, cut into wedges and seasoned.",
    price: 96,
    id: 15,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466390/Item/67.png",
    name: "Veg Pizza McPuff",
    description: "Crispy brown crust with a generous filling of rich tomato sauce, mixed with carrots, bell peppers, beans, onions and mozzarella. Served HOT.",
    price: 45,
    id: 16,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466707/Item/421.png",
    name: "Soft Serve Strawberry (M)",
    description: "The cool vanilla soft serve ice cream with twirls of strawberry syrup.",
    price: 85,
    id: 17,
}, {
    img: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1642087175/Item/4.png",
    name: "Mcflurry Oreo",
    description: "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Share it, if you can.",
    price: 80,
    id: 18,
},
];
let Cart;
if (localStorage.getItem("CartItems")) {
    Cart = JSON.parse(localStorage.getItem("CartItems"));
    document.querySelector("#cartitem").innerText = Cart.length;
}
else {
    Cart = [];
}
let initial = {
    id: "",
    img: "",
    name: "",
    price: "",
    qan: "",
}
foodItems.forEach(ele => {
    let div = document.createElement("div");
    div.setAttribute("class", "items")
    div.setAttribute("key", `${ele.id}`)
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.img;
    div1.appendChild(img)
    let div2 = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = ele.name;
    div2.appendChild(name);
    let div3 = document.createElement("div");
    let desc = document.createElement("p");
    desc.innerText = ele.description;
    div3.appendChild(desc);
    let div4 = document.createElement("div");
    let price = document.createElement("p");
    price.innerText = "Rs:" + ele.price;
    div4.appendChild(price);
    let div5 = document.createElement("div");
    let mbtn = document.createElement("button");
    mbtn.setAttribute("class", "minusBtn");
    mbtn.innerText = "-";
    mbtn.style.display = "none";
    let btn = document.createElement("button");
    btn.setAttribute("class", "mainBtn");
    btn.innerText = "ADD";
    let pbtn = document.createElement("button");
    pbtn.setAttribute("class", "plusBtn");
    pbtn.innerText = "+";
    pbtn.style.display = "none";
    btn.addEventListener("click", () => {
        if (btn.innerText == "ADD") {
            initial = {
                id: ele.id,
                img: ele.img,
                name: ele.name,
                price: ele.price,
                qan: 1,
            }
            Cart.push(initial);
            localStorage.setItem("CartItems", JSON.stringify(Cart));
            btn.innerText = 1;
            mbtn.style.display = "inline-block";
            pbtn.style.display = "inline-block";
        }
    })
    mbtn.addEventListener("click", () => {
        btn.innerText = +(btn.innerText) - 1;
        if (btn.innerText < 5) {
            pbtn.style.display = "inline-block";
        }
        if (btn.innerText < 1) {
            let demo = JSON.parse(localStorage.getItem("CartItems"));
            Cart = demo.filter((item) => item.id !== ele.id);
            localStorage.setItem("CartItems", JSON.stringify(Cart));
            btn.innerText = "ADD";
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
    })
    div5.append(mbtn, btn, pbtn)
    div.append(div1, div2, div3, div4, div5)
    document.querySelector("#menuitems").append(div);

});