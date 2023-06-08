import "../css/Cart.css"
import { useNavigate } from 'react-router-dom';

export default function Cart({ inCart, setItemInCart }) {
    console.log("inCart", inCart)
    let totalSum = 0;

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/form');
    };

    return (
        <div className="cart-page">
            <h1>Cart</h1>
            {inCart.map(item => {
                { totalSum += parseInt(item.price) }
            })}

            <h2>Total: {totalSum} SEK</h2>

            <div className="cart-items">
                {inCart.length > 0 ? inCart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">{item.price} :-</span>
                    </div>
                )) : <h1>Empty Cart</h1>}
            </div>
            <div className="button-container">
                {inCart.length > 0 ?
                    <>
                        <button className="empty-button" onClick={emptyCart}>
                            Empty Cart
                        </button>
                        <button className="continue-button" onClick={handleButtonClick}>
                            Continue
                        </button>
                    </> : <></>}
            </div>
        </div>
    );

    async function emptyCart() {
        setItemInCart([]);
    }

}
