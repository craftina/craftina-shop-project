import './DropDownMenu.css';
import { Link, Route, Routes } from 'react-router-dom';
import ProductsCategories from '../../ProductsCategories/ProductsCategories';
import ProductsCatalog from '../../ProductsCatalog/ProductsCatalog';

const DropDownMenu = () => {


    return (
        <div className="sidebar">
            <nav id="sidebar" >

                <div id="dismiss">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="menu" >

                    <div className="products">
                        <Link to="/products">Products</Link>
                    </div>
                    <ul className="list-unstyled components">
                        <li> <Link to="/mugs">Mugs</Link></li>
                        <li> <Link to="/jars">Jars</Link></li>
                        <li> <Link to="/earrings">Earrings</Link></li>
                    </ul>
                </div>

            </nav>


            {/* <section>
                {/* <Routes>
                    {/* <Route path="/products" element={<ProductsCategories />}> */}
                        {/* <Route path="mugs" element={<ProductsCatalog />} />
                        <Route path="jars" element={<ProductsCatalog />} />
                        <Route path="earrings" element={<ProductsCatalog />} /> */}
                    {/* </Route> */}
                {/* </Routes> */} 
            {/* </section> */}
        </div>
    );
}

export default DropDownMenu;