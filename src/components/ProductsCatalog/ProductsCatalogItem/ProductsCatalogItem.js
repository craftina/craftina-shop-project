import './ProductsCatalogItem.css';
import {Link} from 'react-router-dom';

const ProductsCatalogItem = ({item}) => {
    console.log(item.imgUrl);
    return (

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            
            <div className="full product">
                <div className="product_img">
                    <div className="center"> 
                    <img src={item.imgUrl} alt="#"/>
                        <div className="overlay_hover"> <Link className="add-bt" to="/">+ Add to cart</Link> </div>
                    </div>
                </div>
                <div className="product_detail text_align_center">
                    <p className="product_price">${item.price}</p>
                    <p className="product_descr">Mug</p>
                </div>
            </div> 
        </div>
    );
}

export default ProductsCatalogItem;