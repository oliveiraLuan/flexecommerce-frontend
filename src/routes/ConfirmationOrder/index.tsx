import { useEffect, useState } from "react";
import { OrderDTO } from "../../models/order";
import { useParams } from "react-router-dom";
import { findById } from "../../services/order-service";
import "./styles.css";
export default function ConfirmationOrder() {
  const [order, setOrder] = useState<OrderDTO>();

  const params = useParams();

  useEffect(() => {
    findById(Number(params.orderId))
    .then((response) => setOrder(response.data));
  }, []);

  return (
    <>
      <main>
        <section id="cart-container-section" className="dsc-container">
          {order?.items.length === 0 ? (
            <div className="dsc-section-title dsc-mb20">
              <h2>O carrinho está vazio</h2>
            </div>
          ) : (
            <div className="dsc-card dsc-mb20">
              {order?.items.map((item) => (
                <div
                  key={item.productId}
                  className="dsc-cart-item-container dsc-line-bottom"
                >
                  <div className="dsc-cart-item-left">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="dsc-cart-item-description">
                      <h3>{item.name}</h3>
                      <div className="dsc-cart-item-quantity-container">
                        <p>{item.quantity}</p>
                      </div>
                    </div>
                  </div>
                  <div className="dsc-cart-item-right">
                    R$ {item.subTotal.toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="dsc-cart-total-container">
                <h3>R$ {order?.total.toFixed(2)}</h3>
              </div>
            </div>
          )}

          <div className="dsc-confirmation-message dsc-mb20">
            Código do pedido - {order?.id}
          </div>
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-white">Início</div>
          </div>
        </section>
      </main>
    </>
  );
}
