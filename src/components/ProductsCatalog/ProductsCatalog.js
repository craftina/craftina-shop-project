import './ProductsCatalog.css';
import { useEffect, useState, Suspense, lazy } from 'react';
import { getProducts } from '../../services/apiServices';
import { Outlet, Routes , Route } from 'react-router-dom';
import ItemDetails from './ProductsCatalogItem/ItemDetails/ItemDetails';

const ProductsCatalogItem = lazy(() => import('./ProductsCatalogItem/ProductsCatalogItem'));

const ProductsCatalog = ({ type }) => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getProducts(type)
            .then(result => {
                setCatalog(result)
            });
    }, [type])

    return (
        <div>
            <div className="container">
                <div className="row product_style_3">
                    <Suspense fallback={
                        <div>
                            Loading...
                        </div>
                    }>
                        {catalog.length > 0
                            ? catalog.map((i) => {
                                console.log(i);
                                return <ProductsCatalogItem key={i.objectId} item={i} type={type} />
                            })
                            : <h3 className="no-articles">No Products Yet.</h3>
                        }
                    </Suspense>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default ProductsCatalog;