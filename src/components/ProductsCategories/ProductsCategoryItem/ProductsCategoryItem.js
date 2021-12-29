import './ProductsCategoryItem.css';
import { Link } from 'react-router-dom';

const ProductsCategoryItem = ({ category, navigate }) => {

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="full product">
                <div className="product_img">
                    <div className="center"> <img src={category.imgUrl} alt="#" />
                        {/* <div className="overlay_hover"> <a className="add-bt" href="product_detail3.html">+ Add to cart</a> </div> */}
                    </div>
                </div>

                <Link to={`/${category.type}`}>
                    <div className="product_detail text_align_center">
                        <p className="product_descr">{category.type}</p>
                    </div>
                </Link>
            </div>
        </div >
    );
}

export default ProductsCategoryItem;