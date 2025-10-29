import demoRing from '../assets/img/demo.webp';

const productNames = ["Aura Diamond Ring", "Solstice Gold Band", "Celestial Pearl Ring", "Ember Studded Hoop", "Nova Gemstone Ring", "Lunar Sparkle Band"];
const metalTypes = ["Yellow Gold", "Rose Gold", "White Gold", "Platinum"];
const diamondClarities = ["VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"];
const diamondColors = ["D", "E", "F", "G", "H"];
const occasions = ["Daily Wear", "Engagement", "Festive", "Anniversary", "Office Wear"];

const generateSpecifications = (id) => [
  { label: "Product Code", value: `SKU${id + 1000}` },
  { label: "Base Metal", value: metalTypes[id % metalTypes.length] },
  { label: "Gross Weight", value: `${(Math.random() * 3 + 2).toFixed(2)}g` },
  { label: "Net Weight", value: `${(Math.random() * 2 + 1.5).toFixed(2)}g` },
  { label: "Diamond Clarity", value: diamondClarities[id % diamondClarities.length] },
  { label: "Diamond Colour", value: diamondColors[id % diamondColors.length] },
  { label: "Diamond Piece", value: Math.floor(Math.random() * 10) + 5 },
  { label: "Diamond Weight", value: `${(Math.random() * 0.3 + 0.1).toFixed(2)}ct` },
  { label: "Main Stone", value: "Diamond" },
  { label: "Metal Purity", value: "18k" },
  { label: "Occasion", value: occasions[id % occasions.length] },
];

const generateDescription = (name) => {
  return `Presenting the ${name}, a masterpiece of modern craftsmanship. This piece beautifully balances timeless elegance with a contemporary aesthetic, making it the perfect addition to any collection. Crafted from the finest materials, its sparkle is sure to turn heads.`;
};

const genericDetails = {
  shipping: {
    title: "Insured & Express Delivery",
    points: [
      "All orders are fully insured and shipped via trusted partners.",
      "Products are dispatched within 3-5 business days.",
      "Receive real-time tracking updates via Email and SMS.",
    ],
    footer: "For support, contact us at +91 1234567890 or support@example.com."
  },
  returns: {
    title: "Hassle-Free Exchange",
    points: [
      "We do not accept returns on fine jewellery.",
      "In case of a manufacturing defect, we offer a 7-day exchange policy.",
      "Contact our support team within 24 hours of delivery to report any issues.",
    ],
    footer: "Reach us at +91 1234567890 or support@example.com."
  },
  manufacturer: {
    sections: [
      {
        title: "Manufactured & Marketed By:",
        address: [
          "Example Jewels Pvt. Ltd.",
          "123, Jewelers Street, Example City, 123456",
        ]
      }
    ],
    footer: "All products are certified with BIS Hallmark for gold purity and IGI/GIA for diamond authenticity."
  }
};

const mockProducts = Array.from({ length: 352 }, (_, i) => {
  const name = `${productNames[i % productNames.length]} #${i + 1}`;
  const originalPrice = (Math.floor(Math.random() * 600) + 200) * 100;
  const salePrice = Math.floor(originalPrice * (Math.random() * 0.3 + 0.6));
  
  return {
    id: 101 + i,
    name: name,
    image_url: demoRing,
    original_price: originalPrice,
    sale_price: salePrice,
    is_sale: Math.random() > 0.3,
    details: {
      specifications: generateSpecifications(i), 
      description: generateDescription(name),
      ...genericDetails
    }
  };
});

export default mockProducts;