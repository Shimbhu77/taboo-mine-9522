// New & Now --> All New Arrival
// All the data arrange  in following category :-
//1)lotion ,2)cream,3)fragrance, 4)gel, 5)gift, 6)sanitizer

// 1) New & Now = 19

var data = [
  {
    //Oil
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_700x.jpg?v=1652341175",
    title: "Ayurvedic Kumkumadi Face Oil, 30ml",
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
    title: "CEO Man Body Parfum No Gas Deodorant, 150ml",
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
    title: "CEO Woman Body Parfum No Gas Deodorant, 150ml",
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
    title: "CEO Woman Body Parfum No Gas Deodorant, 150ml",
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
    title: "IMPACT Man Body Parfum No Gas Deodorant, 150ml",
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
    title: "SKAI Aquatic Man Body Parfum No Gas Deodorant, 150ml",
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
    title: "GLAM Woman Body Parfum No Gas Deodorant, 150ml",
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
    title: "C-Glow Face Cream ,50ml",
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
    title: "C-Glow Face Pack, 100gm",
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
    title: "Hydra-Plus Face Gel ,50gm",
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
    title: "Hydra-Plus Night Cream ,50gm",
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
    title: "Hydra-Plus Face Wash ,100ml",
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
    title: "Kumkumadi Face Wash - 100ml",
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
    title: "Kumkumadi Face Wash - 100ml",
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
    title: "Exfoliate Face And Body Scrub Grit ,75gm",
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
    title: "NicoLips Lip Brightening Scrub, 20gm",
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
    title: "Brave Essentials - De-Tan Face Scrub, 75ml",
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
    title: "C-Glow Face Wash, 100ml",
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
    title: "GLOWEY 3 In 1 Face Pack, Scrub & Face Wash,100 Gm",
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
    title: "Brave Essentials - De-Tan Face Wash, 100ml",
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
    title: "FRESH UNISEX PERFUME, 100ml",
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
    title: "WHITE OUD UNISEX, 100ml",
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
    title: "IMPACT MAN PERFUME, 100ml",
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
    title: "GLAM WOMAN PERFUME, 100ml",
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
    title: "DOMINUS MAN PERFUME, 100ml",
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
    title: "CEO MAN LUXURY PERFUME, 100ml",
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
    title: "CEO MAN LUXURY PERFUME, 100ml",
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
    title: "FRESH UNISEX PERFUME, 100ml",
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
    title: "WHITE OUD UNISEX, 100ml",
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
    title: "IMPACT MAN PERFUME, 100ml",
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
    title: "GLAM WOMAN PERFUME, 100ml",
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
    title: "HONEY OUD UNISEX PERFUME, 100ml",
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
    title: "SKAI AQUATIC UNISEX PERFUME, 100ml",
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
    title: "Complete Hair Care Combo",
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
    title: "Hair For You Combo",
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
    title: "C-Glow Face Cream ,50ml",
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
    title: "Kumkumadi Day Cream ,50gm",
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
    title: "Hydra-Plus Night Cream ,50gm",
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
    title: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
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
    title: "Ayurvedic Kumkumadi Face Oil, 30ml",
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
    title: "C-Glow Face Serum ,30ml",
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
    title: "C-Glow Face Cream ,50ml",
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
    title: "Glowtion - Face & Body Lotion,100ml",
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
    title: "Kumkumadi Day Cream ,50gm",
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
    title: "C-Glow Oil-Free Face Gel, 50gm",
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
    title: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
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
    title: "C-Glow Oil-Free Face Gel, 50gm",
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
    title: "Hydra-Plus Face Gel ,50gm",
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
    title: "Glowtion - Face & Body Lotion,100ml",
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
    title: "Kumkumadi Day Cream ,50gm",
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
    title: "C-Glow Oil-Free Face Gel, 50gm",
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
    title: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
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
    title: "C-Glow Oil-Free Face Gel, 50gm",
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
    title: "Hydra-Plus Face Gel ,50gm",
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
    title: "De Tan Face Pack For Glowing Skin,100gm",
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
    title: "C-Glow Face Wash, 100ml",
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
    title: "De Tan Face Pack For Glowing Skin,100gm",
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
    title: "C-Glow Face Serum ,30ml",
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
    title: "C-Glow Face Pack, 100gm",
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
    title: "Day Glow SPF 30+ Sunscreen,100ml",
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
    title: "Hydra-Plus Face Wash ,100ml",
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
    title: "C-Glow Face Wash, 100ml",
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
    title: "Deo White Natural Roll On Deodorant For Men, 50ml",
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
    title: "Supreme Men Combo",
    type: "By Skin Type",
    subtype: "Combo",
    price: 1198,
    realPrice: 1498,
    size: "-",
    select: "10% Off",
    Rating: 4.7,
    fragrance:
      "The Supreme Men Combo, rightfully titled, is your very own skin care arsenal that will hydrate, protect, nourish and exfoliate your skin!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286",
    title: "Exfoliate Face And Body Scrub Grit ,75gm",
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
    title: "C-Glow Oil-Free Face Gel, 50gm",
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
    title: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",
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
    title: "C-Glow Oil-Free Face Gel, 50gm",
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
    title: "Hydra-Plus Face Gel ,50gm",
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
  {
    //Hair Product Types
    //Shampoo
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-01_1_700x.jpg?v=1651698374",
    title: "Reverse Hairwash Pack Of Conditioner & Shampoo, 200ml Each",
    type: "Hair Care",
    subtype: "Shampoo",
    price: 499,
    realPrice: 599,
    size: "200ml",
    select: "17% Off",
    Rating: 4.9,
    fragrance:
      "Anti Frizz, Anti Hairfall & Nourishing",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protin-Hair-Shampoo-01_700x.jpg?v=1652169655",
    title: "Growth Protein Shampoo, 200ml",
    type: "Hair Care",
    subtype: "Shampoo",
    price: 299,
    realPrice: 349,
    size: "200ml",
    select: "14% Off",
    Rating: 4.8,
    fragrance:
      "New age hair care with age-old blends! The Bella Vita Organic Growth Protein Shampoo is here to take your hair",
  },
  {
    //Conditioner
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Conditioner-01_ef846ab9-d1dc-4c51-ab39-41a3031812dd_700x.jpg?v=1651698301",
    title: "Growth Protein Hair Conditioner, 200ml",
    type: "Hair Care",
    subtype: "Conditioner",
    price: 349,
    realPrice: 399,
    size: "200ml",
    select: "14% Off",
    Rating: 4.7,
    fragrance:
      "The Ayurvedic answer to frizzy & rough hair is here! The Bella Vita Organic Growth Protein Hair Conditioner",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth-Protein-Hair-Oil-01_700x.jpg?v=1651698303",
    title: "Growth Protein Hair Oil, 200ml",
    type: "Hair Care",
    subtype: "oil",
    price: 275,
    realPrice: 299,
    size: "200ml",
    select: "8% Off",
    Rating: 4.7,
    fragrance:
      "Here's to your at-home hair treatment! The Bella Vita Organic Growth Protein Hair Oil is the perfect Ayurveda",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Mask-01_700x.jpg?v=1651698302",
    title: "Growth Protein Hair Mask, 200gm",
    type: "Hair Care",
    subtype: "Shampoo",
    price: 375,
    realPrice: 399,
    size: "200gm",
    select: "8% Off",
    Rating: 4.7,
    fragrance:
      "The Bella Vita Organic Growth Protein duo of shampoo & conditioner is truly the easiest route to shinier, thicker & nourished hair!",
  },
  {
    //combo
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_700x.jpg?v=1651698311",
    title: "Hair For You Combo",
    type: "Hair Care",
    subtype: "combo",
    price: 598,
    realPrice: 748,
    size: "200gm",
    select: "20% Off",
    Rating: 4.9,
    fragrance:
      "The Bella Vita Organic Growth Protein duo of shampoo & conditioner is truly the easiest route to shinier, thicker & nourished hair!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-Us-Out-Combo-01_700x.jpg?v=1651698312",
    title: "Complete Hair Care Combo",
    type: "Hair Care",
    subtype: "combo",
    price: 837,
    realPrice: 1047,
    size: "200gm",
    select: "20% Off",
    Rating: 4.8,
    fragrance:
      "The Bella Vita Organic Growth Protein range that consists of a shampoo, hair conditioner ",
  },
  {
    //perfume
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_700x.jpg?v=1626681100",
    title: "Hair Perfume Mist Spray Unisex, 50ml",
    type: "Hair Care",
    subtype: "Perfume",
    price: 338,
    realPrice: 450,
    size: "50ml",
    select: "20% Off",
    Rating: 4.6,
    fragrance:
      "Our sweet & floral Hair perfume for women and men will help you take your hair game to the next level.",
  },
  {
    //comb
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombWideTeeth-01_700x.jpg?v=1652170954",
    title: "Neem Wooden Wide Tooth Comb",
    type: "Hair Care",
    subtype: "comb",
    price: 170,
    realPrice: 170,
    size: "-",
    select: "20% Off",
    Rating: 4.7,
    fragrance:
      "The wide-toothed neem wooden comb is handcrafted in India with 100% long neem wood.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_700x.jpg?v=1633437311",
    title: "Neem Wooden Wide Tooth Comb",
    type: "Hair Care",
    subtype: "comb",
    price: 170,
    realPrice: 199,
    size: "-",
    select: "20% Off",
    Rating: 4.7,
    fragrance:
      "The wide-toothed neem wooden comb is handcrafted in India with 100% long neem wood.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-03_c650cdd1-e70d-40b3-8dea-1068c6532363_700x.jpg?v=1656497313",
    title: "Oil Control Shampoo",
    type: "Hair Care",
    subtype: "Shampoo",
    price: 299,
    realPrice: 349,
    size: "100ml",
    select: "14% Off",
    Rating: 5.0,
    fragrance:
      "With Bella Vita Organic Oil-Control Shampoo, indulge in the perfect dose of purification for your oily",
  },
  //Hair Concern Types
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protin-Hair-Shampoo-01_700x.jpg?v=1652169655",
    title: "Growth Protein Shampoo, 200ml",
    type: "Hair Care",
    subtype: "Shampoo",
    price: 299,
    realPrice: 349,
    size: "200ml",
    select: "14% Off",
    Rating: 4.8,
    fragrance:
      "New age hair care with age-old blends! The Bella Vita Organic Growth Protein Shampoo is here to take your hair",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth-Protein-Hair-Oil-01_700x.jpg?v=1651698303",
    title: "Growth Protein Hair Oil, 200ml",
    type: "Hair Care",
    subtype: "oil",
    price: 299,
    realPrice: 349,
    size: "200ml",
    select: "8% Off",
    Rating: 4.8,
    fragrance:
      "Here's to your at-home hair treatment! The Bella Vita Organic Growth Protein Hair Oil is the perfect Ayurveda",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_700x.jpg?v=1651698311",
    title: "Hair For You Combo",
    type: "Hair Care",
    subtype: "combo",
    price: 598,
    realPrice: 748,
    size: "-",
    select: "20% Off",
    Rating: 4.8,
    fragrance:
      "Here's to your at-home hair treatment! The Bella Vita Organic Growth Protein Hair Oil is the perfect Ayurveda",
  },
  {
    //conditioner
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Conditioner-01_ef846ab9-d1dc-4c51-ab39-41a3031812dd_700x.jpg?v=1651698301",
    title: "Growth Protein Hair Conditioner, 200ml",
    type: "Hair Care",
    subtype: "Conditioner",
    price: 349,
    realPrice: 399,
    size: "200ml",
    select: "13% Off",
    Rating: 4.7,
    fragrance:
      "The Ayurvedic answer to frizzy & rough hair is here! The Bella Vita Organic Growth Protein Hair Conditioner",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-06_700x.jpg?v=1633437312",
    title: "Neem Wooden Dual Tooth Comb",
    type: "Hair Care",
    subtype: "comb",
    price: 170,
    realPrice: 199,
    size: "200ml",
    select: "15% Off",
    Rating: 5,
    fragrance:
      "The wide-toothed neem wooden comb is handcrafted in India with 100% long neem wood.",
  },

  // By Product Type
  {
    //Shampoo
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-01_1_700x.jpg?v=1651698374",
    title: "Reverse Hairwash Pack Of Conditioner & Shampoo, 200ml Each",
    type: "By Product Type",
    subtype: "Shampoo",
    price: 499,
    realPrice: 599,
    size: "200ml",
    select: "17% Off",
    Rating: 4.9,
    fragrance:
      "Anti Frizz, Anti Hairfall & Nourishing",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protin-Hair-Shampoo-01_700x.jpg?v=1652169655",
    title: "Growth Protein Shampoo, 200ml",
    type: "By Product Type",
    subtype: "Shampoo",
    price: 299,
    realPrice: 349,
    size: "200ml",
    select: "14% Off",
    Rating: 4.8,
    fragrance:
      "New age hair care with age-old blends! The Bella Vita Organic Growth Protein Shampoo is here to take your hair",
  },
  {
    //Conditioner
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Conditioner-01_ef846ab9-d1dc-4c51-ab39-41a3031812dd_700x.jpg?v=1651698301",
    title: "Growth Protein Hair Conditioner, 200ml",
    type: "By Product Type",
    subtype: "Conditioner",
    price: 349,
    realPrice: 399,
    size: "200ml",
    select: "14% Off",
    Rating: 4.7,
    fragrance:
      "The Ayurvedic answer to frizzy & rough hair is here! The Bella Vita Organic Growth Protein Hair Conditioner",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth-Protein-Hair-Oil-01_700x.jpg?v=1651698303",
    title: "Growth Protein Hair Oil, 200ml",
    type: "By Product Type",
    subtype: "oil",
    price: 275,
    realPrice: 299,
    size: "200ml",
    select: "8% Off",
    Rating: 4.7,
    fragrance:
      "Here's to your at-home hair treatment! The Bella Vita Organic Growth Protein Hair Oil is the perfect Ayurveda",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Mask-01_700x.jpg?v=1651698302",
    title: "Growth Protein Hair Mask, 200gm",
    type: "By Product Type",
    subtype: "Shampoo",
    price: 375,
    realPrice: 399,
    size: "200gm",
    select: "8% Off",
    Rating: 4.7,
    fragrance:
      "The Bella Vita Organic Growth Protein duo of shampoo & conditioner is truly the easiest route to shinier, thicker & nourished hair!",
  },
  {
    //combo
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_700x.jpg?v=1651698311",
    title: "Hair For You Combo",
    type: "By Product Type",
    subtype: "combo",
    price: 598,
    realPrice: 748,
    size: "200gm",
    select: "20% Off",
    Rating: 4.9,
    fragrance:
      "The Bella Vita Organic Growth Protein duo of shampoo & conditioner is truly the easiest route to shinier, thicker & nourished hair!",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-Us-Out-Combo-01_700x.jpg?v=1651698312",
    title: "Complete Hair Care Combo",
    type: "By Product Type",
    subtype: "combo",
    price: 837,
    realPrice: 1047,
    size: "200gm",
    select: "20% Off",
    Rating: 4.8,
    fragrance:
      "The Bella Vita Organic Growth Protein range that consists of a shampoo, hair conditioner ",
  },
  {
    //perfume
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_700x.jpg?v=1626681100",
    title: "Hair Perfume Mist Spray Unisex, 50ml",
    type: "By Product Type",
    subtype: "Perfume",
    price: 338,
    realPrice: 450,
    size: "50ml",
    select: "20% Off",
    Rating: 4.6,
    fragrance:
      "Our sweet & floral Hair perfume for women and men will help you take your hair game to the next level.",
  },
  {
    //comb
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombWideTeeth-01_700x.jpg?v=1652170954",
    title: "Neem Wooden Wide Tooth Comb",
    type: "By Product Type",
    subtype: "comb",
    price: 170,
    realPrice: 170,
    size: "-",
    select: "20% Off",
    Rating: 4.7,
    fragrance:
      "The wide-toothed neem wooden comb is handcrafted in India with 100% long neem wood.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_700x.jpg?v=1633437311",
    title: "Neem Wooden Wide Tooth Comb",
    type: "By Product Type",
    subtype: "comb",
    price: 170,
    realPrice: 199,
    size: "-",
    select: "20% Off",
    Rating: 4.7,
    fragrance:
      "The wide-toothed neem wooden comb is handcrafted in India with 100% long neem wood.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-03_c650cdd1-e70d-40b3-8dea-1068c6532363_700x.jpg?v=1656497313",
    title: "Oil Control Shampoo",
    type: "By Product Type",
    subtype: "Shampoo",
    price: 299,
    realPrice: 349,
    size: "100ml",
    select: "14% Off",
    Rating: 5.0,
    fragrance:
      "With Bella Vita Organic Oil-Control Shampoo, indulge in the perfect dose of purification for your oily",
  },
  //Hair concern Types
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protin-Hair-Shampoo-01_700x.jpg?v=1652169655",
    title: "Growth Protein Shampoo, 200ml",
    type: "By Hair Concern",
    subtype: "Shampoo",
    price: 299,
    realPrice: 349,
    size: "200ml",
    select: "14% Off",
    Rating: 4.8,
    fragrance:
      "New age hair care with age-old blends! The Bella Vita Organic Growth Protein Shampoo is here to take your hair",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth-Protein-Hair-Oil-01_700x.jpg?v=1651698303",
    title: "Growth Protein Hair Oil, 200ml",
    type: "By Hair Concern",
    subtype: "oil",
    price: 299,
    realPrice: 349,
    size: "200ml",
    select: "8% Off",
    Rating: 4.8,
    fragrance:
      "Here's to your at-home hair treatment! The Bella Vita Organic Growth Protein Hair Oil is the perfect Ayurveda",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_700x.jpg?v=1651698311",
    title: "Hair For You Combo",
    type: "By Hair Concern",
    subtype: "combo",
    price: 598,
    realPrice: 748,
    size: "-",
    select: "20% Off",
    Rating: 4.8,
    fragrance:
      "Here's to your at-home hair treatment! The Bella Vita Organic Growth Protein Hair Oil is the perfect Ayurveda",
  },
  {
    //conditioner
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Conditioner-01_ef846ab9-d1dc-4c51-ab39-41a3031812dd_700x.jpg?v=1651698301",
    title: "Growth Protein Hair Conditioner, 200ml",
    type: "By Hair Concern",
    subtype: "Conditioner",
    price: 349,
    realPrice: 399,
    size: "200ml",
    select: "13% Off",
    Rating: 4.7,
    fragrance:
      "The Ayurvedic answer to frizzy & rough hair is here! The Bella Vita Organic Growth Protein Hair Conditioner",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-06_700x.jpg?v=1633437312",
    title: "Neem Wooden Dual Tooth Comb",
    type: "By Hair Concern",
    subtype: "comb",
    price: 170,
    realPrice: 199,
    size: "200ml",
    select: "15% Off",
    Rating: 5,
    fragrance:
      "The wide-toothed neem wooden comb is handcrafted in India with 100% long neem wood.",
  },

  //Body Care

  {
    //Soap
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-Glow-01_c664d6e2-165a-4f18-824a-461daed32c3f_700x.jpg?v=1651696252",
    title: "C-Glow Body Wash Bar, 150gm",
    type: "Body Care",
    subtype: "soap",
    price: 149,
    realPrice: 199,
    size: "150gm",
    select: "25%off",
    Rating: 5,
    fragrance:
      "Immerse yourself in some Vitamin C aka the goodness of Orange! ",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Coalwave-01_700x.jpg?v=1651696320",
    title: "CoalWave Body Wash Bar, 150gm",
    type: "Body Care",
    subtype: "soap",
    price: 149,
    realPrice: 199,
    size: "150gm",
    select: "25%off",
    Rating: 5,
    fragrance:
      "Formulated with Charcoal, Shea Butter, and Basil, the CoalWave Body Wash Bar is an exceptional exfoliator.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UbtanPlus-01_700x.jpg?v=1651696408",
    title: "Ubtan Plus Body Wash Bar,150gm",
    type: "Body Care",
    subtype: "soap",
    price: 149,
    realPrice: 199,
    size: "150gm",
    select: "25%off",
    Rating: 5,
    fragrance:
      "Crafted with the natural goodness of Haldi, Kesar, and Chandan, our handmade Ubtan Plus Body Wash Bar",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Chakracleanse-01_700x.jpg?v=1651696291",
    title: "Chakra Cleanse Body Wash Bar,150gm",
    type: "Body Care",
    subtype: "soap",
    price: 149,
    realPrice: 199,
    size: "150gm",
    select: "25%off",
    Rating: 5,
    fragrance:
      "Crafted with the natural goodness of Haldi, Kesar, and Chandan, our handmade Ubtan Plus Body Wash Bar",
  },
  //Scrub
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_700x.jpg?v=1655010286",
    title: "Exfoliate Face And Body Scrub Grit ,75gm",
    type: "Body Care",
    subtype: "Scrub",
    price: 249,
    realPrice: 275,
    size: "75gm",
    select: "25%off",
    Rating: 4.8,
    fragrance:
      "The Bella Vita Organic Exfoliate Face & Body Scrub is a holy grail gentle exfoliator.",
  },
  //Lotion
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineNude-01_700x.jpg?v=1651698235",
    title: "Celeb Shine Body Lotion Nude, 50ml",
    type: "Body Care",
    subtype: "Lotion",
    price: 399,
    realPrice: 499,
    size: "50ml",
    select: "20%off",
    Rating: 4.8,
    fragrance:
      "Say hello to the ultimate glow-getter! ",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_cab54ba7-e00c-4426-87c1-249ee10304c6_700x.jpg?v=1651571277",
    title: "Glowtion - Face & Body Lotion,100ml",
    type: "Body Care",
    subtype: "Lotion",
    price: 275,
    realPrice: 299,
    size: "100ml",
    select: "8%off",
    Rating: 5,
    fragrance:
      "A non-greasy formula, the Bella Vita Organic Glowtion has the power to deeply nourish and moisturise your skin."
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineGold-01_e00fff97-54c2-489f-b054-88b90a7e8cac_700x.jpg?v=1652176140",
    title: "Celebshine Body Lotion Gold - 50ml",
    type: "Body Care",
    subtype: "Lotion",
    price: 399,
    realPrice: 499,
    size: "50ml",
    select: "8%off",
    Rating: 4.8,
    fragrance:
      "Say hello to the ultimate glow-getter! A radiant and exceptionally rich Body Illuminiser that adds shine"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SkinSolve-01_1_700x.jpg?v=1655122264",
    title: "Skinsolve - Multi-Benefit Butter Balm",
    type: "Body Care",
    subtype: "Lotion",
    price: 285,
    realPrice: 325,
    size: "50ml",
    select: "12%off",
    Rating: 4.8,
    fragrance:
      "Bella Vita Organic Skinsolve, a multi-benefit butter balm, is the perfect go-to for radiant and smooth skin"
  },
  //Perfumes Categories
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OUD-01_5d17f334-cc6c-4fe1-b230-cb95f79726ab_700x.jpg?v=1652422383",
    title: "OUD UNISEX LUXURY PERFUME, 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 669,
    realPrice: 999,
    size: "100ml",
    select: "33%off",
    Rating: 4.6,
    fragrance:
      "Anatomy of Aristocracy.Bursting with heritage and regal opulence"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Patchouli-01_82546528-2724-4089-89ac-409327d09013_700x.jpg?v=1652422699",
    title: "PATCHOULI UNISEX PERFUME , 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 669,
    realPrice: 999,
    size: "100ml",
    select: "33%off",
    Rating: 4.9,
    fragrance:
      "Pragmatic Patchouli!A uniquely exciting blend that transpires us into the Imperial apothecary"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Patchouli-01_82546528-2724-4089-89ac-409327d09013_700x.jpg?v=1652422699",
    title: "PATCHOULI UNISEX PERFUME , 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 669,
    realPrice: 999,
    size: "100ml",
    select: "33%off",
    Rating: 4.6,
    fragrance:
      "Pragmatic Patchouli!A uniquely exciting blend that transpires us into the Imperial apothecary"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Patchouli-01_82546528-2724-4089-89ac-409327d09013_700x.jpg?v=1652422699",
    title: "ROSE WOMAN LUXURY PERFUME - 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 599,
    realPrice: 899,
    size: "100ml",
    select: "33%off",
    Rating: 4.6,
    fragrance:
      "Pragmatic Patchouli!A uniquely exciting blend that transpires us into the Imperial apothecary"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_700x.jpg?v=1626681100",
    title: "ROSE WOMAN LUXURY PERFUME - 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 338,
    realPrice: 450,
    size: "50ml",
    select: "33%off",
    Rating: 4.5,
    fragrance:
      "Our sweet & floral Hair perfume for women and men will help you take your hair game to the next level"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HoneyOUD20ml-02_360x.jpg?v=1649504932",
    title: "ROSE WOMAN LUXURY PERFUME - 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 338,
    realPrice: 450,
    size: "50ml",
    select: "33%off",
    Rating: 4.7,
    fragrance:
      "Our sweet & floral Hair perfume for women and men will help you take your hair game to the next level"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Patchouli20ml-02_360x.jpg?v=1649512588",
    title: "ROSE WOMAN LUXURY PERFUME - 100ml",
    type: "PERFUMES",
    subtype: "Perfume",
    price: 338,
    realPrice: 450,
    size: "50ml",
    select: "33%off",
    Rating: 4.9,
    fragrance:
      "Our sweet & floral Hair perfume for women and men will help you take your hair game to the next level"
  },

  //COMBOS

  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Brighter-Days-Combo-02_360x.jpg?v=1651698233",
    title: "Natural Anti Pollution Combo",
    type: "Combos",
    subtype: "Combo",
    price: 444,
    realPrice: 524,
    size: "-",
    select: "15%off",
    Rating: 4.7,
    fragrance:
      "Face care made easy! Buff away dead skin cells, white & blackheads and stubborn tanning with the easy-to-use combination of C-Glow Face Wash"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/TheUltimateGlowBoosterCombo-02_360x.jpg?v=1652276281",
    title: "The Ultimate Glow Booster Combo",
    type: "Combos",
    subtype: "Combo",
    price: 927,
    realPrice: 1547,
    size: "-",
    select: "40%off",
    Rating: 4.7,
    fragrance:
      "Face care made easy! Buff away dead skin cells, white & blackheads and stubborn tanning with the easy-to-use combination of C-Glow Face Wash"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteRollonDeodorantMenPackof2Combo_1_700x.jpg?v=1651698356",
    title: "Roll On Deo - Men (Pack Of 2), 50ml",
    type: "Combos",
    subtype: "Combo",
    price: 318,
    realPrice: 398,
    size: "-",
    select: "20%off",
    Rating: 4.8,
    fragrance:
      "Face care made easy! Buff away dead skin cells, white & blackheads and stubborn tanning with the easy-to-use combination of C-Glow Face Wash"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_700x.jpg?v=1647863372",
    title: "Natural Lip Care Kit- Nicolips & Lip Balm",
    type: "Combos",
    subtype: "Combo",
    price: 540,
    realPrice: 675,
    size: "-",
    select: "20%off",
    Rating: 4.7,
    fragrance:
      "Here's your sign to build a lip care routine! Exfoliate, nourish & condition your lips with the prowess of Nicolips"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_3f99b360-1812-4e25-a1eb-01d2e4b735bd_360x.jpg?v=1647935818",
    title: "Natural Lip Care Kit- Nicolips & Lip Balm",
    type: "Combos",
    subtype: "Combo",
    price: 540,
    realPrice: 675,
    size: "-",
    select: "20%off",
    Rating: 4.7,
    fragrance:
      "Here's your sign to build a lip care routine! Exfoliate, nourish & condition your lips with the prowess of Nicolips"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NaturalRadianceCombo-02_360x.jpg?v=1652277008",
    title: "Natural Lip Care Kit- Nicolips & Lip Balm",
    type: "Combos",
    subtype: "Combo",
    price: 550,
    realPrice: 875,
    size: "-",
    select: "30%off",
    Rating: 4.9,
    fragrance:
      "Here's your sign to build a lip care routine! Exfoliate, nourish & condition your lips with the prowess of Nicolips"
  },

];

localStorage.setItem("all_data", JSON.stringify(data));
