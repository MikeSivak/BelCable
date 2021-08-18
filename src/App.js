import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes, { SwitchRouter } from './routes';

// Bad practice breadcrumb
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <SwitchRouter routes={routes} />
      <Footer />
    </>
  );
}

export default App;

// HomePage:
// -fix adaptive layout
// -add dinamic data in carousels
// ProductPage:
// -add dropdown dinamical menues
// -think about product description
// CardPage:
// -add dinamic changed data
