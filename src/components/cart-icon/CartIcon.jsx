import './CartIcon.styles.scss';
import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';

import CartSvg from '../../assets/shopping-bag.svg?react';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleVisibility = () => {
        setIsCartOpen(!isCartOpen)
    }
    return(
        <div className='cart-icon-container' onClick={toggleVisibility}>
            <CartSvg className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;