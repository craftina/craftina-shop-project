import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="screen-1">
                <div className="logo">
                    <img src="./images/form_logo.png" />
                </div>
                <div className="input-box email">
                    <label for="username">Username</label>
                    <div>
                        <input type="text" name="username" placeholder="hristina" />
                    </div>
                </div>
                <div className="input-box password">
                    <label for="password">Password</label>
                    <div>
                        <input className="pas" type="password" name="password" placeholder="············" />
                    </div>
                </div>
                <button className="login-btn">Login </button>
                <div className="form-footer">Don't have a registration:<br /><span>Signup</span></div>
            </div>
        </div>
    );
}

export default Login;