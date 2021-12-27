import { useState, useEffect } from "react";
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import { logout } from "../../../services/authService";


const NavBarUser = () => {
   const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState()
 
 
    useEffect(() => {
       setInterval(() => {
          const userString = sessionStorage.getItem("username");
          setUserInfo(userString);
       }, [])
    }, [userInfo]);
    
    
    const onLogout = (e) => {
       e.preventDefault();
       logout(sessionStorage.username);
       navigate('/');
       return sessionStorage.clear();
    }
    
    if ( !userInfo ){
        return(
        <ul className='guest'>
           <li className="login-link"><Link to="/login">Login</Link></li>
           <li className="register-link"><Link to="/register">Register</Link></li>
        </ul>
        );
    } else if(userInfo) {
        return(
        <ul className='user'>
           <li className="logout-link"><Link to="/" onClick={onLogout}>Logout</Link></li>
           <li ><Link to="/cart">Cart</Link></li>
           {/* <li className="register-link"><Link to="/register">Register</Link></li> */}
        </ul>
        );
    }
   
 }

 export default NavBarUser;