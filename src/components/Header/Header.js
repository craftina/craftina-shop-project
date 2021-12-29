import './Header.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import NavBarUser from './NavBarUser/NavBarUser';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutReq } from "../../services/authService";






const Header = () => {
   const navigate = useNavigate();
   // const { user, logout } = useAuthContext();
   // const {activeUser} = useContext(AuthContext)
   
   
   
   const onClickLogo = ((e) => {
      e.preventDefault();
      navigate('/')
   });
   
   const onLogout = (e) => {
      e.preventDefault();
      logoutReq();
      // logout();
      navigate('/');
      
   }
   
   const guestNav = (
      <ul className='guest'>
         <li className="login-link"><Link to="/login">Login</Link></li>
         <li className="register-link"><Link to="/register">Register</Link></li>
      </ul>
   );
   
   const userNav = (
      <ul className='user'>
         <li className="logout-link"><Link to="/" onClick={onLogout}>Logout</Link></li>
         <li ><Link to="/cart">Cart</Link></li>
      </ul>
   )
   const [navBar, setNavBar] = useState(guestNav);
   // useEffect(() => {
   //    if(sessionStorage.username){
   //       setNavBar(userNav);
   //    } else{
   //       setNavBar(guestNav);
   //    }
   // }, [])
   
   
   
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
                     {sessionStorage.username
                        ? userNav
                        : guestNav
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Header;