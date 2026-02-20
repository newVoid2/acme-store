import './CartDropdown.styles.scss'
import Button from '../button/button'

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <span className='empty-message'>Your Cart is empty</span>
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown