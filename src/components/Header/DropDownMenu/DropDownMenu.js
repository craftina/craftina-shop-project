import './DropDownMenu.css';
import { Route, Router } from 'react-router';
import {Link} from 'react-router-dom';

const DropDownMenu = () => {
    

    return (
        <div className="sidebar">
            <nav id="sidebar">

                <div id="dismiss">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="menu" >

                <div className="products">
                    <Link to="/products">Products</Link>
                </div>
                <ul className="list-unstyled components">
                    <li> <Link to="/products/mugs">Mugs</Link></li>
                    <li> <Link to="/products/jars">Jars</Link></li>
                    <li> <Link to="/products/earrings">Earrings</Link></li>
                </ul>
                </div>

            </nav>
        </div>
    );
}

export default DropDownMenu;