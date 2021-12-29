import { useNavigate} from 'react-router-dom';
import { getCategories } from '../../services/apiServices';
import './ProductsCategories.css';
import { useEffect, useState, Suspense, lazy } from 'react';
const ProductsCategoryItem = lazy(() => import('./ProductsCategoryItem/ProductsCategoryItem'));


const ProductsCategories = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getCategories()
            .then(result => {
                setCategories(result)
            });
    }, []);


    return (
        <div className="ourproduct">
            <div className="container">
                <div className="row product_style_3">
                    <Suspense fallback={
                        <div>
                            Loading...
                        </div>
                    }>
                        {categories.length > 0
                            ? categories.map(c => <ProductsCategoryItem key={c.objectId} category={c} />)
                            : <h3 className="no-articles">No Products Yet.</h3>
                        }
                    </Suspense>

                </div>
            </div>
        </div>
    );
}

export default ProductsCategories;