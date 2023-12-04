import { useEffect } from "react";
import "./styles.css";
import { OrderDTO, OrderItemDTO } from "../../models/order";
import * as cartService from "../../services/cart-service";

export default function Cart() {

  const item1 : OrderItemDTO = new OrderItemDTO(
    4, 1, "PNEU 195/55R15 CONTINENTAL", 399.90, "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-19555r15-continental-powercontact-2-85h-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg&dpr=2%202x"
  );

  const item2 : OrderItemDTO = new OrderItemDTO(
    5,2, "Pneu Aro 15 Pirelli Powergy 195/55r15 85h", 329.89, "https://carrefourbr.vtexassets.com/arquivos/ids/131689140-1280-auto?v=638319739534100000&width=1280&height=auto&aspect=true"
  )

  const cart : OrderDTO = new OrderDTO;
  cart.items.push(item1);
  cart.items.push(item2);

  useEffect(() => {  
    cartService.save(cart);
  }, []);

  return (
    <>
      <main>
        <section id="cart-container-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            {cart.items.map((item) => (
              <div className="dsc-cart-item-container dsc-line-bottom">
                <div className="dsc-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="dsc-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div className="dsc-cart-item-quantity-btn">-</div>
                      <p>{item.quantity}</p>
                      <div className="dsc-cart-item-quantity-btn">+</div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">R$ {(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
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
