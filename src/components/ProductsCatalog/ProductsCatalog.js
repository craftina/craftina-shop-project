import './ProductsCatalog.css';
import {  useEffect, useState, Suspense, lazy } from 'react';
import { getMugs } from '../../services/apiServices';

const ProductsCatalogItem = lazy(() => import('./ProductsCatalogItem/ProductsCatalogItem'));

const ProductsCatalog = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getMugs()
            .then(result => {
                setCatalog(result)
            });
    }, [])

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
                            ? catalog.map(i => <ProductsCatalogItem key={i.objectId} item={i} />)
                            : <h3 className="no-articles">No Products Yet.</h3>
                        }
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default ProductsCatalog;