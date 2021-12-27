import './CartItem.css';

const CartItem = ({ item }) => {

    return (
        <div className="cart_product">
            
            <div className="product_style">
                <div className="center_cart">
                    <img src={item.imgUrl} alt="#" />
                    <div className="cart_info">
                        <p>Name:........</p>
                        <p>Price: $20</p>
                        <p>Description: ....</p>
                    </div>

                </div>
            </div>
            

        </div>
    );
}

export default CartItem;