import './ProductsCatalogItem.css';
import { Link, Outlet, useNavigate, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails/ItemDetails';


const ProductsCatalogItem = ({ type, item }) => {
    const navigate = useNavigate();
    // let itemId = item.objectId;
    // const [itemDetails, setItemDetails] = useState(item);
    
    // useEffect(() => {
    //     setItemDetails(item);
    // }, []);
    // console.log(itemDetails.objectId);
    
    const onAddToCart = (e) => {
        e.preventDefault();
        navigate('/cart');
    }
    
    return (

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">

            <div className="full product">
                <div className="product_img">
                    <div className="center">
                        <img src={item.imgUrl} alt="#" />
                        <div className="overlay_hover">
                            <Link className="add-bt" to="/">+ Add to cart</Link>
                            <Link className="add-bt" to={`/${type}-${item.objectId}`} >Details</Link>
                        </div>
                    </div>
                </div>
                <div className="product_detail text_align_center">
                    <p className="product_price">${item.price}</p>
                    <p className="product_descr">{item.name}</p>
                </div>
            </div>
            
        </div>
    );
}

export default ProductsCatalogItem;