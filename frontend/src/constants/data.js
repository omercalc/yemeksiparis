import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  dish1,
  dish2,
  dish3,
  dish4,
  dish5,
  dish6,
  dish7,
  dish8,
  dish9,
  dish10,
  best1,
  best2,
  best3,
} from "../utils/index";

const data = [
  { id: 1, img: gallery1 },
  { id: 2, img: gallery2 },
  { id: 3, img: gallery3 },
  { id: 4, img: gallery4 },
  { id: 5, img: gallery5 },
  { id: 6, img: gallery6 },
  { id: 7, img: gallery7 },
  { id: 8, img: gallery8 },
  { id: 9, img: gallery9 },
  { id: 10, img: gallery10 },
  { id: 11, img: gallery11 },
  { id: 12, img: gallery12 },
];
export default data;



export const dishMenu = [
  {
    id: 1,
    name: "Akdeniz Esintisi",
    dish: "Zeytinyağlı Enginar",
    description:
      "Taze enginar kalpleri, zeytinyağı, limon suyu ve ince doğranmış dereotu ile marine edilip, yanında haşlanmış sebzelerle sunulur.",
    rating: 4.2,
    image: dish1,
    ingredients: ["Enginar", "Zeytinyağı", "Limon suyu", "Dereotu", "Sebzeler"],
    servingTime: "15-20 dakika",
    oldPrice: 50,
    newPrice: 45,
    price: 45
  },
  {
    id: 2,
    name: "İtalyan Mutfağı",
    dish: "Margherita Pizza",
    description:
      "İnce hamurlu, taze domates sosu, mozzarella peyniri ve fesleğen yapraklarıyla süslenmiş klasik İtalyan pizzası.",
    rating: 4.8,
    image: dish2,
    ingredients: ["Pizza hamuru", "Domates sosu", "Mozzarella peyniri", "Taze fesleğen", "Zeytinyağı", "Tuz"],
    servingTime: "20-25 dakika",
    oldPrice: 60,
    newPrice: 55,
    price: 55
  },
  {
    id: 3,
    name: "Uzak Doğu",
    dish: "Sushi Combo",
    description:
      "Somon, ton balığı ve avokado ile hazırlanan çeşitli nigiri ve maki roll'lardan oluşan bir tabak.",
    rating: 4.5,
    image: dish3,
    ingredients: ["Somon", "Ton balığı", "Avokado", "Sushi pirinci", "Yosun"],
    servingTime: "15-20 dakika",
    oldPrice: 90,
    newPrice: 85,
    price: 85
  },
  {
    id: 4,
    name: "Türk Mutfağı",
    dish: "Adana Kebap",
    description:
      "Acılı kıyma ile hazırlanan, közde pişirilmiş, yanında lavaş ekmeği, soğan salatası ve közlenmiş biber ile sunulan geleneksel kebap.",
    rating: 4.7,
    image: dish4,
    ingredients: ["Kıyma", "Lavaş ekmeği", "Soğan", "Biber", "Baharatlar"],
    servingTime: "30-35 dakika",
    oldPrice: 70,
    newPrice: 65,
    price: 65
  },
  {
    id: 5,
    name: "Deniz Ürünleri",
    dish: "Karides Tava",
    description:
      "Taze karideslerin sarımsak, tereyağı ve beyaz şarap ile sote edilerek hazırlanan deniz ürünü tabağı.",
    rating: 4.4,
    image: dish5,
    ingredients: ["Karides", "Sarımsak", "Tereyağı", "Beyaz şarap", "Maydanoz"],
    servingTime: "10-15 dakika",
    oldPrice: 80,
    newPrice: 75,
    price: 75
  },
  {
    id: 6,
    name: "Fransız Mutfağı",
    dish: "Ratatouille",
    description:
      "Kabak, patlıcan, kırmızı biber ve domatesin ince dilimlenip, aromatik baharatlarla fırınlandığı hafif ve lezzetli bir sebze yemeği.",
    rating: 4.6,
    image: dish6,
    ingredients: ["Kabak", "Patlıcan", "Kırmızı biber", "Domates", "Baharatlar"],
    servingTime: "25-30 dakika",
    oldPrice: 55,
    newPrice: 50,
    price: 50
  }
  
];

