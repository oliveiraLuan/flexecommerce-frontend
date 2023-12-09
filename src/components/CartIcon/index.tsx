import cartIcon from '../../assets/cart.svg';
import './styles.css';
import { ContextCartCount } from '../../utils/context-cart';
import { useContext } from 'react';

export default function CartIcon(){

    const {contextCartCount} = useContext(ContextCartCount);

    return (
        <>
        <div className='dsc-cart-items'>
            <img src={cartIcon} alt="Carrinho de compras" />
            <div className='dsc-count-cart'>{contextCartCount}</div>
        </div>
        </>
    );
}