import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <>
      <Header />
      {/* <HomePage/> */}
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
