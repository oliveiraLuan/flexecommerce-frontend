import './App.css'
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';
import HeaderClient from './components/HeaderClient';
import ProductDetailsCard from './components/ProductDetailsCard';

function App() {

  return (<>

    <HeaderClient/>
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard/>
        <div className="dsc-btn-page-container">
            <ButtonPrimary/>
            <ButtonSecondary/>
        </div>
      </section>
    </main>
  </>)
}

export default App