export const mealOfWeek = [
  {
    id:1,
    dish: "Adana Kebap",
    image: dish4,
    price: "170.00",
  },
  {
    id:2,
    dish: "Pekin Ördeği",
    image: dish10,
    price: "190.00",
  },
  {
    id:3,
    dish: "Ratatouille",
    image: dish6,
    price: "150.00",
  },
]
export const chiefSuggestions = [
  {
    id: 1,
    dish: "Tavuk Fajita",
    image: dish7,
    price: "120.00",
  },
  {
    id: 2,
    dish: "Butter Chicken",
    image: dish8,
    price: "130.00",
  },
  {
    id: 3,
    dish: "Cheeseburger",
    image: dish9,
    price: "110.00",
  }
]

export const bestImage = [
  { id: 1, img: best1, title: "Kahvaltı" },
  { id: 2, img: best2, title: "Öğle Yemeği" },
  { id: 3, img: best3, title: "Akşam Yemeği" },
];

export const CategoryAddProduct = [
  {
    name: "Kebap",
    promotions: [
      {
        name: "2 al 1 öde",
        price: "231.00",
      },
      {
        name: "3 al 2 öde",
        price: "331.00",
      },
    ],
    sideProducts: [
      { name: "Yoğurt", price: "21.44" },
      { name: "Ezme", price: "11.00" },
      { name: "Acı Sos", price: "1.25" },
      { name: "Sarımsaklı Sos", price: "1.75" },
    ],
  },
  {
    name: "Pizza",
    promotions: [
      { name: "Orta boy alana küçük boy bedava", price: "276.09" },
      { name: "Ekstra malzeme ücretsiz", price: "0.00" },
    ],
    sideProducts: [
      { name: "Sarımsaklı Ekmek", price: "4.39" },
      { name: "Ranch Sos", price: "1.42" },
      { name: "Buffalo Wings", price: "7.14" },
      { name: "Barbekü Sos", price: "1.25" },
      { name: "Ketçap", price: "0.75" },
    ],
  },
  {
    name: "Salata",
    promotions: [
      { name: "Yanına çorba ücretsiz", price: "0.00" },
      { name: "Ekstra malzeme %50 indirimli", price: "50.00" },
    ],
    sideProducts: [
      { name: "Kruton", price: "1.97" },
      { name: "Beyaz Peynir", price: "2.74" },
      { name: "Zeytin", price: "2.19" },
      { name: "Hardallı Sos", price: "1.42" },
      { name: "Nar Ekşisi", price: "2.41" },
      { name: "Yoğurt Sosu", price: "1.25" },
      { name: "Sirke", price: "0.85" },
    ],
  },
  {
    name: "Deniz Ürünleri",
    promotions: [
      { name: "Deniz ürünü alana yanında salata ücretsiz", price: "0.00" },
      { name: "Meze %50 indirimli", price: "50.00" },
    ],
    sideProducts: [
      { name: "Roka Salatası", price: "3.84" },
      { name: "Karides Tava", price: "8.79" },
      { name: "Kalamar", price: "7.14" },
      { name: "Tartar Sos", price: "1.64" },
      { name: "Balık Çorbası", price: "5.49" },
      { name: "Limon Sosu", price: "1.25" },
      { name: "Zeytinyağı", price: "1.15" },
    ],
  },
  {
    name: "Uzak Doğu",
    promotions: [
      { name: "Sushi setlerinde %20 indirim", price: "20.00" },
      { name: "Tatlı ücretsiz", price: "0.00" },
    ],
    sideProducts: [
      { name: "Soğan Halkası", price: "3.62" },
      { name: "Buharda Pirinç", price: "3.29" },
      { name: "Miso Çorbası", price: "3.51" },
      { name: "Acılı Mayonez", price: "1.31" },
      { name: "Soya Sosu", price: "1.64" },
      { name: "Wasabi", price: "1.45" },
      { name: "Zencefil Turşusu", price: "1.25" },
    ],
  },
];
