import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from "../localstorage/cart-repository"
import { ProductDTO } from "../models/product";

export function save(cart: OrderDTO){
    cartRepository.save(cart);
}

export function get() : OrderDTO {
    return cartRepository.get();
}

export function addProduct(product: ProductDTO){
    const cart = get();
    const item =  cart.items.find(produto => produto.productId === product.id);
    //Salva o item se ainda não tiver sido 
    if(!item){
        const orderItemDTO = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(orderItemDTO);
        save(cart);        
    }
}

export function clearCart(){
    cartRepository.clear();
}

export function increaseItem(productId: number){
    const cart = get();
    const item = cart.items.find(product => product.productId === productId);
    if(item){
        item.quantity += 1;
        save(cart);
    }
}

export function decreaseItem(productId: number){
    const cart = get();
    const item = cart.items.find(product => product.productId === productId);
    if(item){
        item.quantity -= 1;
        if(item.quantity < 1){
            cart.items = cart.items.filter((product) => product.productId !== productId);
        }
        save(cart);
    }
}