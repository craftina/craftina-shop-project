import './Header.css';
import {Link, useNavigate} from 'react-router-dom';
import DropDownMenu from './DropDownMenu/DropDownMenu';

const Header = () => {
const navigate = useNavigate();
const onClickLogo = ((e) => {
   e.preventDefault();
   navigate('/')
});

    return (
    <>
    <DropDownMenu />
        <div className="header">  
           <div className="row">
           <div className="col-lg-9 drop-down-menu">
                 <div className="right_header_info">
                    
                          <button type="button" id="sidebarCollapse">
                          <img src="images/drop-down-menu.png" alt="#" />
                          </button>
                       
                 </div>
              </div>
              <div className="col-lg-3 logo_section">
                 <div className="full">
                    <div className="center-desk">
                       <div className="logo"> <Link to="/"><img onClick={onClickLogo} src="images/logo-transperant.png" alt="#" /></Link> </div>
                    </div>
                 </div>
              </div>
              <div className="col-lg-9 user-nav">
                 <div className="right_header_info">
                    <ul>
                       <li className="login-link"><Link to="/login">Login</Link></li>
                       <li className="register-link"><Link to="/register">Register</Link></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
         </>
    );
}

export default Header;