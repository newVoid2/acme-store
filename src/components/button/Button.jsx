import './Button.styles.scss'

const ButtonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, inputOptions}) => {
    return(
        <button className={`button-container ${ButtonTypeClasses[buttonType]}`} {...inputOptions}>{children}</button>
    )
}

export default Button;