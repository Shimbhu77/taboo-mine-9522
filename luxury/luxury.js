import navbar from "../components/navbar.js";
import navbar2 from "../components/navbar2.js"
import footer from "../components/footer.js"

document.querySelector("#navbar2").innerHTML=navbar2();
document.querySelector("#navbar1").innerHTML=navbar();
document.querySelector("#footer_div").innerHTML=footer();

    let productArr=[
    {
            id:1,
            image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Honey-02_533x.jpg?v=1652423029",
            title:"ceo woman perfume unisex, 100ml",
            content:"Eau de parfum",
            discount:"25%",
            rating:4.7,
            price:674,
            strikeprice:899,
            icon:"https://m.media-amazon.com/images/I/51cPT0gKmFL.jpg",
            
        },
        {
            id:2,
            image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/IMPACT-02_533x.jpg?v=1652422896",
            title:"skai aquatic unisex perfume unisex, 200ml",
            content:"Eau De  cologne",
            discount:"29%",
            rating:4.9,
            price:499,
            strikeprice:699,
            icon:"https://m.media-amazon.com/images/I/51cPT0gKmFL.jpg",
            
        },
        {
            id:3,
            image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOWOMAN-02_533x.jpg?v=1652422051",
            title:"ceo woman perfume unisex, 100ml",
            content:"Eau De perfume",
            discount:"25%",
            rating:4.7,
            price:674,
            strikeprice:899,
            icon:"https://m.media-amazon.com/images/I/51cPT0gKmFL.jpg",
            
        },
        {
            id:4,
            image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Honey-02_533x.jpg?v=1652423029",
            title:"honey oud unisex perfume, 100ml",
            content:"parfum",
            discount:"25%",
            rating:5,
            price:669,
            strikeprice:999,
            icon:"https://m.media-amazon.com/images/I/51cPT0gKmFL.jpghttps://m.media-amazon.com/images/I/51cPT0gKmFL.jpg",
            
        },

        
    ];
    localStorage.setItem("luxuryProduct",JSON.stringify(productArr))
 append(productArr);

function append(data){
    data.forEach(element => {
        let div=document.createElement("div");

        let pic_container=document.createElement("div");
        let pic=document.createElement("img");
          pic.src=element.image;
          pic_container.append(pic);

        let p1=document.createElement("p");
            p1.innerText=element.title;

            let p2=document.createElement("span");
            p2.innerText=element.discount;
            p2.setAttribute("class","discount");

            let p4=document.createElement("span");
            p4.innerText="#1 best seller"
            p4.setAttribute("class","bestseller");



            let box_1=document.createElement("div");
            box_1.setAttribute("class","box_1");

            let first_box=document.createElement("div");
           
            let li1=document.createElement("span");
            li1.innerText=element.price;
            let li2=document.createElement("span");
            li2.innerText=element.strikeprice;

            let bt1=document.createElement("button");
            bt1.innerText="add to cart";                        
            let p3=document.createElement("span");
            p3.innerText=element.content;
            p3.setAttribute("class","content");

           
            first_box.append(li1,li2);

            let second_box=document.createElement("div");

           
            let li3=document.createElement("span");
            li3.innerText=element.rating;
            let img_icon=document.createElement("img");
            img_icon.src=element.icon;

           
            second_box.append(li3,img_icon);

            box_1.append(first_box,second_box);
            div.append(pic_container,p1,p3,p2,p4,box_1,bt1);
            document.querySelector(".seller_section").append(div);

    });
}
