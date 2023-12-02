import './styles.css';
import pneu from '../../assets/pneu.png';

export default function Cart() {
  return (
    <>
      <main>
        <section id="cart-container-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            <div className="dsc-cart-item-container dsc-line-bottom">
              <div className="dsc-cart-item-left">
                <img src={pneu} alt="Computador" />
                <div className="dsc-cart-item-description">
                  <h3>Pneu Continental 185/65 R15</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <div className="dsc-cart-item-quantity-btn">-</div>
                    <p>1</p>
                    <div className="dsc-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">R$ 320,00</div>
            </div>
            <div className="dsc-cart-item-container dsc-line-bottom">
              <div className="dsc-cart-item-left">
                <img src={pneu} alt="Computador" />
                <div className="dsc-cart-item-description">
                  <h3>Pneu Continental 185/R65 15</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <div className="dsc-cart-item-quantity-btn">-</div>
                    <p>1</p>
                    <div className="dsc-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">R$ 320,00</div>
            </div>
            <div className="dsc-cart-total-container">
              <h3>R$ 640,00</h3>
            </div>
          </div>
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
            <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
          </div>
        </section>
      </main>
    </>
  );
}
