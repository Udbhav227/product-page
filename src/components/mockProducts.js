import demoRing from '../assets/img/demo.webp';

const mockProducts = Array.from({ length: 352 }, (_, i) => ({
  id: 101 + i,
  name: `Product Name ${i + 1}`,
  imageUrl: demoRing,
  originalPrice: Math.floor(Math.random() * 50000) + 10000,
  salePrice: Math.floor(Math.random() * 40000) + 9000,
  isSale: Math.random() > 0.2,
}));

export default mockProducts;