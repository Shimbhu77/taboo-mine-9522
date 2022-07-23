import { sidebar } from "../scripts/sidebar.js"
let z = document.querySelector("#dummy_sv")
z.innerHTML = sidebar();

import navbar from "../components/navbar.js";
import navbar2 from "../components/navbar2.js"
import footer from "../components/footer.js"

document.querySelector("#navbar2").innerHTML = navbar2();
document.querySelector("#navbar1").innerHTML = navbar();
document.querySelector("#footer_div").innerHTML = footer();


let data = JSON.parse(localStorage.getItem('all_data')) || []
console.log(data);
appendData(data)
// console.log(dataArray)

function appendData(data) {
    let display = document.getElementById('container_sv')
    display.innerHTML = null;
    // console.log(data)
    data.forEach(function (el) {
        // console.log(el)
        let div = document.createElement('div')
        div.setAttribute('class', 'box_sv')

        let image = document.createElement('img')
        image.src = el.image;
        image.setAttribute('class', 'proImg_sv')
        image.addEventListener('click', () => {
            Chacha(el)
        })
        let ndiv = document.createElement('div')
        ndiv.setAttribute('class', 'namediv_sv')
        let title = document.createElement('a')
        title.setAttribute('class', 'name_sv')
        title.innerText = el.title
        ndiv.append(title)

        let subtype = document.createElement('p')
        subtype.setAttribute('class', 'name2_sv')
        subtype.innerText = el.subtype;

        let price = document.createElement('p')
        price.innerText = `₹${el.price}`;
        price.setAttribute('class', 'pricepro_sv')

        let button = document.createElement('button')
        button.setAttribute('class', 'probtn_sv')
        button.innerText = 'Add To Cart'
        button.style.cursor = 'pointer'
        button.addEventListener('click', () => {
            AddtoCart(el)
        })
        div.append(image, ndiv, subtype, price, button)
        display.append(div)
    });
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
        document.getElementById("count2").innerText = AddCart.length
        alert("Product Added to Cart Successfully");
    }
    else {
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
document.getElementById("count2").innerText = AddCart.length