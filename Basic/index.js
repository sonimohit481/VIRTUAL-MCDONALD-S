// main data
let foodItems = [
  {
    id: 1,
    name: "Veg Surprise Burger",
    category: "Burgers",
    description:
      "A scrumptious potato patty topped with a delectable Italian herb sauce and shredded onions placed between perfectly toasted buns.",
    serving_size: "132g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "313.44kCal",
      protein: "5.71g",
      total_fat: "14.95g",
      saturated_fat: "3.73g",
      trans_fat: "0.14g",
      cholesterol: "0.0mg",
      total_carbohydrates: "39.84g",
      total_sugars: "5.66g",
      added_sugars: "1.64g",
      sodium: "504.19mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/veg-surprise-burger-1.png",
    price: 732,
    qan: 0,
  },
  {
    id: 2,
    name: "McAloo Tikki Burger®",
    category: "Burgers",
    description:
      "A golden fried vegetarian patty prepared with peas, potato and infused with aromatic spices. Clubbed with sliced tomatoes, shredded red onion, and tangy tomato mayonnaise. Served in a warm toasted bun.",
    serving_size: "146g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "339.52kCal",
      protein: "8.50g",
      total_fat: "11.31g",
      saturated_fat: "4.27g",
      trans_fat: "0.20g",
      cholesterol: "1.47mg",
      total_carbohydrates: "50.27g",
      total_sugars: "7.05g",
      added_sugars: "4.07g",
      sodium: "545.34mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/mcaloo-tikki-cheese.png",
    price: 485,
    qan: 0,
  },
  {
    id: 3,
    name: "McVeggie®",
    category: "Burgers",
    description:
      "A delectable patty made of green goodness, potatoes, peas, carrots and a selection of Indian spices. Topped with crispy lettuce, mayonnaise, and packed into sesame toasted buns.",
    serving_size: "168g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "402.05kCal",
      protein: "10.24g",
      total_fat: "13.83g",
      saturated_fat: "5.34g",
      trans_fat: "0.16g",
      cholesterol: "2.49mg",
      total_carbohydrates: "56.54g",
      total_sugars: "7.90g",
      added_sugars: "4.49g",
      sodium: "706.13mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/mc-veggie-single.png",
    price: 612,
    qan: 0,
  },
  {
    id: 4,
    name: "McChicken®",
    category: "Burgers",
    description:
      "Batter & breaded chicken patty containing green peas, carrots, green beans, onion, potatoes, rice and spices, served in a bun with eggless mayonnaise and lettuce.",
    serving_size: "173g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "400.80kCal",
      protein: "15.66g",
      total_fat: "15.70g",
      saturated_fat: "5.47g",
      trans_fat: "0.16g",
      cholesterol: "31.17mg",
      total_carbohydrates: "47.98g",
      total_sugars: "5.53g",
      added_sugars: "4.49g",
      sodium: "766.33mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/mcchicken-single.png",
    price: 298,
    qan: 0,
  },
  {
    id: 5,
    name: "McSpicy Paneer®",
    category: "Burgers",
    description:
      "Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping.",
    serving_size: "199g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "652.76kCal",
      protein: "20.29g",
      total_fat: "39.45g",
      saturated_fat: "17.12g",
      trans_fat: "0.18g",
      cholesterol: "21.85mg",
      total_carbohydrates: "52.33g",
      total_sugars: "8.35g",
      added_sugars: "5.27g",
      sodium: "1074.58mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/mcspicy-paneer-single.png",
    price: 843,
    qan: 0,
  },
  {
    id: 6,
    name: "McSpicy Chicken®",
    category: "Burgers",
    description:
      "Hot. In more ways than one. Zesty and redolent whole muscle leg meat patty: Fried to perfect golden tan; quenched with creamy veg mayo and garden-fresh shredded iceberg lettuce. The sandwich is served in fresh, sesame-studded quarter pounder bun.",
    serving_size: "186g",
    allergens: ["Egg", "Milk", "Soya"],
    nutrition: {
      energy: "451.92kCal",
      protein: "21.29g",
      total_fat: "19.45g",
      saturated_fat: "27.12g",
      trans_fat: "0.10g",
      cholesterol: "11.85mg",
      total_carbohydrates: "22.33g",
      total_sugars: "3.35g",
      added_sugars: "9.27g",
      sodium: "1074.58mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/mc-spicy-chicken-single.png",
    price: 567,
    qan: 0,
  },
  {
    id: 7,
    name: "Spicy Paneer Wrap®",
    category: "Wrap",
    description:
      "Unwrap deliciousness. Tender paneer patty with a fiery, crunchy batter coating; dressed with fresh veggies and seasonings; topped with creamy sauce; and a dash of mustard and melted cheese.",
    serving_size: "250g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "151.92kCal",
      protein: "20.29g",
      total_fat: "10.45g",
      saturated_fat: "17.12g",
      trans_fat: "0.21g",
      cholesterol: "19.85mg",
      total_carbohydrates: "12.33g",
      total_sugars: "1.35g",
      added_sugars: "7.27g",
      sodium: "1024.58mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/big-spicy-paneer-wrap-single.png",
    price: 421,
    qan: 0,
  },
  {
    id: 8,
    name: "Spicy Chicken Wrap®",
    category: "Wrap",
    description:
      "Familiar, yet different. Juicy chicken coated with hot and crispy batter; dressed with a fresh salad of lettuce, onions, tomatoes and seasonings. Served with creamy sauce and supple cheese slices.",
    serving_size: "257g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "567.19kCal",
      protein: "23.74g",
      total_fat: "26.89g",
      saturated_fat: "12.54g",
      trans_fat: "0.21g",
      cholesterol: "19.85mg",
      total_carbohydrates: "57.06g",
      total_sugars: "1.35g",
      added_sugars: "1.08g",
      sodium: "1114.58mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/big-spicy-chicken-wrap.png",
    price: 654,
    qan: 0,
  },
  {
    id: 9,
    name: "Chicken Maharaja Mac®",
    category: "Burger",
    description:
      "A royal treat. A double-decker toasted Maharaja bun sandwiched with one layer of flame-grilled chicken patty; crunchy iceberg lettuce; shredded onion; and a slice of cheese. Topped with another layer of flame-grilled chicken patty; tomato slices; and crunchy iceberg lettuce infused with harberno sauce.",
    serving_size: "296g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "689.12kCal",
      protein: "34.00g",
      total_fat: "36.69g",
      saturated_fat: "10.33g",
      trans_fat: "0.25g",
      cholesterol: "81.49mg",
      total_carbohydrates: "55.39g",
      total_sugars: "8.92g",
      added_sugars: "6.14g",
      sodium: "1854.71mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/maharaja-mac-chicken-single.png",
    price: 789,
    qan: 0,
  },
  {
    id: 10,
    name: "McEgg®",
    category: "Burger",
    description:
      "Because eggs are great any time of the day. Made with the freshest, warm, off-the-farm egg; steamed to perfection in our specialised steamer; and made tasty with a sprinkling of magic masala. Sandwiched between freshly toasted buns, topped off with creamy mayo and some crunchy onion.",
    serving_size: "115g",
    allergens: ["Cereal containing gluten", "Milk", "Egg", "Soya"],
    nutrition: {
      energy: "265.00kCal",
      protein: "12.00g",
      total_fat: "10.00g",
      saturated_fat: "0.80g",
      trans_fat: "0.10g",
      cholesterol: "76.88mg",
      total_carbohydrates: "31.00g",
      total_sugars: "5.00g",
      added_sugars: "1.60g",
      sodium: "675.00mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/mcegg.png",
    price: 234,
    qan: 0,
  },
  {
    id: 11,
    name: "Butter Paneer Grilled Burger",
    category: "Burger",
    description:
      "Dil se makhani burger. Mildly spiced grilled paneer patty topped with makhani sauce and shredded onions placed between freshly toasted sesame seeded buns.",
    serving_size: "142g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "382.26kCal",
      protein: "12.85g",
      total_fat: "17.15g",
      saturated_fat: "8.29g",
      trans_fat: "0.00g",
      cholesterol: "6.62mg",
      total_carbohydrates: "44.12g",
      total_sugars: "8.78g",
      added_sugars: "5.08g",
      sodium: "900.37mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/paneer-1.png",
    price: 912,
    qan: 0,
  },
  {
    id: 12,
    name: "Veg Maharaja Mac®",
    category: "Burger",
    description:
      "A feast fit for kings (and queens). A double-decker toasted Maharaja bun sandwiched with one layer of corn & cheese patty; crunchy iceberg lettuce; shredded onion; and a slice of cheese. Topped with another layer of corn & cheese patty; tomato slices; and crunchy iceberg lettuce infused with harberno sauce.",
    serving_size: "306g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "832.67kCal",
      protein: "24.17g",
      total_fat: "37.94g",
      saturated_fat: "16.83g",
      trans_fat: "0.28g",
      cholesterol: "36.19mg",
      total_carbohydrates: "93.84g",
      total_sugars: "11.52g",
      added_sugars: "6.92g",
      sodium: "1529.22mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/maharaja-mac-veg.png",
    price: 678,
    qan: 0,
  },
  {
    id: 13,
    name: "Pizza McPuff®",
    category: "Snack",
    description:
      "Something different. Something delicious. A blend of assorted vegetables (carrot, beans, capsicum, onion & green peas); mozzarella cheese mixed with tomato sauce; and exotic spices stuffed in rectangle shaped savoury dough. Quick frozen.",
    serving_size: "87g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "228.21kCal",
      protein: "5.45g",
      total_fat: "11.44g",
      saturated_fat: "5.72g",
      trans_fat: "0.09g",
      cholesterol: "5.17mg",
      total_carbohydrates: "24.79g",
      total_sugars: "2.73g",
      added_sugars: "0.35g",
      sodium: "390.74mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/pizza-mcpuff.png",
    price: 345,
    qan: 0,
  },
  {
    id: 14,
    name: "Chicken McNuggets®",
    category: "Snack",
    description:
      "Each bite is better than the last. Bite-sized pieces of breaded, boneless chicken formed in various shapes (Ball, Boot, Bell & Bone) fried and served hot with smoky Barbeque Sauce or Mustard Sauce.",
    serving_size: "64g | 96g | 144g | 320g",
    allergens: ["Cereal containing gluten"],
    nutrition: {
      energy: "169.68kCal",
      protein: "10.03g",
      total_fat: "9.544g",
      saturated_fat: "4.45g",
      trans_fat: "0.06g",
      cholesterol: "24.66mg",
      total_carbohydrates: "10.50g",
      total_sugars: "0.32g",
      added_sugars: "0.00g",
      sodium: "313.25mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/6pcs-chicken-nuggets.png",
    price: 456,
    qan: 0,
  },
  {
    id: 15,
    name: "Our World Famous Fries®",
    category: "Side",
    description:
      "The legend among legends. The crisp, craveable, fan favourite: our World Famous Fries®. These epic fries are crispy and golden on the outside and fluffy on the inside.",
    serving_size: "77g | 109g | 154g",
    allergens: [],
    nutrition: {
      energy: "224.59kCal",
      protein: "3.38g",
      total_fat: "10.39g",
      saturated_fat: "4.97g",
      trans_fat: "0.08g",
      cholesterol: "0.77mg",
      total_carbohydrates: "27.08g",
      total_sugars: "0.39g",
      added_sugars: "0.00g",
      sodium: "153.15mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/3-fries.png",
    price: 567,
    qan: 0,
  },
  {
    id: 16,
    name: "Pizza McPuff®",
    category: "Snack",
    description:
      "Something different. Something delicious. A blend of assorted vegetables (carrot, beans, capsicum, onion & green peas); mozzarella cheese mixed with tomato sauce; and exotic spices stuffed in rectangle shaped savoury dough. Quick frozen.",
    serving_size: "87g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "228.21kCal",
      protein: "5.45g",
      total_fat: "11.44g",
      saturated_fat: "5.72g",
      trans_fat: "0.09g",
      cholesterol: "5.17mg",
      total_carbohydrates: "24.79g",
      total_sugars: "2.73g",
      added_sugars: "0.35g",
      sodium: "390.74mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/1-pizza-mcpuff.png",
    price: 678,
    qan: 0,
  },
  {
    id: 17,
    name: "McFlurry (Oreo)®",
    category: "Dessert",
    description: "Milk-based frozen dessert with oreo cookies.",
    serving_size: "86.79g | 147.38g",
    allergens: ["Cereal containing gluten", "Milk", "Soya", "Sulphites"],
    nutrition: {
      energy: "116.36kCal",
      protein: "2.05g",
      total_fat: "3.70g",
      saturated_fat: "2.25g",
      trans_fat: "0.07g",
      cholesterol: "4.80mg",
      total_carbohydrates: "18.69g",
      total_sugars: "14.49g",
      added_sugars: "10.80g",
      sodium: "80.73mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/1-mcflurry-oreo.png",
    price: 789,
    qan: 0,
  },
  {
    id: 18,
    name: "McFlurry (Choco Crunch)®",
    category: "Dessert",
    description:
      "Milk-based frozen dessert with chocolate crispies and chocolate dip.",
    serving_size: "94.29g | 167.38g",
    allergens: ["Milk", "Soya"],
    nutrition: {
      energy: "115.19kCal",
      protein: "2.62g",
      total_fat: "5.39g",
      saturated_fat: "3.91g",
      trans_fat: "0.07g",
      cholesterol: "5.37mg",
      total_carbohydrates: "23.67g",
      total_sugars: "17.36g",
      added_sugars: "13.04g",
      sodium: "57.80mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/2-mcflurry-oreo-choco-crunch.png",
    price: 890,
    qan: 0,
  },
  {
    id: 19,
    name: "Soft Serve Cone®",
    category: "Dessert",
    description: "Creamy vanilla soft-serve on a cone.",
    serving_size: "81.29g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "85.73kCal",
      protein: "1.99g",
      total_fat: "1.82g",
      saturated_fat: "1.31g",
      trans_fat: "0.05g",
      cholesterol: "4.75mg",
      total_carbohydrates: "15.23g",
      total_sugars: "10.68g",
      added_sugars: "6.99g",
      sodium: "40.78mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/3-soft-serve-cone.png",
    price: 901,
    qan: 0,
  },
  {
    id: 20,
    name: "McSwirl Chocolate®",
    category: "Dessert",
    description: "Delightful soft-serve with a delectable chocolate topping.",
    serving_size: "93.29g",
    allergens: ["Cereal containing gluten", "Milk", "Soya"],
    nutrition: {
      energy: "160.14kCal",
      protein: "2.71g",
      total_fat: "7.14g",
      saturated_fat: "5.25g",
      trans_fat: "0.07g",
      cholesterol: "5.71mg",
      total_carbohydrates: "20.92g",
      total_sugars: "15.39g",
      added_sugars: "11.31g",
      sodium: "51.31mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/4-mcswirl-cone.png",
    price: 123,
    qan: 0,
  },
  {
    id: 21,
    name: "Sundae (Chocolate)®",
    category: "Dessert",
    description:
      "Creamy vanilla soft-serve topped with thick and rich hot fudge.",
    serving_size: "91.79g | 132.08g",
    allergens: ["Milk"],
    nutrition: {
      energy: "121.64kCal",
      protein: "2.25g",
      total_fat: "4.02g",
      saturated_fat: "3.01g",
      trans_fat: "0.08g",
      cholesterol: "5.85mg",
      total_carbohydrates: "19.11g",
      total_sugars: "17.07g",
      added_sugars: "10.78g",
      sodium: "65.56mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/5-sundae-chocolate.png",
    price: 234,
    qan: 0,
  },
  {
    id: 22,
    name: "Sundae (Strawberry)®",
    category: "Dessert",
    description: "Creamy vanilla soft-serve with strawberry topping.",
    serving_size: "91.79g | 132.08g",
    allergens: ["Milk"],
    nutrition: {
      energy: "100.99kCal",
      protein: "1.54g",
      total_fat: "1.77g",
      saturated_fat: "1.30g",
      trans_fat: "0.06g",
      cholesterol: "4.85mg",
      total_carbohydrates: "19.78g",
      total_sugars: "17.66g",
      added_sugars: "12.49g",
      sodium: "34.51mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/6-sundae-strawberry.png",
    price: 345,
    qan: 0,
  },
  {
    id: 23,
    name: "Sundae (Chocolate Brownie)®",
    category: "Dessert",
    description:
      "An iconic premium dessert option. Can be bought as an add-on to make it a 'full meal' or simply as an indulgence.",
    serving_size: "110.79g | 155.08g",
    allergens: ["Cereal containing gluten", "Milk", "Nuts"],
    nutrition: {
      energy: "205.26kCal",
      protein: "3.20g",
      total_fat: "5.45g",
      saturated_fat: "3.65g",
      trans_fat: "0.10g",
      cholesterol: "6.04mg",
      total_carbohydrates: "35.26g",
      total_sugars: "20.75g",
      added_sugars: "14.39g",
      sodium: "100.89mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/7-sundae-chocolate-browny.png",
    price: 456,
    qan: 0,
  },
  {
    id: 24,
    name: "Black Coffee®",
    category: "Beverage",
    description: "Perfectly brewed for any time of the day.",
    serving_size: "200ml",
    allergens: [],
    nutrition: {
      energy: "6.80kCal",
      protein: "0.00g",
      total_fat: "0.00g",
      saturated_fat: "0.00g",
      trans_fat: "0.00g",
      cholesterol: "0.00mg",
      total_carbohydrates: "1.70g",
      total_sugars: "0.00g",
      added_sugars: "0.00g",
      sodium: "0.00mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/1-coffee-large-1.png",
    price: 567,
    qan: 0,
  },
  {
    id: 25,
    name: "Cold Coffee®",
    category: "Beverage",
    description:
      "A rich smooth creamy cold coffee made with coffee powder and milk.",
    serving_size: "250ml",
    allergens: ["Milk"],
    nutrition: {
      energy: "301.10kCal",
      protein: "9.75g",
      total_fat: "11.15g",
      saturated_fat: "7.45g",
      trans_fat: "0.00g",
      cholesterol: "27.40mg",
      total_carbohydrates: "40.20g",
      total_sugars: "37.50g",
      added_sugars: "21.25g",
      sodium: "175.00mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/cold-coffee.png",
    price: 678,
    qan: 0,
  },
  {
    id: 26,
    name: "Iced Tea®",
    category: "Beverage",
    description: "A blend of aromatic tea and the fruity flavour of lemon.",
    serving_size: "400ml",
    allergens: [],
    nutrition: {
      energy: "91.20kCal",
      protein: "0.20g",
      total_fat: "0.00g",
      saturated_fat: "0.00g",
      trans_fat: "0.00g",
      cholesterol: "0.00mg",
      total_carbohydrates: "22.80g",
      total_sugars: "19.80g",
      added_sugars: "15.40g",
      sodium: "30.20mg",
    },
    image:
      "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/3-iced-tea.png",
    price: 789,
    qan: 0,
  },
];
let Cart;
if (localStorage.getItem("CartItems")) {
  Cart = JSON.parse(localStorage.getItem("CartItems"));
} else {
  Cart = [];
}
let initial = {
  id: "",
  img: "",
  name: "",
  price: "",
  qan: "",
};
foodItems.forEach((ele) => {
  let div = document.createElement("div");
  div.setAttribute("class", "items");
  div.setAttribute("key", `${ele.id}`);
  let div1 = document.createElement("div");
  let img = document.createElement("img");
  img.src = ele.image;
  div1.appendChild(img);
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

  let btn = document.createElement("button");
  btn.setAttribute("class", "mainBtn");
  btn.innerText = "ADD";
  btn.addEventListener("click", () => {
    let initial = {
      id: ele.id,
      img: ele.image,
      name: ele.name,
      price: ele.price,
      qan: 1,
    };
    Cart.push(initial);
    localStorage.setItem("CartItems", JSON.stringify(Cart));
    alert(
      `${ele.name} is added to the cart pleasecheck cart for further queries`
    );
    btn.style.display = "none";
  });

  div5.appendChild(btn);
  div.append(div1, div2, div3, div4, div5);
  document.querySelector("#menuitems").append(div);
});
