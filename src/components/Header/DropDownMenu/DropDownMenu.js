import './DropDownMenu.css';
import { Route, Router } from 'react-router';

const DropDownMenu = () => {
    

    return (
        <div className="sidebar">
            <nav id="sidebar">

                <div id="dismiss">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="menu" >

                <div className="products">
                    <a href="/products">Products</a>
                </div>
                <ul className="list-unstyled components">
                    <li> <a href="index.html">Mugs</a></li>
                    <li> <a href="product.html">Jars</a></li>
                    <li> <a href="contact.html">Jelewry</a></li>

                </ul>
                </div>

            </nav>
        </div>
    );
}

export default DropDownMenu;