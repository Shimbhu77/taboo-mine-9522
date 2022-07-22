import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML = navbar();


import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML = navbar2();
import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML = footer();

// clicking on image 
// document.querySelector("#imglogo").addEventListener("click", function() {
//     window.location.href = "index.html";
// })



let bestArr = [{
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Artboard1_1_335c1545-0fc8-4689-949d-51d77f268530_533x.jpg?v=1652861341",
        title: "brave essentials - de-tan face scrub, 75ml",
        content: "brightens | removes dead skin & blackheads",
        discount: "30%",
        rating: 5,
        price: 228,
        strikeprice: 325,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsOLVQHyeAAo14YkdU-JOBDLzf9FdTDH_vw&usqp=CAU",

    },
    {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Artboard1_1_a0b78020-d351-4908-9aa5-e9a6976cb552_533x.jpg?v=1652861079",
        title: "brave essentials - beard grooming combo",
        content: "beard wash,beard oil,& moustache wax",
        discount: "30%",
        rating: 4.7,
        price: 614,
        strikeprice: 877,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsOLVQHyeAAo14YkdU-JOBDLzf9FdTDH_vw&usqp=CAU",

    },
    {
        id: 3,
        image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/shampoo_1_f4b738d9-6056-4fb9-98e5-618387369ec9_533x.jpg?v=1652856621",
        title: "brave essentials -top to toe combo",
        content: "2 in 1 shampoo conditioner turmeric condtioner",
        discount: "30%",
        rating: 4.6,
        price: 733,
        strikeprice: 1047,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsOLVQHyeAAo14YkdU-JOBDLzf9FdTDH_vw&usqp=CAU",

    },
    {
        id: 4,
        image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Artboard1_1_8352d583-8302-4911-b42a-d6901acf611f_533x.jpg?v=1652855227",
        title: "brave essentials -Hair stylimg combo",
        content: "hair oil,2-in-1 shampoo wax,massage oil",
        discount: "25%",
        rating: 5,
        price: 751,
        strikeprice: 1073,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsOLVQHyeAAo14YkdU-JOBDLzf9FdTDH_vw&usqp=CAU",

    },


];

appendBest(bestArr);

function appendBest(data) {
    data.forEach(element => {
        let div = document.createElement("div");

        let pic_container = document.createElement("div");
        let pic = document.createElement("img");
        pic.src = element.image;
        pic_container.append(pic);

        let p1 = document.createElement("p");
        p1.innerText = element.title;

        let p2 = document.createElement("span");
        p2.innerText = element.discount;
        p2.setAttribute("class", "discount");

        let p4 = document.createElement("span");
        p4.innerText = "#1 best seller"
        p4.setAttribute("class", "bestseller");



        let box_1 = document.createElement("div");
        box_1.setAttribute("class", "box_1");

        let first_box = document.createElement("div");

        let li1 = document.createElement("span");
        li1.innerText = element.price;
        let li2 = document.createElement("span");
        li2.innerText = element.strikeprice;

        let bt1 = document.createElement("button");
        bt1.innerText = "add to cart";
        bt1.addEventListener("click", () => {
            AddtoCart(element);
        });
        let p3 = document.createElement("span");
        p3.innerText = element.content;
        p3.setAttribute("class", "content");


        first_box.append(li1, li2);

        let second_box = document.createElement("div");


        let li3 = document.createElement("span");
        li3.innerText = element.rating;
        let img_icon = document.createElement("img");
        img_icon.src = element.icon;


        second_box.append(li3, img_icon);

        box_1.append(first_box, second_box);
        div.append(pic_container, p1, p3, p2, p4, box_1, bt1);
        document.querySelector(".seller_section").append(div);

    });
}

window.addEventListener('scroll', function() {
    let nav = document.getElementById("navbar1");
    if (window.pageYoffset >= 100) {
        nav.classList.add("sticky");

    } else {
        nav.classList.remove("sticky")
    }
})
document.querySelector("#info").addEventListener("click", func)

function func() {
    console.log("dgfsjg")
    let LoggedUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    if (LoggedUser == null) {
        window.location.href = "Login.html";
    } else {
        if (LoggedUser[0].loggeduser == "true") {
            window.location.href = "infoSidebar.html";
        } else {
            window.location.href = "Login.html";
        }
    }

}






let AddCart = JSON.parse(localStorage.getItem("CartProducts")) || [];

function AddtoCart(elem) {
    if (verifyProduct(elem) == true) {
        elem.quantity = 1;
        elem.ProductPrice = elem.price;
        elem.savings = Number(elem.strikeprice) - Number(elem.price);
        elem.TotalSavings = elem.savings;
        AddCart.push(elem);
        localStorage.setItem("CartProducts", JSON.stringify(AddCart));
        console.log(elem, AddCart);
        alert("Product Added to Cart Successfully");
    } else {
        alert("Product Already exists in Cart ");
    }
}

function verifyProduct(elem) {
    for (var i = 0; i < AddCart.length; i++) {
        if (elem.id == AddCart[i].id) {
            return false;
        }
    }
    return true;
}