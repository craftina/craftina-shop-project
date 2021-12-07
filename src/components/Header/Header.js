import './Header.css';

const Header = () => {
    return (
        <div className="header">
           
        <div className="container-fluid">
            
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
                       <div className="logo"> <a href="index.html"><img src="images/logo-transperant.png" alt="#" /></a> </div>
                    </div>
                 </div>
              </div>
              <div className="col-lg-9 user-nav">
                 <div className="right_header_info">
                    <ul>
                       <li className="login-link"><a href="/login">Login</a></li>
                       <li className="register-link"><a href="/register">Register</a></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
           </div>
    );
}

export default Header;