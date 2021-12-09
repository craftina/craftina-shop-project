import './ProductsCategories.css';
import ProductsCategoryItem from './ProductsCategoryItem/ProductsCategoryItem.js'

const ProductsCategories = () => {
    return (
        <div className="ourproduct">
            <div className="container">
                <div className="row product_style_3">
                    <ProductsCategoryItem />

                </div>
            </div>
        </div>
    );
}

export default ProductsCategories;