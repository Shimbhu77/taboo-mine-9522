
let data = JSON.parse(localStorage.getItem('all_data')) || []

let dataArray = []
data.forEach(function (el) {
    if (el.type == 'Bestseller') {

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
        let name = document.createElement('a')
        name.setAttribute('class', 'name_sv')
        name.innerText = el.name
        ndiv.append(name)

        let subtype = document.createElement('p')
        subtype.setAttribute('class', 'name2_sv')
        subtype.innerText = el.subtype;

        let price = document.createElement('p')
        price.innerText = `$${el.price}`;
        price.setAttribute('class', 'pricepro_sv')

        let button = document.createElement('button')
        button.setAttribute('class', 'probtn_sv')
        button.innerText = 'Add To Cart'
        button.style.cursor = 'pointer'
        button.addEventListener('click', () => {
            addToCart(el)
        })
        div.append(image, ndiv, subtype, price, button)
        display.append(div)
    });
}
let CartArray = JSON.parse(localStorage.getItem('cart')) || []
function addToCart(data) {
    CartArray.push(data)
    console.log(CartArray)
    localStorage.setItem('cart', JSON.stringify(CartArray))

}
function Chacha(data) {
    localStorage.setItem('Products', JSON.stringify(data))
    window.location.href = '../product detail/product_detail.html'
}