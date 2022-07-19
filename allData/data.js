// New & Now --> All New Arrival
// All the data arrange  in following category :-
//1)lotion ,2)cream,3)fragrance, 4)gel, 5)gift, 6)sanitizer

// 1) New & Now = 19

var data = [
  {
    //Oil
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_700x.jpg?v=1652341175",
    name: "Ayurvedic Kumkumadi Face Oil, 30ml",
    type: "New Arrivals",
    subtype: "Oil",
    price: 499,
    realPrice: 599,
    size: "30ml",
    select: "Select @ 40%off",
    Rating: 4.7,
    fragrance:
      "Skin Brightening & Hydrating Oil For Youthful Skin",
  },
  //Deodrant
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOMan-02_92f67846-d6a1-43fe-ba41-2325b5109710_700x.jpg?v=1651601278",
    name: "CEO Man Body Parfum No Gas Deodorant, 150ml",
    type: "New Arrivals",
    subtype: "Deodorant",
    price: 249,
    realPrice: 299,
    size: "150ml",
    select: "Select @ 20%off",
    Rating: 5.0,
    fragrance:
      "Perfect for everyday wear, CEO MAN Body Parfum No Gas Deodorant elevates the 'CEO' in you",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOWoman-01_cd0b74db-8b24-45b8-83a3-f4d0e78046cc_700x.jpg?v=1651601289",
    name: "CEO Woman Body Parfum No Gas Deodorant, 150ml",
    type: "New Arrivals",
    subtype: "Deodorant",
    price: 249,
    realPrice: 299,
    size: "150ml",
    select: "Select @ 20%off",
    Rating: 4.7,
    fragrance:
      "Temptingly Decadent - Alluring - Daring.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GlamWoman-01_700x.jpg?v=1651601300",
    name: "CEO Woman Body Parfum No Gas Deodorant, 150ml",
    type: "New Arrivals",
    subtype: "Deodorant",
    price: 249,
    realPrice: 299,
    size: "150ml",
    select: "Select @ 20%off",
    Rating: 5.0,
    fragrance:
      "Unconventional-Eccentric-Versatile.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Impact-01_9c6b6bbb-48c8-4df9-aa44-f4304cb3529f_700x.jpg?v=1651601271",
    name: "IMPACT Man Body Parfum No Gas Deodorant, 150ml",
    type: "New Arrivals",
    subtype: "Deodorant",
    price: 249,
    realPrice: 299,
    size: "150ml",
    select: "Select @ 20%off",
    Rating: 4.0,
    fragrance:
      "For the Hustler, The High Flyer!",
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Skai-01_700x.jpg?v=1651601264",
    name: "SKAI Aquatic Man Body Parfum No Gas Deodorant, 150ml",
    type: "New Arrivals",
    subtype: "Deodorant",
    price: 249,
    realPrice: 299,
    size: "150ml",
    select: "Select @ 20%off",
    Rating: 5.0,
    fragrance:
      "Exudes Freshness and Sophistication.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GlamWoman-01_700x.jpg?v=1651601300",
    name: "GLAM Woman Body Parfum No Gas Deodorant, 150ml",
    type: "New Arrivals",
    subtype: "Deodorant",
    price: 249,
    realPrice: 299,
    size: "150ml",
    select: "Select @ 20%off",
    Rating: 4.6,
    fragrance:
      "Exudes Freshness and Sophistication.",
  },

  {
    //Face cream
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-01_fb37c9e3-d5f7-43f6-8b78-7efdd5d94b4b_700x.jpg?v=1652342130",
    name: "C-Glow Face Cream ,50ml",
    type: "New Arrivals",
    subtype: "Face cream",
    price: 325,
    realPrice: 375,
    size: "50ml",
    select: "Mix & Match: Buy 3,Get 1",
    Rating: 4.6,
    fragrance:
      "The C-Glow Face cream is your lightweight answer to dull",
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacePack-01_1_700x.jpg?v=1651698247",
    name: "C-Glow Face Pack, 100gm",
    type: "New Arrivals",
    subtype: "Face cream",
    price: 349,
    realPrice: 399,
    size: "100gm",
    select: "-",
    Rating: 5,
    fragrance:
      "Once you start using the C-Glow Face Pack, there’s no going back!",
  },

  //gel

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-03_700x.jpg?v=1654164918",
    name: "Hydra-Plus Face Gel ,50gm",
    type: "New Arrivals",
    subtype: "Gel",
    price: 349,
    realPrice: 399,
    size: "50gm",
    select: "Mix & Match: Buy 3,Get 1",
    Rating: 4.7,
    fragrance:
      "A well-tested Ayurvedic formulation that's here to give your skin an instant dose of hydration with each application.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-plusNightCream-03_700x.jpg?v=1654165749",
    name: "Hydra-Plus Night Cream ,50gm",
    type: "New Arrivals",
    subtype: "Gel",
    price: 381,
    realPrice: 449,
    size: "50gm",
    select: "Mix & Match: Buy 3,Get 1",
    Rating: 4.5,
    fragrance:
      "While you sleep, the Bella Vita Organic Hydra-plus Night Cream works wonders on your skin",
  },

  //Face Wash
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HydraplusFaceWash-03_700x.jpg?v=1654164895",
    name: "Hydra-Plus Face Wash ,100ml",
    type: "New & Now",
    subtype: "Face Wash",
    price: 225,
    realPrice: 279,
    size: "100ml",
    select: "Mix & Match: Buy 2, Get 1",
    Rating: 5.0,
    fragrance:
      "A gentle cleanser that works wonders to deep clean the skin, Hydra-Plus Face Wash is soon going to be your skincare bestie.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceWash-01_1_700x.jpg?v=1652341314",
    name: "Kumkumadi Face Wash - 100ml",
    type: "New Arrivals",
    subtype: "Face Wash",
    price: 320,
    realPrice: 399,
    size: "100ml",
    select: "Mix & Match: Buy 2, Get 1",
    Rating: 4.8,
    fragrance:
      "Looking for a gentle cleanser that will clarify, rejuvenate & protect your skin from being stripped of its natural oils",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceWash-01_1_700x.jpg?v=1652341314",
    name: "Kumkumadi Face Wash - 100ml",
    type: "New Arrivals",
    subtype: "Face Wash",
    price: 349,
    realPrice: 399,
    size: "100ml",
    select: "-",
    quantity: 4.9,
    fragrance:
      "A cheers-worthy spritzer of bubbly champagne, sparkling berries and juicy tangerine",
  },

  //Bestseller
  {
    //Scrub

    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286",
    name: "Exfoliate Face And Body Scrub Grit ,75gm",
    type: "Bestseller",
    subtype: "Scrub",
    price: 249,
    realPrice: 275,
    size: "75gm",
    select: "-",
    quantity: 4.8,
    fragrance:
      "Gentle Exfoliation, Nourishing & Skin Brightening",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_77788ac8-4061-459a-bfb5-f5b5068c1dfa_700x.jpg?v=1652340499",
    name: "NicoLips Lip Brightening Scrub, 20gm",
    type: "Bestseller",
    subtype: "Scrub",
    price: 399,
    realPrice: 450,
    size: "20gm",
    select: "-",
    quantity: 4.7,
    fragrance:
      "Lip Brightening, Nourishing & Repairing,Your answer to dry, chapped & dehydrated lips is here!",
  },
  {
    //Face Wash
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_2_700x.jpg?v=1652340405",
    name: "C-Glow Face Wash, 100ml",
    type: "Bestseller",
    subtype: "Face Wash",
    price: 225,
    realPrice: 249,
    size: "100ml",
    select: "-",
    quantity: 4.7,
    fragrance:
      "Brighten, purify & de-tan your skin with the Bella Vita Organic C-Glow Face Wash to get glowing skin",
  },
  {

    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_700x.jpg?v=1652169511",
    name: "GLOWEY 3 In 1 Face Pack, Scrub & Face Wash,100 Gm",
    type: "Bestseller",
    subtype: "Face Wash",
    price: 375,
    realPrice: 399,
    size: "100gm",
    select: "-",
    quantity: 4.7,
    fragrance:
      "A healthy glow is around the corner with Bella Vita Organic’s wonder mask Glowey!",
  },

  //Perfume
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Fresh-01_e2d901e0-bcf7-482c-8140-3888f8a6f08c_700x.jpg?v=1652422196",
    name: "FRESH UNISEX PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "-",
    quantity: 4.8,
    fragrance:
      "Twisted Tale of Modern Classic.A mythical fragrance that rephrases ancient elegance!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/WhiteOUD-01_5eb2f95c-36ef-4c3b-a450-657c6dc6f420_700x.jpg?v=1652422287",
    name: "WHITE OUD UNISEX, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 674,
    realPrice: 999,
    size: "100ml",
    select: "40% Off",
    quantity: 4.8,
    fragrance:
      "The Spice Odyssey.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/IMPACT-01_700x.jpg?v=1652422894",
    name: "IMPACT MAN PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 594,
    realPrice: 899,
    size: "100ml",
    select: "40% Off",
    quantity: 4.8,
    fragrance:
      "For the Hustler, The High Flyer!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glam-01_700x.jpg?v=1652422496",
    name: "GLAM WOMAN PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 669,
    realPrice: 999,
    size: "100ml",
    select: "40% Off",
    quantity: 4.5,
    fragrance:
      "Unconventional-Eccentric-Versatile.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Dominus-01_700x.jpg?v=1652422970",
    name: "DOMINUS MAN PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "40% Off",
    quantity: 4.7,
    fragrance:
      "Breaking Dawn.The Dominus Eau De Parfum is an unforgettable romantic saga with a dark twist!",
  },


];

localStorage.setItem("all_data", JSON.stringify(data));
