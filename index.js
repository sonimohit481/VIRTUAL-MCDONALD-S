
const food = [
    {
        id: 1,
        price: "90",
        name: "CHICKEN KABAB BURGER",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600x6001pix-Chicken-Kebab-Burger.png"
    }, {
        id: 2,
        price: "70",
        name: "MEXICAN MCALOO TIKKI",
        img: "https://www.mcdonaldsindia.com/images/products/new/Website-600-600-pix-Mexican-McAloo-Tikki-Burger.png"
    }, {
        id: 3,
        price: "102",
        name: "Big Mac",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop"
    }, {
        id: 4,
        price: "200",
        name: "Quater pound Chese BURGER",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-qpc-bacon-burger:1-4-product-tile-desktop"
    },
    {
        id: 5,
        price: "180",
        name: "Dobule chess BURGER",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-4-product-tile-desktop"
    },
    {
        id: 6,
        price: "150",
        name: "Sausage Barito",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Burrito-1:1-4-product-tile-desktop"
    }, {
        id: 7,
        price: "120",
        name: "Fruit & maple",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Fruit-Maple-Oatmeal-1:1-4-product-tile-desktop"
    }, {
        id: 8,
        price: "110",
        name: "Bacon & EGG",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-McGriddles:1-4-product-tile-desktop"
    },
    {
        id: 9,
        price: "150",
        name: "Vanila Cone",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:1-4-product-tile-desktop"
    },
    {
        id: 10,
        price: "160",
        name: "Baked Apple BROWN",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:1-4-product-tile-desktop"
    },
]
var i = 1;
food.forEach(ele => {
    var div = document.createElement("label");
    div.setAttribute("class", "items")
    div.setAttribute("key", `${ele.id}`)
    div.innerHTML = `<img  src="${ele.img}" alt="">
                        <h3>${ele.name}</h3>
                        <h3>Price :${ele.price}</h3>
                        <input type="checkbox" name="ord" value="${ele.name}"  class="Box" Onchange=order()>`
    document.querySelector("#myform").append(div);

});
let cart;
if (localStorage.getItem("food")) {
    cart = JSON.parse(localStorage.getItem("food"));

}
function order() {
    // var array = [];
    // var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    // for (var checkbox of markedCheckbox) {
    //     array.push(checkbox.value)
    // }
    // var div = document.createElement("div");
    // var img = document.createElement("img");
    // img.src = "https://i.gifer.com/ZZ5H.gif";
    // var p = document.createElement("p");
    // p.innerText = "Order is being prepared";
    // div.append(img, p);
    // document.querySelector(".loding").setAttribute("id", "loding")
    // document.querySelector(".loding").append(div);
    // var x = Math.floor(Math.random() * 10000 + 1000)


    // setTimeout(() => {
    //     document.querySelector(".loding").removeAttribute("id", "loding")


    //     var div = document.createElement("div");
    //     div.append("order id is :" + x);
    //     for (var i = 0; i < array.length; i++) {
    //         var p = document.createElement("p");
    //         p.innerText = " order: " + array[i];
    //         div.append(p);

    //     }
    //     var p = document.createElement("p");
    //     p.innerText = "thanks for visiting ";
    //     div.append(p);

    //     document.querySelector(".display").append(div);
    //     document.querySelector(".display").setAttribute("id", "display");


    //     setTimeout(() => {

    //         document.querySelector(".display").removeAttribute("id", "display");
    //         window.location.reload();

    //     }, 3000);

    // }, 3000)
}