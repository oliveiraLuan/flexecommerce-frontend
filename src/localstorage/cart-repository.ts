import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function get() : OrderDTO {
    const str = localStorage.getItem(CART_KEY) || '{"items":[]}';
    const obj = JSON.parse(str) as OrderDTO;
    const cart = new OrderDTO();
    
    obj.items.forEach((orderItemDTO) => {
        cart.items.push(new OrderItemDTO(orderItemDTO.productId, orderItemDTO.quantity, orderItemDTO.name, orderItemDTO.price, orderItemDTO.imgUrl));
    })
    return cart;
}

export function clear(){
    localStorage.setItem(CART_KEY, '{"items":[]}');
}