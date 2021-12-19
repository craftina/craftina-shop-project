import './Login.css';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();
    const onClickToRegister = () => {
        navigate('/register');
    }

    const onLoginBtn = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let {username, password} = Object.fromEntries(formData);
        authService.login(username, password);
        navigate('/');
    }


    return (
        <div>
            <div className="screen-1">
                <form method="POST" onSubmit={onLoginBtn}>

                    <div className="logo">
                        <img src="./images/form_logo.png" />
                    </div>
                    <div className="input-box username">
                        <label htmlFor="username">Username</label>
                        <div>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                    </div>
                    <div className="input-box password">
                        <label htmlFor="password">Password</label>
                        <div>
                            <input className="pas" type="password" name="password" placeholder="············" />
                        </div>
                    </div>
                    <button className="login-btn">Login</button>
                    <div className="form-footer">Don't have a registration:<br />
                        <span onClick={onClickToRegister}>Register</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;