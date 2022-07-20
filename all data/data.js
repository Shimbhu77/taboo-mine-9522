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
    Rating: 4.9,
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
    Rating: 4.8,
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
    Rating: 4.7,
    fragrance:
      "Lip Brightening, Nourishing & Repairing,Your answer to dry, chapped & dehydrated lips is here!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Artboard1_9_700x.jpg?v=1652459488",
    name: "Brave Essentials - De-Tan Face Scrub, 75ml",
    type: "Bestseller",
    subtype: "Scrub",
    price: 228,
    realPrice: 325,
    size: "75ml",
    select: "30% Off",
    Rating: 5,
    fragrance:
      "Brave Essentials De-Tan Face Scrub is your answer to an everyday date-ready look!",
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
    Rating: 4.7,
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
    Rating: 4.7,
    fragrance:
      "A healthy glow is around the corner with Bella Vita Organic's wonder mask Glowey!",
  },
  {

    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Artboard1_24_700x.jpg?v=1652680846",
    name: "Brave Essentials - De-Tan Face Wash, 100ml",
    type: "Bestseller",
    subtype: "Face Wash",
    price: 209,
    realPrice: 299,
    size: "100gm",
    select: "30% off",
    Rating: 4.8,
    fragrance:
      "BRAVE Essentials' De-Tan Face Wash is an all-natural face wash for men who like to glow.",
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
    Rating: 4.8,
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
    Rating: 4.8,
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
    Rating: 4.8,
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
    Rating: 4.5,
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
    Rating: 4.7,
    fragrance:
      "Breaking Dawn.The Dominus Eau De Parfum is an unforgettable romantic saga with a dark twist!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOMAN-01_cf6cf834-200c-42bf-81a7-e80dbee17c7d_700x.jpg?v=1652421979",
    name: "CEO MAN LUXURY PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "33% Off",
    Rating: 4.6,
    fragrance:
      "Life in the Fast Lane! Perfect for everyday wear, CEO MAN Eau De Parfum elevates the 'CEO' in you",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Rose-01_700x.jpg?v=1652422566",
    name: "CEO MAN LUXURY PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "33% Off",
    Rating: 4.6,
    fragrance:
      "An iconic bouquet of rose, jasmine and peach, capturing the essence of classic romance.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Fresh-01_e2d901e0-bcf7-482c-8140-3888f8a6f08c_700x.jpg?v=1652422196",
    name: "FRESH UNISEX PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "33% Off",
    Rating: 4.8,
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
    select: "33% Off",
    Rating: 4.7,
    fragrance:
      "The Spice Odyssey.Charmed by the tangy Artemisian Lemon at the top",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/IMPACT-01_700x.jpg?v=1652422894",
    name: "IMPACT MAN PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "33% Off",
    Rating: 4.7,
    fragrance:
      "For the Hustler, The High Flyer!Make a long-lasting first impression with the 'Impact Eau De Cologne'.",
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
    select: "33% Off",
    Rating: 4.5,
    fragrance:
      "Unconventional-Eccentric-Versatile.The Glam Woman Eau De Parfum celebrates versatility breaking conventional floral accents.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Honey-01_700x.jpg?v=1652423027",
    name: "HONEY OUD UNISEX PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 669,
    realPrice: 999,
    size: "100ml",
    select: "33% Off",
    Rating: 5,
    fragrance:
      "An Enchanting Encounter.Honey Oud Parfum is a fruity-floral flavour symphony, harmoniously coexisting to bring out colourful ways of life.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SkaiAquatic-02_360x.jpg?v=1652422770",
    name: "SKAI AQUATIC UNISEX PERFUME, 100ml",
    type: "Bestseller",
    subtype: "Perfume",
    price: 499,
    realPrice: 699,
    size: "100ml",
    select: "29% Off",
    Rating: 4.9,
    fragrance:
      "Exudes Freshness and Sophistication.An iconic blend of bergamot and coriander at the top fuses perfectly",
  },
  //combo
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-Us-Out-Combo-01_700x.jpg?v=1651698312",
    name: "Complete Hair Care Combo",
    type: "Bestseller",
    subtype: "combo",
    price: 837,
    realPrice: 1047,
    size: "-",
    select: "20% Off",
    Rating: 4.8,
    fragrance:
      "Growth Protein Shampoo, Growth Protein Conditioner, Growth Protein Hair Oil",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_700x.jpg?v=1651698311",
    name: "Hair For You Combo",
    type: "Bestseller",
    subtype: "combo",
    price: 598,
    realPrice: 748,
    size: "-",
    select: "20% Off",
    Rating: 4.9,
    fragrance:
      "Growth Protein Shampoo, Growth Protein Conditioner",
  },
  //Skin Care

  // 1)Face cream
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-02_533x.jpg?v=1652342130",
    name: "C-Glow Face Cream ,50ml",
    type: "Skin Care",
    subtype: "Face cream",
    price: 325,
    realPrice: 375,
    size: "50ml",
    select: "13% Off",
    Rating: 5,
    fragrance:
      "The C-Glow Face cream is your lightweight answer to dull, uneven and pigmented skin! An advanced formula",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiDayCream-01_757f9cf0-0c09-4baa-8a13-c6803a6e1f94_700x.jpg?v=1652341381",
    name: "Kumkumadi Day Cream ,50gm",
    type: "Skin Care",
    subtype: "Face cream",
    price: 449,
    realPrice: 549,
    size: "50gm",
    select: "18% Off",
    Rating: 5,
    fragrance:
      "The Bella Vita Organic Kumkumadi Day Cream sits tall in a skin care regime that’s created to give your skin",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-plusNightCream-02_360x.jpg?v=1654165750",
    name: "Hydra-Plus Night Cream ,50gm",
    type: "Skin Care",
    subtype: "Face cream",
    price: 381,
    realPrice: 449,
    size: "50gm",
    select: "15% Off",
    Rating: 5,
    fragrance:
      "While you sleep, the Bella Vita Organic Hydra-plus Night Cream works wonders on your skin.",
  },
  //Face Moisturisers
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01_0b665e08-c71f-409a-82ef-10b68c67e453_700x.jpg?v=1651699935",
    name: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.8,
    fragrance:
      "A powerful yet gentle formula, The Anti-Acne Face Gel is an everyday essential for you!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_700x.jpg?v=1652341175",
    name: "Ayurvedic Kumkumadi Face Oil, 30ml",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 499,
    realPrice: 599,
    size: "30ml",
    select: "6% Off",
    Rating: 4.7,
    fragrance:
      "Renewed, youthful skin is just a few drops out! Bella Vita Organic Kumkumadi Face Oil is your answer to dull",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-01_1_700x.jpg?v=1651698248",
    name: "C-Glow Face Serum ,30ml",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 349,
    realPrice: 375,
    size: "30ml",
    select: "7% Off",
    Rating: 5.0,
    fragrance:
      "Nothing short of a magic potion, The C-Glow Face Serum is carefully formulated, powered by several natural",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-01_fb37c9e3-d5f7-43f6-8b78-7efdd5d94b4b_700x.jpg?v=1652342130",
    name: "C-Glow Face Cream ,50ml",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 325,
    realPrice: 375,
    size: "50ml",
    select: "13% Off",
    Rating: 5.0,
    fragrance:
      "The C-Glow Face cream is your lightweight answer to dull, uneven and pigmented skin!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_cab54ba7-e00c-4426-87c1-249ee10304c6_700x.jpg?v=1651571277",
    name: "Glowtion - Face & Body Lotion,100ml",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 275,
    realPrice: 299,
    size: "100ml",
    select: "13% Off",
    Rating: 5.0,
    fragrance:
      "A non-greasy formula, the Bella Vita Organic Glowtion has the power to deeply nourish and moisturise your skin.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiDayCream-01_757f9cf0-0c09-4baa-8a13-c6803a6e1f94_700x.jpg?v=1652341381",
    name: "Kumkumadi Day Cream ,50gm",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 449,
    realPrice: 549,
    size: "50gm",
    select: "18% Off",
    Rating: 5.0,
    fragrance:
      "The Bella Vita Organic Kumkumadi Day Cream sits tall in a skin care regime that's created to give your skin",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_700x.jpg?v=1652176030",
    name: "C-Glow Oil-Free Face Gel, 50gm",
    type: "Skin Care",
    subtype: "Face Moisturisers",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "Your fuss-free route to even skin tone is here! An oil control hydration gel, formulated with Vitamin C",
  },
  //Gel
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01_0b665e08-c71f-409a-82ef-10b68c67e453_700x.jpg?v=1651699935",
    name: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
    type: "Skin Care",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.8,
    fragrance:
      "A powerful yet gentle formula, The Anti-Acne Face Gel is an everyday essential for you! ",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_700x.jpg?v=1652176030",
    name: "C-Glow Oil-Free Face Gel, 50gm",
    type: "Skin Care",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "Your fuss-free route to even skin tone is here! An oil control hydration gel, formulated with Vitamin C",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-03_700x.jpg?v=1654164918",
    name: "Hydra-Plus Face Gel ,50gm",
    type: "Skin Care",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "A well-tested Ayurvedic formulation that’s here to give your skin an instant dose of hydration with each application.",
  },

  //By Skin Care (isme || condition apply)
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_cab54ba7-e00c-4426-87c1-249ee10304c6_700x.jpg?v=1651571277",
    name: "Glowtion - Face & Body Lotion,100ml",
    type: "By Product Type",
    subtype: "Face Moisturisers",
    price: 275,
    realPrice: 299,
    size: "100ml",
    select: "13% Off",
    Rating: 5.0,
    fragrance:
      "A non-greasy formula, the Bella Vita Organic Glowtion has the power to deeply nourish and moisturise your skin.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiDayCream-01_757f9cf0-0c09-4baa-8a13-c6803a6e1f94_700x.jpg?v=1652341381",
    name: "Kumkumadi Day Cream ,50gm",
    type: "By Product Type",
    subtype: "Face Moisturisers",
    price: 449,
    realPrice: 549,
    size: "50gm",
    select: "18% Off",
    Rating: 5.0,
    fragrance:
      "The Bella Vita Organic Kumkumadi Day Cream sits tall in a skin care regime that's created to give your skin",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_700x.jpg?v=1652176030",
    name: "C-Glow Oil-Free Face Gel, 50gm",
    type: "By Product Type",
    subtype: "Face Moisturisers",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "Your fuss-free route to even skin tone is here! An oil control hydration gel, formulated with Vitamin C",
  },
  //Gel
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01_0b665e08-c71f-409a-82ef-10b68c67e453_700x.jpg?v=1651699935",
    name: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
    type: "By Product Type",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.8,
    fragrance:
      "A powerful yet gentle formula, The Anti-Acne Face Gel is an everyday essential for you! ",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_700x.jpg?v=1652176030",
    name: "C-Glow Oil-Free Face Gel, 50gm",
    type: "By Product Type",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "Your fuss-free route to even skin tone is here! An oil control hydration gel, formulated with Vitamin C",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-03_700x.jpg?v=1654164918",
    name: "Hydra-Plus Face Gel ,50gm",
    type: "By Product Type",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "A well-tested Ayurvedic formulation that’s here to give your skin an instant dose of hydration with each application.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/De-TanFacePack-01_700x.jpg?v=1652168815",
    name: "De Tan Face Pack For Glowing Skin,100gm",
    type: "By Product Type",
    subtype: "Face wash",
    price: 375,
    realPrice: 399,
    size: "100gm",
    select: "6% Off",
    Rating: 4.8,
    fragrance:
      "De-Tan Face Pack by Bella Vita Organic is crafted by experts to improve your skin tone, brighten your face and give you a glowing skin while helping with oil control.",
  },

  //By Concern

  //1)Face Wash
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-02_360x.jpg?v=1652340405",
    name: "C-Glow Face Wash, 100ml",
    type: "By concern",
    subtype: "Face wash",
    price: 225,
    realPrice: 249,
    size: "100ml",
    select: "10% Off",
    Rating: 4.7,
    fragrance:
      "Brighten, purify & de-tan your skin with the Bella Vita Organic C-Glow Face Wash to get glowing skin",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/De-TanFacePack-01_700x.jpg?v=1652168815",
    name: "De Tan Face Pack For Glowing Skin,100gm",
    type: "By concern",
    subtype: "Face wash",
    price: 375,
    realPrice: 399,
    size: "100gm",
    select: "6% Off",
    Rating: 4.8,
    fragrance:
      "De-Tan Face Pack by Bella Vita Organic is crafted by experts to improve your skin tone, brighten your face and give you a glowing skin while helping with oil control.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-01_1_700x.jpg?v=1651698248",
    name: "C-Glow Face Serum ,30ml",
    type: "By concern",
    subtype: "Face wash",
    price: 349,
    realPrice: 375,
    size: "30ml",
    select: "6% Off",
    Rating: 5.0,
    fragrance:
      "Nothing short of a magic potion, The C-Glow Face Serum is carefully formulated, powered by several natural",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacePack-01_1_700x.jpg?v=1651698247",
    name: "C-Glow Face Pack, 100gm",
    type: "By concern",
    subtype: "Face wash",
    price: 349,
    realPrice: 399,
    size: "100gm",
    select: "13% Off",
    Rating: 5.0,
    fragrance:
      "Once you start using the C-Glow Face Pack, there's no going back!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DayGlow-01_71da5efa-5c75-4c19-9c32-6eab59310210_700x.jpg?v=1652169110",
    name: "Day Glow SPF 30+ Sunscreen,100ml",
    type: "By concern",
    subtype: "Face wash",
    price: 325,
    realPrice: 349,
    size: "100gm",
    select: "7% Off",
    Rating: 4.7,
    fragrance:
      "Protects the skin from sun damage with the Bella Vita Organic Day Glow Face & Body Lotion!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HydraplusFaceWash-03_700x.jpg?v=1654164895",
    name: "Hydra-Plus Face Wash ,100ml",
    type: "By concern",
    subtype: "Face wash",
    price: 225,
    realPrice: 279,
    size: "100ml",
    select: "19% Off",
    Rating: 5.0,
    fragrance:
      "A gentle cleanser that works wonders to deep clean the skin, Hydra-Plus Face Wash is soon going to be your skincare bestie.",
  },

  //By Skin Type
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-02_360x.jpg?v=1652340405",
    name: "C-Glow Face Wash, 100ml",
    type: "By Skin Type",
    subtype: "Face wash",
    price: 225,
    realPrice: 249,
    size: "100ml",
    select: "10% Off",
    Rating: 4.7,
    fragrance:
      "Brighten, purify & de-tan your skin with the Bella Vita Organic C-Glow Face Wash to get glowing skin from within! Power-packed with natural ingredients",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteMen-01_2_700x.jpg?v=1651698262",
    name: "Deo White Natural Roll On Deodorant For Men, 50ml",
    type: "By Skin Type",
    subtype: "Deodorant",
    price: 199,
    realPrice: 199,
    size: "50ml",
    select: "10% Off",
    Rating: 4.7,
    fragrance:
      "A blend of natural goodness, the Deowhite Underarm Whitening Natural Roll-On Deodorant For Men is a holy grail addition to your AM self-care regime.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Supreme-Men-Combo-01_700x.jpg?v=1651698398",
    name: "Supreme Men Combo",
    type: "By Skin Type",
    subtype: "Combo",
    price: 1198,
    realPrice: 1498,
    size: "-",
    select: "10% Off",
    Rating: 4.7,
    fragrance:
      "The Supreme Men Combo, rightfully named, is your very own skin care arsenal that will hydrate, protect, nourish and exfoliate your skin!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286",
    name: "Exfoliate Face And Body Scrub Grit ,75gm",
    type: "By Skin Type",
    subtype: "Deodorant",
    price: 249,
    realPrice: 275,
    size: "75gm",
    select: "10% Off",
    Rating: 4.8,
    fragrance:
      "The Bella Vita Organic Exfoliate Face & Body Scrub is a holy grail gentle exfoliator that is enriched",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_700x.jpg?v=1652176030",
    name: "C-Glow Oil-Free Face Gel, 50gm",
    type: "By Skin Type",
    subtype: "Face Moisturisers",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "Your fuss-free route to even skin tone is here! An oil control hydration gel, formulated with Vitamin C",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01_0b665e08-c71f-409a-82ef-10b68c67e453_700x.jpg?v=1651699935",
    name: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
    type: "By Skin Type",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.8,
    fragrance:
      "A powerful yet gentle formula, The Anti-Acne Face Gel is an everyday essential for you! ",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_700x.jpg?v=1652176030",
    name: "C-Glow Oil-Free Face Gel, 50gm",
    type: "By Skin Type",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "Your fuss-free route to even skin tone is here! An oil control hydration gel, formulated with Vitamin C",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hydra-Plus-Face-Gel-03_700x.jpg?v=1654164918",
    name: "Hydra-Plus Face Gel ,50gm",
    type: "By Skin Type",
    subtype: "Gel",
    price: 375,
    realPrice: 399,
    size: "50gm",
    select: "6% Off",
    Rating: 4.9,
    fragrance:
      "A well-tested Ayurvedic formulation that's here to give your skin an instant dose of hydration with each application.",
  },

  // Hair Care
];

localStorage.setItem("all_data", JSON.stringify(data));
