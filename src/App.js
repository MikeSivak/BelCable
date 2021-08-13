import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
