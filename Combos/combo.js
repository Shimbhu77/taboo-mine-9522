
let data = JSON.parse(localStorage.getItem('all_data')) || []
console.log(data)
let dataArray = []
data.forEach(function (el) {
    if (el.type == 'Combos') {

        dataArray.push(el)
    }
})

console.log(dataArray)
appendData(dataArray)

function handlePrice() {
    var select = document.querySelector("#price_sv").value
    if (select == "") {
        appendData(dataArray)
    }
    else if (select == 'HTL') {
        dataArray.sort(function (a, b) {
            return b.realPrice - a.realPrice

        })
        appendData(dataArray)
    }
    else if (select == 'LTH') {
        dataArray.sort(function (a, b) {
            return a.realPrice - b.realPrice

        })
        appendData(dataArray)
    }
}
function handleType() {
    let select = document.querySelector("#type_sv").value
    if (select == "") {
        appendData(dataArray)
        return
    }
    let filteredList = dataArray.filter((elem) => {
        return elem.type === select;
    });
    appendData(filteredList)
}
function handleSubtype() {
    let select = document.querySelector("#subtype_sv").value
    if (select == "") {
        appendData(dataArray)
        return
    }
    let filteredList = dataArray.filter((elem) => {
        return elem.subtype === select;
    });
    appendData(filteredList)
}
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