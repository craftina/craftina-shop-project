import { useNavigate } from 'react-router-dom';
import { getCart } from '../../services/authService'
import { useEffect, useState, Suspense, lazy } from 'react';
import './Cart.css';
const CartItem = lazy(() => import('./CartItem/CartItem'));

const Cart = () => {

    const [cart, setCart] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        let result = getCart(sessionStorage.userToken)
        console.log(result);
        setCart([{ name: "Flowers", price: 30, imgUrl: 'images/mug1.jpg', objectId: '11546' },
        { name: "Flowers", price: 30, imgUrl: 'images/mug1.jpg', objectId: '52655' }])
    }, []);

    function onBuyBtn(e) {
        e.preventDefault();
        console.log('Bought');
    }




    return (
        <div className="ourproduct">
            <div className="container">
                <div className="row product_style_3">
                    <Suspense fallback={
                        <div>
                            Loading...
                        </div>
                    }>
                        <form method="POST" onSubmit={onBuyBtn}>
                            <div className="products box">
                                {cart.length > 0
                                    ? cart.map(i => (<div className='item'>
                                        <div className='checkbox'>
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </div>
                                        <CartItem key={i.objectId} item={i} />
                                    </div>))
                                    : <h3 className="no-articles">No Products Yet.</h3>
                                }
                                {/* <img src="./images/form_logo.png" /> */}
                            </div>
                            <div className="buyer box">
                                <div className="input_box name">
                                    <label htmlFor="name">Name</label>
                                    <div>
                                        <input type="text" name="name" placeholder="name" />
                                    </div>
                                </div>
                                <div className="input_box email">
                                    <label htmlFor="email">Email Address</label>
                                    <div>
                                        <input type="email" name="email" placeholder="Username@gmail.com" />
                                    </div>
                                </div>
                                <div className="input_box phone">
                                    <label htmlFor="phone">Phone</label>
                                    <div>
                                        <input className="pas" type="phone" name="phone" placeholder="+359 123456789" />
                                    </div>
                                </div>
                                <div className="input_box adress">
                                    <label htmlFor="adress">Adress</label>
                                    <div>
                                        <input className="pas" type="text" name="adress" placeholder="............." />
                                    </div>
                                </div>
                                <button className="buy-btn">Buy</button>
                            </div>
                        </form>
                    </Suspense>

                </div>
            </div>
        </div >
    );
}

export default Cart;