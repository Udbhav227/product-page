import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListingPage from './pages/ProductListingPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;